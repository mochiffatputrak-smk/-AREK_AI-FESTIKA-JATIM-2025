// main.js

// Ambil nama kecamatan dari URL
const params = new URLSearchParams(window.location.search);
const kecamatanName = params.get("kecamatan");

// Data main.json di-hardcode langsung ke dalam JS (paste JSON array di sini, akan dikonversi ke objek)
const mainJsonArray = [
  [
  {
    "kecamatan": "Bangsal",
    "title": "Kecamatan Bangsal",
    "banner": "images/113.jpeg",
    "desc1": "Bangsal merupakan kecamatan penyangga urban yang berfungsi sebagai zona transit dan memiliki potensi ekonomi dan perdagangan jasa. Bangsal memiliki posisi yang penting sebagai titik temu dalam sistem transportasi regional. Potensi usaha berfokus pada pengembangan perdagangan dan jasa retail untuk melayani populasi yang padat di wilayah tengah Mojokerto. Bangsal menawarkan investasi di sektor jasa retail, properti komersial, dan pusat layanan. Perannya sebagai zona transit harus dimaksimalkan dengan pembangunan fasilitas pendukung perdagangan yang modern, menjadikan Bangsal kawasan niaga yang terintegrasi.",
    "img1": "images/",
    "desc2": "-",
    "img2": "images/",
    "desc3": "-",
    "img3": "images/"
  },
  {
    "kecamatan": "Dawarblandong",
    "title": "Kecamatan Dawarblandong",
    "banner": "images/118.jpeg",
    "desc1": "Dawarblandong adalah kecamatan perbatasan utara yang ikonik dengan upaya ketahanan air melalui Waduk Windu, sekaligus memiliki warisan sejarah penyebaran agama Islam. Dawarblandong memiliki warisan sejarah keagamaan, seperti kisah penyebar agama Islam Mbah Tulak dan tradisi Alung-Alung. Kondisi terkini menunjukkan bahwa pembangunan Waduk Windu dan embung telah disulap menjadi kawasan wisata air lokal untuk membangkitkan ekonomi warga. Wilayah ini juga tercatat memiliki potensi pertambangan batuan dan mineral bukan logam. Potensi usaha mencakup pengembangan agrowisata terintegrasi dengan pengelolaan air Waduk Windu. Pemanfaatan lokasi sebagai sentra pertanian yang didukung irigasi waduk adalah prioritas, meminimalkan dampak negatif dari pertambangan. Dawarblandong adalah contoh revitalisasi berbasis infrastruktur air. Kami mengajak Anda untuk berinvestasi dalam agribisnis dan agrowisata yang didukung oleh irigasi modern, serta mendukung kebangkitan ekonomi desa melalui optimalisasi sumber daya airnya.",
    "img1": "images/",
    "desc2": "-",
    "img2": "images/",
    "desc3": "-",
    "img3": "images/"
  },
  {
    "kecamatan": "Dlanggu",
    "title": "Kecamatan Dlanggu",
    "banner": "images/110.jpeg",
    "desc1": "Dlanggu merupakan sentra penting agribisnis hortikultura, dengan ikonnya sebagai penghasil buah-buahan tropis unggulan, termasuk nanas, durian, dan manggis. Dlanggu memiliki tradisi agrikultur yang kuat, menghasilkan buah tropis unggulan. Namun, wilayah ini tercatat memiliki potensi pertambangan batuan. Potensi usaha berpusat pada pengembangan industri pasca-panen (post-harvest handling), logistik rantai dingin (cold chain) untuk buah-buahan, dan peningkatan kualitas ekspor hortikultura premium. Pengendalian pertambangan harus diprioritaskan untuk melindungi lahan subur hortikultura yang memiliki nilai ekonomi tinggi dan berkelanjutan. Dlanggu ideal untuk investasi agribisnis skala besar yang berfokus pada teknologi rantai dingin dan ekspor. Kami mengajak Anda untuk berinvestasi di Dlanggu sebagai pemasok buah-buahan premium di Jawa Timur, menjamin pertumbuhan ekonomi yang berbasis aset alam yang subur.",
    "img1": "images/",
    "desc2": "-",
    "img2": "images/",
    "desc3": "-",
    "img3": "images/"
  },
  {
    "kecamatan": "Gedeg",
    "title": "Kecamatan Gedeg",
    "banner": "images/116.jpeg",
    "desc1": "Gedeg terletak di kawasan dataran rendah utara, yang memiliki potensi sumber daya mineral dan berfungsi sebagai sentra persinggahan agrikultur. Sama seperti kecamatan di koridor utara lainnya, Wilayah ini juga mencatat produksi perikanan tangkap yang moderat. Potensi usaha mencakup pengembangan klaster industri kecil menengah (IKM) yang terkait dengan hasil pertanian dan perikanan (pengolahan hasil perikanan). Pengendalian pertambangan dan fokus pada pengembangan perikanan tangkap di perairan umum harus menjadi prioritas strategis di Gedeg. Gedeg memiliki proposisi nilai ganda sebagai penghubung dan lokasi sumber daya. Investasi harus diarahkan pada peningkatan nilai tambah agrikultur dan perikanan, serta mengintegrasikan pengelolaan pertambangan mineral dengan program mitigasi dampak lingkungan yang komprehensif.",
    "img1": "images/",
    "desc2": "-",
    "img2": "images/",
    "desc3": "-",
    "img3": "images/"
  },
  {
    "kecamatan": "Gondang",
    "title": "Kecamatan Gondang",
    "banner": "images/112.jpeg",
    "desc1": "Berada di kaki gunung, Gondang memiliki potensi agrikultur dan peternakan yang terintegrasi. Kecamatan ini dikelilingi kebun tebu dan sentra peternakan sapi perah. Inilah rahasia produksi susu segar dan daging berkualitas dari Gondang! Gondang adalah kawasan penyangga ekologi dan hortikultura di selatan Mojokerto, berdekatan dengan kawasan konservasi Trawas dan Pacet. Identitasnya adalah zona hijau yang kaya hasil pertanian buah-buahan. Gondang memiliki latar belakang pertanian yang kaya. Kondisi terkini, Gondang termasuk sentra hortikultura yang memproduksi nanas, durian, dan manggis. Terdapat pula kelompok perikanan (Pokdakan Desa Padi). Meskipun terdapat potensi pertambangan batuan, perkembangannya dibatasi. Potensi usaha berfokus pada pengembangan agrowisata berbasis buah-buahan tropis dan penguatan kelompok perikanan. Kawasan ini harus diprioritaskan sebagai zona hijau dan konservasi untuk menjaga keseimbangan ekosistem di selatan. Gondang adalah lokasi investasi yang strategis dalam konservasi berbasis ekonomi. Kami merekomendasikan investasi pada agrowisata dan produksi hortikultura berkelanjutan, mempertahankan citra ekologi kawasan dan memanfaatkan keindahan alamnya",
    "img1": "images/1120.jpg",
    "desc2": "-",
    "img2": "images/",
    "desc3": "-",
    "img3": "images/"
  },
  {
    "kecamatan": "Jatirejo",
    "title": "Kecamatan Jatirejo",
    "banner": "images/104.png",
    "desc1": "Jatirejo dikenal memiliki dualitas potensi: wisata alam yang indah dan peninggalan sejarah yang penting, diposisikan sebagai kawasan penyangga antara pegunungan selatan dan dataran tengah Kabupaten Mojokerto. Daya tarik utamanya adalah wisata sejarah dan wisata alam, menawarkan pemandangan indah di perbukitan.",
    "img1": "images/1040.jpeg",
    "desc2": " Namun, Jatirejo juga termasuk dalam daftar wilayah yang memiliki potensi pertambangan batuan. Potensi usaha adalah pengembangan wisata edukasi dan sejarah sebagai pelengkap kawasan Trowulan.",
    "img2": "images/",
    "desc3": " Jatirejo adalah lokasi investasi yang memerlukan pendekatan seimbang: memaksimalkan potensi wisata alam dan sejarah sambil memastikan industri ekstraktif dikelola secara berkelanjutan. Kami mengajak Anda untuk menemukan keindahan alam Jatirejo, dan historisnya.",
    "img3": "images/"
  },
  {
    "kecamatan": "Jetis",
    "title": "Kecamatan Jetis",
    "banner": "images/115.jpeg",
    "desc1": "Jetis adalah kawasan industri dan logistik di utara Kabupaten Mojokerto, diposisikan secara strategis di dekat Sungai Brantas, dan dikenal memiliki potensi pertambangan sirtu dan batuan yang signifikan. Secara historis, Jetis merupakan wilayah yang penting dalam jalur perdagangan. Kondisi terkini menunjukkan potensi penambangan sirtu dan batuan yang tinggi. Potensi usaha meliputi pengembangan sektor industri ringan dan menengah yang memanfaatkan akses logistik dan material konstruksi lokal. Manajemen penambangan memerlukan komitmen ketat terhadap lingkungan dan reklamasi, memastikan tidak ada eksploitasi berlebihan yang merusak fungsi lahan vital. Jetis adalah komponen kunci dalam jaringan logistik utara. Kami mengajak investor untuk berinvestasi di bidang infrastruktur pergudangan dan pengolahan material konstruksi, memastikan pembangunan sinergis dengan rencana pengembangan kawasan industri Gerbang kertosusilo Plus.",
    "img1": "images/",
    "desc2": "-",
    "img2": "images/",
    "desc3": "-",
    "img3": "images/"
  },
  {
    "kecamatan": "Kemlagi",
    "title": "Kecamatan Kemlagi",
    "banner": "images/117.jpeg",
    "desc1": "Kemlagi merupakan kawasan geografis di bagian utara ibukota Kabupaten Mojokerto, yang berfungsi sebagai zona pertanian lahan kering dan memiliki potensi sumber daya mineral. Kemlagi, dengan luas wilayah 50,05 km² dan terdiri dari 20 desa, secara historis merupakan wilayah penghubung antara Kabupaten Mojokerto Utara dan wilayah Jombang. Kondisi terkini menunjukkan adanya potensi pertambangan mineral bukan logam. Potensi usaha harus difokuskan pada pengembangan pertanian lahan kering (palawija) dan pemanfaatan potensi mineral, dengan syarat tata ruang memungkinkan. Pengelolaan sumber daya harus terintegrasi dengan rencana pembangunan kawasan yang berbatasan (Dawarblandong, Jetis, Gedeg). Kemlagi adalah zona pengembangan agribisnis dan penyediaan material konstruksi di utara. Kami mendorong investasi yang cermat, yang mampu menyeimbangkan pemanfaatan sumber daya mineral dengan perlindungan hak-hak pertanian intensif demi ketahanan pangan lokal.",
    "img1": "images/",
    "desc2": "-",
    "img2": "images/",
    "desc3": "-",
    "img3": "images/"
  },
  {
    "kecamatan": "Kutorejo",
    "title": "Kecamatan Kutorejo",
    "banner": "images/114.jpeg",
    "desc1": "Kutorejo adalah kawasan yang mencerminkan dualitas sejarah: pelestarian budaya Jawa yang hidup (tradisi adat) dan signifikansi militer dalam mempertahankan kemerdekaan RI pada tahun 1949. Kutorejo memiliki tradisi budaya yang kuat, termasuk Bersih Desa, Sedekah Bumi, dan pelestarian kesenian seperti Reog atau Kuda Lumping. Wilayah ini juga merupakan garis akhir pertahanan pertempuran melawan Tentara Belanda tahun 1949.  Kutorejo melestarikan living culture yang unik. Potensi usaha mencakup pengembangan paket wisata. Kutorejo menawarkan proposisi nilai edukasi ganda yang kaya: memahami kesinambungan budaya Majapahit hingga kini dan mengenang sejarah perjuangan kemerdekaan. Kami mendorong Anda untuk mengunjungi Kutorejo, merasakan kehangatan budaya Jawa yang hidup, dan mendukung investasi di bidang pelestarian kultural.",
    "img1": "images/",
    "desc2": "-",
    "img2": "images/",
    "desc3": "-",
    "img3": "images/"
  },
  {
    "kecamatan": "Mojoanyar",
    "title": "Kecamatan Mojoanyar",
    "banner": "images/109.jpg",
    "desc1": "Mojoanyar merupakan kawasan urban buffer yang strategis, hasil pemekaran wilayah yang berkembang pesat. Identitas utamanya adalah sebagai zona residensial modern, simpul akses infrastruktur vital Kabupaten Mojokerto, dan kini diperkuat sebagai pusat pengembangan pendidikan tinggi. Perkembangan wilayah Mojoanyar didorong oleh kebutuhan perumahan bagi populasi pekerja di kawasan industri terdekat. Selain menjadi sentra properti residensial skala besar, kawasan ini kini diperkuat oleh kehadiran beberapa institusi universitas, menjadikannya pusat pengembangan sumber daya manusia dan kehidupan akademik.",
    "img1": "images/1090.jpeg",
    "desc2": "Secara infrastruktur, Mojoanyar dilintasi saluran air vital (Rolak Songo) dan memiliki potensi sumber daya alam.",
    "img2": "images/1091.jpeg",
    "desc3": "Mojoanyar adalah lokasi investasi yang sangat strategis di sektor properti, jasa pendukung, dan pendidikan. Kami menawarkan peluang untuk membangun hunian berkualitas dan fasilitas akademik dengan aksesibilitas terbaik, seraya menyerukan manajemen tata ruang yang bijaksana untuk menyeimbangkan pertumbuhan urban dan kelestarian lingkungan.",
    "img3": "images/"
  },
  {
    "kecamatan": "Mojosari",
    "title": "Kecamatan Mojosari",
    "banner": "images/106.jpeg",
    "desc1": "Mojosari adalah pusat jasa dan agribisnis di Mojokerto, dengan sejarah perkembangan ekologi dan tata kota yang panjang. Karakteristiknya adalah aktivitas ekonomi lokal yang kuat.",
    "img1": "images/1060.jpg",
    "desc2": "Sejak lama, Mojosari telah menjadi pusat regional, ditandai dengan perencanaan tata kota pada tahun 1992 dan keberadaan jalur trem Mojokerto-Japanan pada tahun 1893. Saat ini, Mojosari merupakan pusat kegiatan yang juga menjadi sentra kuliner dan bisnis, dengan besaran pendapatan yang bervariasi sesuai skala usaha.",
    "img2": "images/1061.jpeg",
    "desc3": "Meskipun menghadapi isu lingkungan seperti banjir. Mojosari sendiri memiliki lokasi strategis yang dikelilingi perbukitan hijau. Potensi usaha berfokus pada peningkatan nilai tambah sektor pangan, seperti pengolahan hasil ternak itik, dan pengembangan infrastruktur berkelanjutan untuk mengatasi isu tata ruang. Mojosari berfungsi sebagai hub ekonomi dan administrasi yang dinamis. Kami mengajak Anda untuk berinvestasi dalam modernisasi agribisnis dan sektor jasa pendukung, memanfaatkannya sebagai pusat logistik dan perdagangan yang vital di Kabupaten Mojokerto.",
    "img3": "images/"
  },
  {
    "kecamatan": "Ngoro",
    "title": "Kecamatan Ngoro",
    "banner": "images/105.jpeg",
    "desc1": "Ngoro adalah gerbang utama industri Kabupaten Mojokerto, dicirikan oleh keberadaan Ngoro Industrial Park (NIP),",
    "img1": "images/1050.png",
    "desc2": "sebuah sentra investasi yang memiliki fasilitas vital untuk ekspor. Ngoro merupakan lokus pertumbuhan ekonomi yang harus diseimbangkan dengan tuntutan lingkungan. Perkembangan signifikan Ngoro dimulai seiring penetapannya sebagai kawasan industri strategis. Kondisi terkini menunjukkan bahwa NIP menyediakan layanan Export Processing Zone (EPZ) serta penyewaan gedung pabrik dan gudang bagi investor internasional.  Potensi usaha di sini adalah optimalisasi layanan EPZ untuk menarik investasi berteknologi tinggi. Namun, Ngoro juga menghadapi tantangan ekologis akibat adanya kegiatan pertambangan batuan yang perlu dibatasi dan diiringi komitmen tegas untuk melakukan reklamasi bekas penggalian.",
    "img2": "images/1051.jpeg",
    "desc3": "Ngoro adalah lokasi kunci bagi manufaktur dan logistik yang berorientasi ekspor, menawarkan lingkungan bisnis yang terstruktur dan kompetitif. Kami mendorong investor untuk memanfaatkan keuntungan NIP sambil berkomitmen pada manajemen lingkungan yang ketat untuk menjamin keseimbangan antara pertumbuhan ekonomi dan keberlanjutan.",
    "img3": "images/"
  },
  {
    "kecamatan": "Pacet",
    "title": "Kecamatan Pacet",
    "banner": "images/102.jpeg",
    "desc1": "Pacet merupakan ikon Community-Based Tourism (CBT) dan wisata kesehatan publik Kabupaten Mojokerto. Lokasinya yang strategis di lereng pegunungan menawarkan potensi air panas alami, menjadikannya daya tarik utama bagi wisatawan keluarga dan mereka yang mencari terapi air.",
    "img1": "images/1020.jpg",
    "desc2": "Pacet memiliki sejarah panjang sebagai salah satu pusat wisata utama Mojokerto. Saat ini, Pacet aktif mengembangkan pariwisata berbasis masyarakat. Pemandian Air Panas Padusan adalah daya tarik terkenal yang beroperasi hampir 24 jam sehari, melayani ribuan pengunjung yang mencari manfaat terapi air belerang. Selain itu, kompleks wisata Padusan Park menawarkan pemandian air panas dan fasilitas wisata keluarga.",
    "img2": "images/1021.jpeg",
    "desc3": "Potensi usaha di Pacet mencakup optimalisasi CBT dengan diversifikasi produk dari alam murni ke wisata edukasi dan budaya. Perbaikan infrastruktur dan penunjuk jalan yang memadai sangat penting untuk memaksimalkan aksesibilitas bagi wisatawan yang melakukan perjalanan mandiri. Pacet menawarkan perpaduan yang harmonis antara wisata alam yang terjangkau dan manfaat kesehatan publik. Kami merekomendasikan Pacet sebagai destinasi liburan keluarga yang lengkap, sekaligus tempat bagi investor yang ingin berkontribusi pada pembangunan pariwisata berkelanjutan dan berbasis komunitas.",
    "img3": "images/1023.jpeg"
  },
  {
    "kecamatan": "Pungging",
    "title": "Kecamatan Pungging",
    "banner": "images/111.jpeg",
    "desc1": "Pungging dikenal sebagai sentra perikanan budidaya yang vital bagi ketahanan pangan regional Kabupaten Mojokerto. Identitasnya dicirikan oleh tradisi budidaya air tawar yang kuat. Secara historis, kawasan Pungging telah mengandalkan potensi perairan darat untuk budidaya ikan. Kondisi terkini menunjukkan realisasi produksi perikanan budidaya yang tinggi, mendekati target nasional. Keberhasilan ini didukung oleh kelompok pengolah dan pemasar perikanan (POKLAHSAR). Potensi usaha berfokus pada peningkatan teknologi budidaya dan pengolahan hasil perikanan. Dukungan digitalisasi pemasaran sangat penting untuk memperluas jangkauan pasar hasil perikanan Pungging. Pungging menawarkan peluang investasi di sektor perikanan berbasis inovasi dan teknologi, menjadikannya pusat ketahanan pangan regional yang kuat. Kami mendorong Anda untuk berinvestasi dalam modernisasi rantai pasok perikanan Pungging guna meningkatkan profitabilitas dan efisiensi produksi pangan.",
    "img1": "images/",
    "desc2": "-",
    "img2": "images/",
    "desc3": "-",
    "img3": "images/"
  },
  {
    "kecamatan": "Puri",
    "title": "Kecamatan Puri",
    "banner": "images/108.jpeg",
    "desc1": "Puri adalah kecamatan yang berdekatan dengan kota Mojokerto, berfungsi sebagai zona urban buffer dan pengembangan permukiman skala menengah ke atas, melayani kebutuhan populasi yang bekerja di pusat industri dan jasa.",
    "img1": "images/1080.jpeg",
    "desc2": "Wilayah Puri tumbuh seiring perkembangan pusat kota. Saat ini, fokus wilayah ini adalah fungsi permukiman dan layanan jasa dasar. Potensi usaha mencakup pembangunan perumahan skala menengah dan besar, serta pengembangan pusat kesehatan dan pendidikan untuk mendukung populasi yang berkembang.",
    "img2": "images/1081.jpeg",
    "desc3": "Puri adalah pilihan utama untuk investasi di sektor real estat residensial. Proposisi nilainya adalah menawarkan lingkungan hidup yang nyaman dengan aksesibilitas tinggi ke pusat-pusat ekonomi, menjadikannya pilihan ideal bagi keluarga pekerja dan profesional di Kabupaten Mojokerto.",
    "img3": "images/"
  },
  {
    "kecamatan": "Sooko",
    "title": "Kecamatan Sooko",
    "banner": "images/107.jpeg",
    "desc1": "Sooko memegang peran ganda sebagai pusat administrasi dan jasa sekaligus klaster ekonomi kreatif bagi Kabupaten Mojokerto. Karakteristiknya adalah perpaduan unik antara sentra pelayanan publik yang vital dan kawasan industri rumahan yang produknya telah diakui hingga kancah global. Sooko merupakan lokasi strategis bagi sejumlah kantor layanan publik utama kabupaten, seperti Kantor Dinas Sosial, yang menegaskan perannya sebagai hub administrasi dan pelayanan regional. Secara ekonomi, Sooko sangat menonjol sebagai Kampung Sepatu.",
    "img1": "images/1070.jpeg",
    "desc2": " Sentra industri alas kaki ini berhasil memproduksi barang dengan desain berkelas internasional. Selain aktivitas formal, kawasan ini menawarkan destinasi rekreasi urban seperti Waterland Mojokerto,",
    "img2": "images/1071.jpeg",
    "desc3": "Kami mengundang Anda untuk mengunjungi Sooko dan menyaksikan sinergi harmonis antara pelayanan publik, kewirausahaan lokal, dan kualitas hidup urban yang berkelanjutan.",
    "img3": "images/"
  },
   {
    "kecamatan": "Trawas",
    "title": "Kecamatan Trawas",
    "banner": "images/101.png",
    "desc1": "Trawas dikenal secara luas sebagai The Mountain Retreat of Mojokerto, sebuah kawasan yang dicirikan oleh elevasi rata-rata tinggi, mencapai 700 meter di atas permukaan laut. Identitas ikoniknya adalah sebagai area resor dan peristirahatan yang terletak di kaki Gunung Arjuno, Welirang, dan Penanggungan, merepresentasikan fungsi vital Kabupaten Mojokerto dalam konservasi ekologi dan pariwisata premium.",
 "img1": "images/1010.jpeg",
"desc2": "Secara historis, Trawas telah lama berfungsi sebagai kawasan peristirahatan sejak era kolonial. Kondisi terkini menunjukkan bahwa wilayah ini memiliki 13 desa, di mana sebagian besar penduduknya bermata pencaharian sebagai petani kebun, pegawai, dan karyawan swasta, mencerminkan orientasi ekonomi pada sektor jasa dan agrobisnis. Daya tarik utamanya adalah keindahan alam yang memikat mata.  Puncak Bayangan Gunung Penanggungan menjadi lokasi favorit untuk berkemah dan menikmati pemandangan matahari terbit.",
"img2": "images/1011.jpeg",
"desc3": "Potensi usaha di Trawas berpusat pada klaster premium leisure tourism, pengembangan boutique resorts, serta fasilitas outbound dan MICE (Meeting, Incentive, Convention, and Exhibition) yang memanfaatkan iklim sejuk dan panorama pegunungan.",
"img3": "images/1012.jpg",
"desc4": "Trawas menawarkan proposisi nilai yang unik sebagai pusat kesehatan, ketenangan (wellness), dan investasi properti. Kami mengundang Anda untuk menemukan ketenangan sejati di tengah lanskap alam yang memukau, menjadikannya destinasi wajib bagi mereka yang mencari pengalaman wisata premium di Jawa Timur."
  },
  {
    "kecamatan": "Trowulan",
    "title": "Kecamatan Trowulan",
    "banner": "images/103.png",
    "desc1": "Trowulan adalah jantung peradaban Indonesia dan ikon Warisan Sejarah Nasional. Kecamatan ini diyakini luas sebagai lokasi Ibu Kota Kerajaan Majapahit di masa lampau. Nilai ikonik Trowulan melampaui batas regional karena menaungi falsafah Bhinneka Tunggal Ika, yang berasal dari Kakawin Sutasoma.",
    "img1": "images/1030.jpg",
    "desc2": "Sejarah arkeologi di Trowulan dimulai pada tahun 1815 atas perintah Sir Thomas Stamford Raffles. Upaya pelestarian formal digagas Henri Maclaine Pont dan Raden Adipati Arya Kromodjojo Adinegoro IV pada tahun 1924, menegaskan Trowulan sebagai saksi keberagaman dan toleransi. Saat ini, kawasan ini berfungsi sebagai pusat arkeologi dan edukasi. Daya tarik utamanya adalah Museum Trowulan yang menyimpan koleksi tak ternilai, termasuk Arca Ganesha, prasasti, keramik, dan fragmen gapura kuno.",
    "img2": "images/1031.jpg",
    "desc3": " Potensi usaha difokuskan pada pengembangan heritage interpretation, riset arkeologi, dan pembangunan fasilitas edukasi budaya kelas dunia. Bisnis pendukung harus bersifat non-ekstraktif dan mendukung konservasi warisan budaya tersebut. Trowulan adalah tujuan wajib bagi studi sejarah, arkeologi, dan edukasi kebangsaan. Kami mengundang Anda untuk mengunjungi Trowulan dan menapaki jejak kemegahan Majapahit, memahami secara langsung bagaimana peradaban kuno ini membentuk jati diri Bangsa Indonesia hari ini.",
    "img3": "images/1032"
  }
]
];

const wisataJsonArray = [
  // Paste wisata.json data here as array, if available; otherwise leave empty
];

// Konversi array JSON ke objek untuk akses cepat berdasarkan kecamatan lowercase
const mainData = {};
mainJsonArray.forEach(item => {
  mainData[item.kecamatan.toLowerCase()] = item;
});

const wisataData = {};
wisataJsonArray.forEach(item => {
  wisataData[item.kecamatan.toLowerCase()] = item;
});

document.addEventListener("DOMContentLoaded", () => {
  // Ambil parameter kecamatan dari URL
  const urlParams = new URLSearchParams(window.location.search);
  const kecamatan = urlParams.get("kecamatan")?.toLowerCase();

  // Elemen DOM
  const banner = document.getElementById("banner");
  const titleEl = document.getElementById("title");
  const desc1El = document.getElementById("desc1");
  const blueImg = document.getElementById("blue-layout");
  const desc2El = document.getElementById("desc2");
  const limeImg = document.getElementById("lime-layout");
  const desc3El = document.getElementById("desc3");
  const cyanImg = document.getElementById("cyan-layout");
  const desc4El = document.getElementById("desc4");
  const blackImg = document.getElementById("black-layout");
  const desc5El = document.getElementById("desc5");

  const carouselRed = document.getElementById("carousel-red");
  const carouselImage = document.getElementById("carousel-image");
  const carouselBtnLeft = document.getElementById("carousel-btn-left");
  const carouselBtnRight = document.getElementById("carousel-btn-right");
  const subjudulEl = document.getElementById("subjudul");
  const descSubjudulEl = document.getElementById("desc-subjudul");
  const btnToMap = document.getElementById("btn-to-map");

  // Data wisata untuk carousel
  let wisataImages = [];
  let currentCarouselIndex = 0;

  // Gunakan data yang sudah di-hardcode (tidak perlu fetch lagi)
  if (!kecamatan) {
    alert("Nama kecamatan tidak ditemukan atau tidak diberikan.");
    return;
  }

  // Ambil data kecamatan dari mainData dan wisataData
  const kecamatanMain = mainData[kecamatan];
  const kecamatanWisata = wisataData[kecamatan];

  if (!kecamatanMain) {
    alert("Data kecamatan tidak ditemukan di mainData.");
    return;
  }

  // Set layout Pink banner
  if ("banner" in kecamatanMain) {
    // Jika berupa URL gambar: tampilkan background banner
    banner.style.backgroundImage = `url('${kecamatanMain.banner}')`;
    banner.style.backgroundSize = "cover";
    banner.style.backgroundPosition = "center";
  } else {
    // Jika data banner hanya teks atau lain, bisa skip
    banner.style.backgroundColor = "#ff0099"; // fallback pink
  }

  // Judul dan desc1
  titleEl.textContent = kecamatanMain.title || "";
  desc1El.textContent = kecamatanMain.desc1 || "";

  // Layout Biru dan desc2
  if (kecamatanMain.img1) {
    blueImg.src = kecamatanMain.img1;
    blueImg.style.display = "block";
  } else {
    blueImg.style.display = "none";
  }
  if (kecamatanMain.desc2) {
    desc2El.textContent = kecamatanMain.desc2;
    desc2El.style.display = "block";
  } else {
    desc2El.style.display = "none";
  }

  // Layout Lime dan desc3
  if (kecamatanMain.img2) {
    limeImg.src = kecamatanMain.img2;
    limeImg.style.display = "block";
  } else {
    limeImg.style.display = "none";
  }
  if (kecamatanMain.desc3) {
    desc3El.textContent = kecamatanMain.desc3;
    desc3El.style.display = "block";
  } else {
    desc3El.style.display = "none";
  }

  // Layout Cyan dan desc4
  if (kecamatanMain.img3) {
    cyanImg.src = kecamatanMain.img3;
    cyanImg.style.display = "block";
  } else {
    cyanImg.style.display = "none";
  }
  if (kecamatanMain.desc4) {
    desc4El.textContent = kecamatanMain.desc4;
    desc4El.style.display = "block";
  } else {
    desc4El.style.display = "none";
  }

  // Layout Hitam dan desc5
  if (kecamatanMain.img4) {
    blackImg.src = kecamatanMain.img4;
    blackImg.style.display = "block";
  } else {
    blackImg.style.display = "none";
  }
  if (kecamatanMain.desc5) {
    desc5El.textContent = kecamatanMain.desc5;
    desc5El.style.display = "block";
  } else {
    desc5El.style.display = "none";
  }

  // Setup data Wisata untuk carousel merah dan subjudul
  wisataImages = [];
  if (kecamatanWisata && kecamatanWisata.img1) wisataImages.push(kecamatanWisata.img1);
  if (kecamatanWisata && kecamatanWisata.img2) wisataImages.push(kecamatanWisata.img2);

  if (wisataImages.length === 0) {
    carouselRed.style.display = "none";
    subjudulEl.style.display = "none";
    descSubjudulEl.style.display = "none";
  } else {
    carouselRed.style.display = "flex";
    subjudulEl.style.display = "block";
    descSubjudulEl.style.display = "block";

    currentCarouselIndex = 0;
    carouselImage.src = wisataImages[currentCarouselIndex];
    subjudulEl.textContent = kecamatanWisata.title || "";
    descSubjudulEl.textContent = kecamatanWisata.desc || "";
  }

  // Show/hide and reposition btn-to-map and contact-person based on desc/img availability (dynamic height fix)
  adjustLayoutPosition();

  // Inisialisasi animasi scroll
  initScrollAnimation();

  // Event tombol carousel
  carouselBtnLeft.onclick = () => {
    if (wisataImages.length === 0) return;
    currentCarouselIndex = (currentCarouselIndex - 1 + wisataImages.length) % wisataImages.length;
    carouselImage.src = wisataImages[currentCarouselIndex];
  };

  carouselBtnRight.onclick = () => {
    if (wisataImages.length === 0) return;
    currentCarouselIndex = (currentCarouselIndex + 1) % wisataImages.length;
    carouselImage.src = wisataImages[currentCarouselIndex];
  };

  // Tombol navigasi ke map.html dengan transisi halus
  btnToMap.onclick = () => {
    btnToMap.disabled = true; // prevent double click 
    btnToMap.style.opacity = "0.5";
    btnToMap.style.cursor = "wait";
    // Bisa tambah animasi fade out halaman dulu di sini jika perlu
    setTimeout(() => {
      window.location.href = 'main.html?kecamatan=' + kecamatanName.toLowerCase();
    }, 500);
  };
});

// Fungsi menyesuaikan posisi tombol hijau dan footer jika elemen bawah dihide/dihapus
function adjustLayoutPosition() {
  const btn = document.getElementById("btn-to-map");
  const footer = document.querySelector("footer.animate-section");

  // Hitung elemen desc terakhir yang muncul (desc5 desc4 desc3, dst)
  const descIds = ["desc5", "desc4", "desc3", "desc2", "desc1"];
  let lastDescId = null;
  for (const id of descIds) {
    const el = document.getElementById(id);
    if (el && el.style.display !== "none") {
      lastDescId = el;
      break;
    }
  }

  if (!lastDescId) lastDescId = document.getElementById("desc1"); // fallback

  if (lastDescId) {
    // Set margin bottom tombol hijau agar tepat di atas contact-person
    btn.style.marginTop = "20px";
    btn.style.marginBottom = "20px";

    // Naikkan tombol hijau kalau bawahnya sedikit kosong
    // Footer sudah di bawah tombol hijau dengan margin-bottom 40px
  }
}

// Fungsi animasi scroll menggunakan Intersection Observer
function initScrollAnimation() {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const fadeEls = document.querySelectorAll(
    "#left-column > *, #right-column > *, #btn-to-map, footer.animate-section"
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        entry.target.classList.remove("fade-out");
      } else {
        entry.target.classList.add("fade-out");
        entry.target.classList.remove("fade-in");
      }
    });
  }, observerOptions);

  fadeEls.forEach((el) => {
    el.classList.add("fade-out"); // awal sembunyikan
    observer.observe(el);
  });
}