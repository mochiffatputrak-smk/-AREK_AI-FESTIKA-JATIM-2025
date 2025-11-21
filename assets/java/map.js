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

// Variabel global untuk data marker (akan diisi langsung di dalam JS)
let markersData = [];

// Fungsi untuk load data marker langsung dari dalam JS (fokus utama: ambil semua data di sini)
function loadMarkersData() {
    
    markersData = [
  {
    "kecamatan": "Bangsal",
    "lat": -7.500648,
    "lng": 112.498308,
    "title": "Kecamatan Bangsal",
    "desc": "Bangsal adalah perpaduan unik antara industri rumahan dan agrowisata. Kecamatan ini terkenal sebagai pusat produksi batu bata merah berkualitas tinggi dan menjadi sentra penghasil Krupuk Rambak yang biasa di buat oleh-oleh. Temukan tempat untuk bersaintai di Bangsal!",
    "img": "images/113.jpeg"
  },
  {
    "kecamatan": "Dawarblandong",
    "lat": -7.330161,
    "lng": 112.417982,
    "title": "Kecamatan Dawarblandong",
    "desc": "Jelajahi 'gerbang utara' Mojokerto! Dawarblandong, yang berbatasan dengan Gresik dan Lamongan, adalah kecamatan terluas dengan karakteristik lahan yang kering. Waduk Dawarblandong menjadi potensi utamanya. Inilah alasan mengapa waduk di utara Mojokerto ini wajib dikunjungi.",
    "img": "images/118.jpeg"
  },
  {
    "kecamatan": "Dlanggu",
    "lat": -7.566203712871116,
    "lng": 112.48354042780542,
    "title": "Kecamatan Dlanggu",
    "desc": "Dlanggu adalah lumbung pangan Mojokerto yang terkenal dengan tanah suburnya. Karakteristik utamanya adalah sawah yang luas dan fokus pada beras organik. Inilah tempat ideal untuk merasakan kedamaian pedesaan. Salah satu tempat wisata terbaik di Mojokerto, cek lokasinya di sini!",
    "img": "images/110.jpeg"
  },
  {
    "kecamatan": "Gedeg",
    "lat": -7.454209339381071,
    "lng": 112.39684487285604,
    "title": "Kecamatan Gedeg",
    "desc": "Gedeg dikenal sebagai kawasan pertanian tebu yang luas. Namun, warisan budayanya yang paling ikonik adalah Tenun Gedeg, kain tradisional yang sedang diupayakan revitalisasinya. Temukan tempat ngopi kalcer di sini!",
    "img": "images/116.jpeg"
  },
  {
    "kecamatan": "Gondang",
    "lat": -7.611912,
    "lng": 112.489390,
    "title": "Kecamatan Gondang",
    "desc": "Berada di kaki gunung, Gondang memiliki potensi agrikultur dan peternakan yang terintegrasi. Kecamatan ini dikelilingi kebun tebu dan sentra peternakan sapi perah. Inilah rekomendasi tempat refresing di Gondang",
    "img": "images/112.jpeg"
  },
  {
    "kecamatan": "Jatirejo",
    "lat": -7.581531,
    "lng": 112.417372,
    "title": "Kecamatan Jatirejo",
    "desc": "Tersembunyi di kaki Gunung Anjasmoro, Jatirejo adalah destinasi bagi para pencari wisata rintisan. Karakteristiknya adalah topografi perbukitan dan alam yang masih perawan. Di sinilah terletaknya Situs Kumitir yang diduga istana penting Majapahit. Temukan wisata alam yang menegangkan disini!",
    "img": "images/104.jpg"
  },
  {
    "kecamatan": "Jetis",
    "lat": -7.401910,
    "lng": 112.447174,
    "title": "Kecamatan Jetis",
    "desc": "Berada di utara, Jetis memiliki karakteristik pinggiran Sungai Brantas yang identik dengan tambang sirtu (pasir/batu). Meski industri non-logam kuat, kecamatan ini juga memiliki potensi industri ringan dan kerajinan. selain itu Jetis juga memiliki tempat wisatanya. Penasaran, simak di sini!",
    "img": "images/115.jpeg"
  },
  {
    "kecamatan": "Kemlagi",
    "lat": -7.394616,
    "lng": 112.374439,
    "title": "Kecamatan Kemlagi",
    "desc": "Kemlagi adalah kawasan lahan kering di utara Mojokerto. Karakteristiknya didominasi oleh pertanian palawija (jagung, tembakau) dan hutan jati. Kecamatan ini adalah contoh pertanian yang adaptif terhadap air terbatas.",
    "img": "images/117.jpeg"
  },
  {
    "kecamatan": "Kutorejo",
    "lat": -7.56781554712586,
    "lng": 112.51100826003427,
    "title": "Kecamatan Kutorejo",
    "desc": "Ingin mencari oleh-oleh khas? Kutorejo adalah gudangnya UKM makanan olahan seperti sambal pecel dan krupuk yang dibuat secara tradisional. Karakteristiknya adalah kawasan pertanian tebu yang subur. Wajib mampir kesini saat melintas di Kutorejo!",
    "img": "images/114.jpeg"
  },
  {
    "kecamatan": "Mojoanyar",
    "lat": -7.471682,
    "lng": 112.484176,
    "title": "Kecamatan Mojoanyar",
    "desc": "Kecamatan termuda dengan perkembangan tercepat! Mojoanyar adalah kawasan residensial baru yang sangat strategis, berkat kedekatannya dengan Gerbang Tol Mojokerto. Potensinya adalah investasi properti dan hunian modern. Temukan spot ngopi viral di Mojoanyar!.",
    "img": "images/109.jpg"
  },
  {
    "kecamatan": "Mojosari",
    "lat": -7.517759979499977,
    "lng": 112.55792465435927,
    "title": "Kecamatan Mojosari",
    "desc": "Jantung ekonomi yang tak pernah mati. Meskipun bukan lagi ibukota, Mojosari tetap menjadi pusat perdagangan, jasa, dan layanan publik terlengkap. Kecamatan ini berkarakteristik padat dan ramai, didominasi Pasar Mojosari dan Stadion Gajah Mada yang legendaris. Mengapa Mojosari selalu jadi traffic utama di Mojokerto?",
    "img": "images/106.jpeg"
  },
  {
    "kecamatan": "Ngoro",
    "lat": -7.551837979456891,
    "lng": 112.61849997070667,
    "title": "Kecamatan Ngoro",
    "desc": "Ngoro: Bukan hanya sawah, tapi mesin uang Mojokerto! Berbatasan dengan Pasuruan, Ngoro adalah lokasi Ngoro Industrial Park (NIP), kawasan industri raksasa. Karakteristiknya adalah perpaduan pabrik modern dengan hunian pekerja. Selain pusat industri, Kecamatan Ngoro juga daya tariknya sendiri. Yuk Kepoin!",
    "img": "images/105.jpeg"
  },
  {
    "kecamatan": "Pacet",
    "lat": -7.666442378192616,
    "lng": 112.53712763346928,
    "title": "Kecamatan Pacet",
    "desc": "Siap memacu adrenalin? Pacet, yang berada di lereng Gunung Welirang-Anjasmoro, terkenal sebagai destinasi healing dan thrill. Kecamatan ini adalah rumah bagi Pemandian Air Panas Padusan yang melegenda, sekaligus jeram Sungai Kromong yang menantang untuk rafting. selain itu Cek menemukan tempat wisata lain di Pacet!",
    "img": "images/102.jpeg"
  },
  {
    "kecamatan": "Pungging",
    "lat": -7.539075,
    "lng": 112.575326,
    "title": "Kecamatan Pungging",
    "desc": "Tak hanya padi, Pungging adalah sentra perikanan air tawar terbesar! Kecamatan ini memiliki kolam-kolam budidaya lele dan gurami yang menghasilkan pasokan regional. Karakteristiknya adalah desa yang tenang, sempurna untuk wisata pemancingan. Selain pemancingan, Temukan lokasi kuliner dan tempat wisata di Pungging!",
    "img": "images/111.jpeg"
  },
  {
    "kecamatan": "Puri",
    "lat": -7.539806530073111,
    "lng": 112.44599017552008,
    "title": "Kecamatan Puri",
    "desc": "Ingin melihat Mojokerto yang paling modern? Puri dilintasi Bypass Krian Mojokerto dan menjadi rumah bagi kluster perumahan elite. Karakteristiknya adalah kawasan kuliner modern dan showroom otomotif. Selain hunian komersil, Puri juga punya hal menarik karena posisinya yang dekat dengan kota. penasaran? check it out!",
    "img": "images/108.jpeg"
  },
  {
    "kecamatan": "Sooko",
    "lat": -7.501015,
    "lng": 112.412784,
    "title": "Kecamatan Sooko",
    "desc": "Sooko adalah penyangga urban yang tumbuh pesat di sebelah timur Kota Mojokerto. Karakteristiknya adalah kawasan perumahan padat dan sentra UKM alas kaki (sepatu/sandal) yang memasok pasar regional. Selain posisi nya yang dekat dengan pusat kota, Sooko juga punya daya tariknya sendiri. Penasaran?, cek di sini!",
    "img": "images/107.jpeg"
  },
  {
    "kecamatan": "Trawas",
    "lat": -7.664622997856718,
    "lng": 112.59604350620671,
    "title": "Kecamatan Trawas",
    "desc": "Ingin kabur dari gerahnya kota? Trawas, surga di lereng Gunung Welirang, menawarkan udara paling sejuk Mojokerto. Berbatasan dengan Pasuruan, Trawas adalah rumah bagi glamping mewah dan kafe-kafe Instagramable yang menjanjikan pemandangan pegunungan yang masih alami. Temukan di mana saja spot nongkrong di sana!.",
    "img": "images/101a.jpg"
  },
  {
    "kecamatan": "Trowulan",
    "lat": -7.532409,
    "lng": 112.405397,
    "title": "Kecamatan Trowulan",
    "desc": "Tahukah Anda bahwa Trowulan bukanlah sekadar kecamatan biasa? Berada dekat pusat Mojokerto, kawasan ini adalah Ibukota legendaris Kerajaan Majapahit! Candi Bajang Ratu, Museum Majapahit, dan kerajinan terakota menanti Anda. Lihat sisa-sisa peradaban emas Nusantara yang masih utuh di sini!",
    "img": "images/103.jpg"
  },
];
    
    console.log('Data marker berhasil dimuat langsung dari JS:', markersData);
    
    // Setelah data dimuat, buat markers dan populate dropdown
    createMarkers();
    populateDropdown();
}

// Fungsi untuk membuat markers (fokus utama: ambil lat, lng, title, desc, img dari markersData yang langsung didefinisikan)
function createMarkers() {
    markersData.forEach(data => {
        // Ambil nama kecamatan dari markersData
        const kecamatanName = data.kecamatan;

        // Custom icon
        const customIcon = L.icon({
            iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
            iconSize: [25, 41],
            iconAnchor: [12, 42],
            popupAnchor: [0, -41],
            tooltipAnchor: [0, 23]
        });

        // Buat marker dengan lat dan lng dari markersData
        const marker = L.marker([data.lat, data.lng], { icon: customIcon }).addTo(map);
        marker.data = data;  // Simpan objek lengkap dari markersData (termasuk title, desc, img)

        // Tooltip permanen sebagai label kecamatan dari markersData
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

// Fungsi untuk populate dropdown dari markersData (dari dalam JS)
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

// Fungsi simulateMarkerClick - sekarang berdasarkan data kecamatan dari markersData
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
        console.warn('Marker untuk kecamatan ' + kecamatanName + ' tidak ditemukan di markersData.');
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

// Fungsi untuk update panel dan buka - ambil title, desc, img dari marker.data (dari markersData)
function updateAndOpenPanel(marker) {
    // Ambil data langsung dari markersData via marker.data
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

// Event listener untuk load - panggil loadMarkersData dulu untuk ambil data langsung dari JS
window.addEventListener('load', () => {
    loadMarkersData();  // Fokus: Load semua data marker langsung dari dalam JS di sini
    document.body.classList.add('loaded');
    setBackButtonPosition();
});

// Event listener untuk resize (tetap sama)
window.addEventListener('resize', () => {
    setBackButtonPosition();
});

