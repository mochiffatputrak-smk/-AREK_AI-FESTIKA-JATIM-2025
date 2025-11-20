// JS dari Halaman 1 (Homescreen) - Diubah agar scroll ke halaman 2, bukan redirect
const homeScreen = document.getElementById('halaman1');
const enterButton = document.getElementById('enter-button');

enterButton.addEventListener('click', () => {
    homeScreen.classList.add('fade-out');
    setTimeout(() => {
        
       window.location.href = 'map.html';
            }, 1000);
});

// Observer untuk halaman 2 animasi
const observerOptions = {
    threshold: 0.25
};

const animateItems = document.querySelectorAll('.halaman2 .animate-section');

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, observerOptions);

animateItems.forEach(item => {
    sectionObserver.observe(item);
});


// JS dari Halaman 2 (Galeri Tempat Menarik)
const data = [
  {
    id: 1,
    title: "Air Terjun Coban Canggu",
    description: "Air terjun alami yang populer dengan jalur trekking menantang, menawarkan pemandangan alam yang asri.",
    image: "images/2024.jpeg",
  },
  {
    id: 2,
    title: "Air Terjun Dlundung",
    description: "Air terjun populer yang berada di kawasan hutan pinus, cocok untuk rekreasi keluarga dan camping di udara yang sejuk",
    image: "images/2013.jpeg",
  },
  {
    id: 3,
    title: "Selo Malang River Tubing",
    description: "Wisata air berupa seluncuran atau tubing di sungai dengan pemandangan batuan alami, memacu adrenalin.",
    image: "images/2041.jpeg",
  },
  {
    id: 4,
    title: "Pacet Mini Park",
    description: "Taman rekreasi keluarga dengan wahana kolam renang. penginapan, dan fasilitas bermain, ideal untuk liburan singkat.",
    image: "images/2020.jpg",
  },
  {
    id: 5,
    title: "Candi Bajang Ratu",
    description: "Gapura Paduraksa ikonik peninggalan Majapahit abad ke-14 yang populer sebagai landmark sejarah dan fotografi.",
    image: "images/2033.jpeg",
  },
  {
    id: 6,
    title: "Bukit Kayoe Putih",
    description: "Bukit hijau yang menawarkan panorama lembah, populer untuk hiking ringan dan fotografi alam.",
    image: "images/2150.jpeg",
  },
];

// Elemen yang akan dirubah
const largeImageEl = document.getElementById("largeImage");
const largeTitleEl = document.getElementById("largeTitle");
const largeDescriptionEl = document.getElementById("largeDescription");
const smallImagesContainer = document.getElementById("smallImages");

let selectedId = data[0].id;

// Fungsi render gambar besar sesuai selectedId
function updateLargeImage(id) {
  const place = data.find((d) => d.id === id);
  if (!place) return;

  largeImageEl.src = place.image;
  largeImageEl.alt = place.title;
  largeTitleEl.textContent = place.title;
  largeDescriptionEl.textContent = place.description;

  selectedId = id;
  updateActiveSmallImage();
}

// Fungsi render list gambar kecil dan pasang event click
function renderSmallImages() {
  smallImagesContainer.innerHTML = "";

  data.forEach((place) => {
    const div = document.createElement("div");
    div.classList.add("small-image");
    if (place.id === selectedId) div.classList.add("active");

    const img = document.createElement("img");
    img.src = place.image;
    img.alt = place.title;

    div.appendChild(img);

    div.addEventListener("click", () => {
      if (place.id !== selectedId) {
        updateLargeImage(place.id);
      }
    });

    smallImagesContainer.appendChild(div);
  });
}

// Update class active pada small image yg sedang dipilih
function updateActiveSmallImage() {
  const smallImages = smallImagesContainer.querySelectorAll(".small-image");
  smallImages.forEach((imgDiv) => {
    if (
      imgDiv.querySelector("img").alt ===
      data.find((d) => d.id === selectedId).title
    ) {
      imgDiv.classList.add("active");
    } else {
      imgDiv.classList.remove("active");
    }
  });
}
// Array gambar background yang akan berganti-ganti
const images = [
    'images/2053.jpeg',
    'images/109.jpg',
    'images/101.jpg' ,
    'images/1061.jpeg',
    'images/100.jpeg',
    'images/2132.jpeg',
    'images/2122.jpeg',
    'images/116a.jpg', 
    'images/1120.jpg',
];

let currentIndex = 0; // Indeks gambar saat ini
const bg1 = document.querySelector('.bg1'); // Layer 1 (gambar saat ini)
const bg2 = document.querySelector('.bg2'); // Layer 2 (gambar berikutnya)

// Fungsi untuk mengganti background dengan crossfade
function changeBackground() {
    // Hitung indeks berikutnya
    const nextIndex = (currentIndex + 1) % images.length;
    
    // Set gambar baru ke layer hidden (bg2)
    bg2.style.backgroundImage = `url(${images[nextIndex]})`;
    
    // Toggle opacity untuk crossfade
   
    bg2.style.opacity = '1'; // Fade in gambar baru
    
    // Setelah transisi selesai, swap layer untuk persiapan pergantian berikutnya
    setTimeout(() => {
        // Reset opacity
        bg1.style.opacity = '1';
        bg2.style.opacity = '0';
        
        // Swap background: bg1 ambil gambar baru, bg2 kosongkan
        bg1.style.backgroundImage = `url(${images[nextIndex]})`;
        bg2.style.backgroundImage = ''; // Kosongkan untuk preload berikutnya
        
        // Update indeks
        currentIndex = nextIndex;
    }, 1500); // Sesuai durasi transisi (1.5s)
}

// Contoh pemanggilan: Ganti setiap 5 detik (sesuaikan interval)
setInterval(changeBackground, 3000);
// Inisialisasi
renderSmallImages();
updateLargeImage(selectedId);