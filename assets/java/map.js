// Inisialisasi map (tetap sama)
const map = L.map('map').setView([-7.4824439, 112.5038777], 11);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.zoomControl.setPosition('bottomright');

L.tileLayer('https://api.maptiler.com/maps/basic-v2-no-labels/{z}/{x}/{y}.png?key=iiB23itvfBoDuWE2yxSo', {
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);

// Variabel global untuk data marker (akan diisi dari map.json)
let markersData = [];

// Fungsi untuk fetch data dari map.json (fokus utama: ambil semua data di sini)
async function loadMarkersData() {
    try {
        const response = await fetch('/assets/java/map.json');  // Path ke map.json (sesuaikan jika di folder berbeda)
        if (!response.ok) {
            throw new Error('Gagal memuat data marker dari map.json');
        }
        markersData = await response.json();
        console.log('Data marker berhasil dimuat dari map.json:', markersData);
        
        // Setelah data dimuat, buat markers dan populate dropdown
        createMarkers();
        populateDropdown();
    } catch (error) {
        console.error('Error loading markers data dari map.json:', error);
        // Tidak ada fallback hardcoded: Jika map.json gagal, tampilkan alert dan hentikan
        alert('Gagal memuat data peta. Pastikan file map.json tersedia dan coba lagi.');
        // Tidak buat marker atau dropdown jika gagal
    }
}

// Fungsi untuk membuat markers (fokus utama: ambil lat, lng, title, desc, img dari markersData yang di-fetch)
function createMarkers() {
    markersData.forEach(data => {
        // Ambil nama kecamatan dari map.json
        const kecamatanName = data.kecamatan;

        // Custom icon
        const customIcon = L.icon({
            iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
            iconSize: [25, 41],
            iconAnchor: [12, 42],
            popupAnchor: [0, -41],
            tooltipAnchor: [0, 23]
        });

        // Buat marker dengan lat dan lng dari map.json
        const marker = L.marker([data.lat, data.lng], { icon: customIcon }).addTo(map);
        marker.data = data;  // Simpan objek lengkap dari map.json (termasuk title, desc, img)

        // Tooltip permanen sebagai label kecamatan dari map.json
        marker.bindTooltip(kecamatanName, {
            permanent: true,
            direction: 'top',
            offset: [0, -5],
            className: 'custom-marker-label'
        });

        // Klik marker (zoom dan pan)
        marker.on('click', function() {
            const latlng = marker.getLatLng();
            const panel = document.getElementById('collapsePanel');

            if (panel.classList.contains('active')) {
                closeCollapse();
            }

            const currentZoom = map.getZoom();
            const targetZoom = 13;

            if (Math.abs(currentZoom - targetZoom) > 1) {
                console.log(`Zooming from ${currentZoom} to ${targetZoom}`);
                map.setZoom(targetZoom, { animate: true });

                map.once('zoomend', () => {
                    analyzeAndExecutePanWithOffset(latlng, marker);
                });

                setTimeout(() => {
                    if (!map._zoomEndTriggered) {
                        analyzeAndExecutePanWithOffset(latlng, marker);
                    }
                }, 600);

                map._zoomEndTriggered = false;
            } else {
                analyzeAndExecutePanWithOffset(latlng, marker);
            }
        });
    });
}

// Fungsi untuk populate dropdown dari markersData (dari map.json)
function populateDropdown() {
    const dropdownContent = document.getElementById('dropdownContent');
    dropdownContent.innerHTML = '';  // Kosongkan dropdown hardcoded
    
    markersData.forEach(data => {
        const link = document.createElement('a');
        link.textContent = data.kecamatan;
        link.onclick = () => simulateMarkerClick(data.kecamatan);
        dropdownContent.appendChild(link);
    });
}

// Fungsi untuk hitung jarak (tetap sama)
function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371000;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

// Fungsi simulateMarkerClick - sekarang berdasarkan data kecamatan dari map.json
function simulateMarkerClick(kecamatanName) {
    let targetMarker = null;
    
    map.eachLayer(function(layer) {
        if (layer instanceof L.Marker && layer.data && layer.data.kecamatan === kecamatanName) {
            targetMarker = layer;
        }
    });
    
    if (targetMarker) {
        const latlng = targetMarker.getLatLng();
        const panel = document.getElementById('collapsePanel');
        
        if (panel.classList.contains('active')) {
            closeCollapse();
        }
        
        const currentZoom = map.getZoom();
        const targetZoom = 13;
        
        if (Math.abs(currentZoom - targetZoom) > 1) {
            map.setZoom(targetZoom, { animate: true });
            map.once('zoomend', () => {
                analyzeAndExecutePanWithOffset(latlng, targetMarker);
            });
            setTimeout(() => {
                if (!map._zoomEndTriggered) {
                    analyzeAndExecutePanWithOffset(latlng, targetMarker);
                }
            }, 600);
            map._zoomEndTriggered = false;
        } else {
            analyzeAndExecutePanWithOffset(latlng, targetMarker);
        }
    } else {
        console.warn('Marker untuk kecamatan ' + kecamatanName + ' tidak ditemukan di map.json.');
    }
    
    toggleDropdown();
}

// Fungsi untuk analisis dan eksekusi pan dengan offset (tetap sama)
function analyzeAndExecutePanWithOffset(latlng, marker) {
    try {
        const currentCenter = map.getCenter();
        const distance = calculateDistance(currentCenter.lat, currentCenter.lng, latlng.lat, latlng.lng);
        const currentZoom = map.getZoom();
        
        const panelHeightPx = window.innerHeight * -0.3;
        const offsetPixel = panelHeightPx / 2 + 20;
        const point = map.latLngToContainerPoint(latlng);
        point.y -= offsetPixel;
        const targetLatLng = map.containerPointToLatLng(point);
        
        const baseThreshold = 500;
        const threshold = baseThreshold * Math.pow(2, 13 - currentZoom);
        
        console.log(`Distance to target: ${distance.toFixed(2)}m, Threshold: ${threshold.toFixed(2)}m`);
        
        if (distance > threshold) {
            console.log('Panning to target with offset');
            const panDuration = Math.min(1.0, distance / 10000);
            map.panTo(targetLatLng, { animate: true, duration: panDuration });
            
            map.once('moveend', () => {
                updateAndOpenPanel(marker);
            });
            
            setTimeout(() => {
                if (!map._moveEndTriggered) {
                    updateAndOpenPanel(marker);
                }
            }, panDuration * 1000 + 100);
            map._moveEndTriggered = false;
        } else {
            console.log('Distance too small, skipping pan to avoid over-panning');
            updateAndOpenPanel(marker);
        }
    } catch (error) {
        console.error('Error in analyzeAndExecutePanWithOffset:', error);
        const panelHeightPx = window.innerHeight * -0.3;
        const offsetPixel = panelHeightPx / 2 + 20;
        const point = map.latLngToContainerPoint(latlng);
        point.y -= offsetPixel;
        const targetLatLng = map.containerPointToLatLng(point);
        map.panTo(targetLatLng, { animate: true });
        setTimeout(() => updateAndOpenPanel(marker), 450);
    }
    
    map._zoomEndTriggered = true;
}

// Fungsi untuk update panel dan buka - ambil title, desc, img dari marker.data (dari map.json)
function updateAndOpenPanel(marker) {
    // Ambil data langsung dari map.json via marker.data
    document.getElementById('panelImage').src = marker.data.img;
    document.getElementById('panelTitle').textContent = marker.data.title;
    document.getElementById('panelDescription').textContent = marker.data.desc;
    
    openCollapse();
    
    map._moveEndTriggered = true;
}

// Fungsi openCollapse dan closeCollapse (tetap sama)
function openCollapse() {
    document.getElementById('collapsePanel').classList.add('active');
}

function closeCollapse() {
    document.getElementById('collapsePanel').classList.remove('active');
}

// Fungsi goToDetailPage (diubah untuk mengarahkan ke folder KecamatanArtikel)
function goToDetailPage() {
    const panelTitle = document.getElementById('panelTitle').textContent;

    const kecamatanName = panelTitle
        .replace('Kecamatan ', '')
        .trim();

    // Kapitalisasi nama kecamatan
    const capitalizedKecamatanName = kecamatanName.charAt(0).toUpperCase() + kecamatanName.slice(1).toLowerCase();

    // Arahkan ke folder KecamatanArtikel/nama kecamatan/index.html
    const url = `KecamatanArtikel/${capitalizedKecamatanName}/index.html`;

    window.location.href = url;
}


// Fungsi toggleDropdown (tetap sama)
function toggleDropdown() {
    if (document.getElementById('collapsePanel').classList.contains('active')) {
        closeCollapse();
    }
    
    const content = document.getElementById('dropdownContent');
    content.classList.toggle('show');
}

// Event listener untuk klik di luar dropdown (tetap sama)
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName('dropdown-content');
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

// Fungsi setBackButtonPosition (tetap sama)
function setBackButtonPosition() {
    const banner = document.querySelector('.banner');
    const backButton = document.querySelector('.back-button');
    backButton.style.top = (banner.offsetHeight + 10) + 'px';
}

// Fungsi goBack (tetap sama)
function goBack() {
    const overlay = document.getElementById('transitionOverlay');
    overlay.classList.add('active');
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 500);
}

// Event listener untuk klik di luar panel (tetap sama)
document.addEventListener('click', function(event) {
    const panel = document.getElementById('collapsePanel');
    const closeButton = panel.querySelector('.close-button');
    
    if (panel.classList.contains('active') && !panel.contains(event.target) && event.target !== closeButton) {
        closeCollapse();
    }
});

// Event listener untuk load - panggil loadMarkersData dulu untuk ambil data dari map.json
window.addEventListener('load', () => {
    loadMarkersData();  // Fokus: Load semua data marker dari map.json di sini
    document.body.classList.add('loaded');
    setBackButtonPosition();
});

// Event listener untuk resize (tetap sama)
window.addEventListener('resize', () => {
    setBackButtonPosition();
});

