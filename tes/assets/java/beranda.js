
const data = [
  {
    id: 1,
    title: "Candi Bajang Ratu",
    description: "Situs purbakala yang memiliki arsitektur unik di Mojokerto.",
    image: "images/qingyi.jpg",
  },
  {
    id: 2,
    title: "Trowulan Museum",
    description: "Museum arkeologi tempat peninggalan kerajaan Majapahit.",
    image: "images/phoebe.png",
  },
  {
    id: 3,
    title: "Mojokerto Zoo",
    description: "Kebun binatang yang cocok untuk rekreasi keluarga.",
    image: "images/rozaliya.jpg",
  },
  {
    id: 4,
    title: "Alun-Alun Mojokerto",
    description: "Taman kota dengan suasana asri dan landmark kota.",
    image: "images/sparkle1.png",
  },
  {
    id: 5,
    title: "Air Terjun Dlundung",
    description: "Air terjun indah cocok untuk pecinta alam.",
    image: "images/sparkle2.jpg",
  },
  {
    id: 6,
    title: "Wisata Bahari Mojokerto",
    description: "Tempat bermain dan rekreasi air untuk semua umur.",
    image: "images/hofi.png",
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

// Inisialisasi
renderSmallImages();
updateLargeImage(selectedId);