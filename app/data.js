/**
 * data.js - Database Botani Tanaman Herbal Papua Barat Daya
 * Mengintegrasikan 4 tanaman target klasifikasi utama dan 52 tanaman obat tradisional 
 * berdasarkan buku resmi Dinas Kesehatan Provinsi Papua (2016).
 */

const PLANT_DATA = {
  "daun-gatal": {
    id: "daun-gatal",
    name: "Daun Gatal",
    latin: "Laportea decumana",
    localName: "Daun Gatal",
    icon: "🍃",
    description: "Daun gatal adalah tanaman semak liar yang tumbuh subur di wilayah hutan Papua, khususnya daerah Kepala Burung. Ciri khas utamanya adalah permukaan daun yang dipenuhi oleh duri-duri halus (bulu sengat) yang mengandung senyawa kimia asam format. Ketika bersentuhan dengan kulit, asam ini memicu reaksi gatal, panas, dan kemerahan sementara pada kulit yang kemudian melancarkan peredaran darah.",
    benefits: [
      "Meredakan pegal-pegal dan keletihan fisik setelah beraktivitas berat.",
      "Mengatasi nyeri otot, nyeri sendi (rematik), dan bengkak akibat memar.",
      "Melancarkan aliran darah lokal melalui efek pelebaran pembuluh darah di area kulit.",
      "Membantu meredakan demam dan sakit kepala ringan dengan menempelkan daun di dahi."
    ],
    usage: "Ambil selembar daun gatal segar. Usapkan atau tepuk-tepuk secara perlahan permukaan daun yang berbulu ke area tubuh yang terasa pegal atau nyeri (misalnya kaki, punggung, atau lengan). Sensasi gatal dan panas akan terasa selama beberapa menit, namun setelah itu otot akan terasa sangat rileks dan rasa sakit akan mereda.",
    sampleImage: "./daun_gatal_new.jpg",
    modelConfidence: 98.4
  },
  "buah-merah": {
    id: "buah-merah",
    name: "Daun Buah Merah",
    latin: "Pandanus conoideus Lam",
    localName: "Kuansu",
    icon: "🌶️",
    description: "Buah merah merupakan tanaman keluarga pandan-pandanan pandanaceae yang tumbuh tegak mencapai tinggi 4-7 meter. Buahnya berbentuk silinder memanjang seperti jagung raksasa berukuran 30 hingga 120 cm. Saat matang, buahnya berwarna merah marun pekat, sangat padat, dan menghasilkan minyak alami yang kaya akan gizi tinggi.",
    benefits: [
      "Mengandung antioksidan tingkat tinggi, termasuk beta-karoten, alfa-karoten, dan tokoferol (Vitamin E).",
      "Meningkatkan daya tahan tubuh (imunostimulan) secara signifikan.",
      "Membantu menghambat perkembangan sel kanker dan tumor.",
      "Efektif membantu pemulihan penyakit stroke, asam urat, kolesterol tinggi, dan hipertensi.",
      "Kaya akan asam lemak esensial (omega-3 dan omega-9) untuk kesehatan pembuluh darah dan jantung."
    ],
    usage: "Bagian daging buah merah dikukus atau direbus terlebih dahulu, kemudian diperas dan disaring untuk mendapatkan minyak kental berwarna merah tua (sari buah merah). Sari minyak ini dikonsumsi langsung (1-2 sendok makan per hari) atau dicampurkan ke dalam makanan sebagai suplemen tambahan.",
    sampleImage: "./buah_merah_new.jpg",
    modelConfidence: 97.6
  },
  "daun-gedi": {
    id: "daun-gedi",
    name: "Daun Gedi",
    latin: "Abelmoschus manihot L.",
    localName: "Sayur Gedi",
    icon: "🌱",
    description: "Daun gedi adalah tanaman perdu yang sangat populer sebagai bahan makanan dan sayuran herbal di wilayah Indonesia Timur, termasuk Papua Barat Daya. Bentuk daunnya menjari dengan 5-7 lobus mirip daun singkong. Karakteristik khas daun gedi adalah teksturnya yang berlendir (mukilago) ketika diremas, direbus, atau dimasak.",
    benefits: [
      "Melindungi dinding mukosa lambung dan meredakan radang lambung (maag) berkat lendirnya yang bersifat mendinginkan.",
      "Membantu menurunkan kadar kolesterol jahat (LDL) dalam darah.",
      "Membantu mengontrol kadar gula darah (glukosa) bagi penderita diabetes.",
      "Memiliki sifat anti-inflamasi (anti-radang) dan pereda nyeri alami (analgesik).",
      "Kaya akan kalsium, Vitamin A, dan Vitamin C yang menunjang kesehatan tulang dan mata."
    ],
    usage: "Untuk pengobatan maag atau asam lambung, rebus 5-10 lembar daun gedi segar dengan 2 gelas air hingga tersisa 1 gelas. Saring air rebusannya lalu minum selagi hangat secara teratur. Daun gedi juga bisa langsung dimasak sebagai tumisan sehat atau bahan pelengkap makanan pokok tradisional.",
    sampleImage: "./daun_gedi_new.jpg",
    modelConfidence: 96.8
  },
  "sarang-semut": {
    id: "sarang-semut",
    name: "Sarang Semut",
    latin: "Myrmecodia spp",
    localName: "Sarang Semut",
    icon: "🪵",
    description: "Sarang semut adalah sebutan untuk tanaman epifit unik yang tumbuh menempel pada dahan pohon besar di hutan hujan tropis Papua. Bagian bawah batangnya menggelembung membentuk umbi bulat berongga-rongga di dalamnya. Rongga ini menjadi labirin tempat tinggal koloni semut. Air liur semut yang bereaksi di dalam umbi ini diyakini memberikan khasiat obat luar biasa.",
    benefits: [
      "Dikenal luas sebagai salah satu obat herbal anti-kanker dan anti-tumor yang sangat kuat.",
      "Membantu meredakan gangguan jantung, penyakit paru-paru (TBC), dan penyakit ginjal.",
      "Membantu mengatasi asam urat tinggi, rematik, kolesterol, dan ambeien.",
      "Kaya akan kandungan flavonoid dan tanin yang berfungsi sebagai antioksidan kuat dan anti-bakteri alami."
    ],
    usage: "Iris umbi sarang semut tipis-tipis dan keringkan di bawah sinar matahari hingga benar-benar kering. Rebus sekitar 10-15 gram irisan kering sarang semut dengan 3 gelas air hingga mendidih dan menyusut menjadi sekitar 1-2 gelas. Saring air rebusannya dan minum secara teratur 2-3 kali sehari hangat-hangat.",
    sampleImage: "./sarang_semut_new.jpg",
    modelConfidence: 99.1
  }
};

const ENCYCLOPEDIA_DATA = {
  "1": {
    id: "1",
    name: "Mayama",
    latin: "Acalypha wilkesiana Muell.Arg.",
    localName: "Mayama (Sarmi)",
    family: "Euphorbiaceae",
    description: "Merupakan tumbuhan semak musiman dengan tinggi 2-4 meter. Daun tunggal bergantian, agak melengkung dan kasar, berbentuk oval jorong atau memanjang. Daun berwarna merah dari gelap sampai terang, merah-hijau atau hijau dengan bintik-bintik bayangan merah, pink gelap, atau putih.",
    benefits: [
      "Mengobati diare dan disentri.",
      "Membantu meredakan laringitis (radang tenggorokan).",
      "Meredakan demam pada tubuh penderita.",
      "Memiliki aktivitas antibakteri, antifungi, antiragi, dan sitotoksik."
    ],
    usage: "Untuk diare dan disentri, daun diremas-remas dalam air bersih, lalu air perasannya diminum. Untuk meredakan demam, air rebusan daun digunakan untuk digosokkan atau dikompreskan pada badan penderita.",
    sampleImage: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=600&q=80"
  },
  "2": {
    id: "2",
    name: "Daun Merah",
    latin: "Aerva sanguinolenta (L.) Bl.",
    localName: "Daun Merah (Sarmi)",
    family: "Amaranthaceae",
    description: "Tumbuhan semak dengan tinggi 0.5-2 meter. Batang berbentuk bulat dengan pangkal berkayu, beruas, berwarna merah keunguan dan bercabang. Daun tunggal berwarna merah keunguan, beraliran menyirip, mengkilat di sisi atas, berbentuk bulat panjang 2-8 cm.",
    benefits: [
      "Digunakan sebagai obat luar untuk mengobati penyakit mata.",
      "Membantu mengatasi radang.",
      "Secara tradisional digunakan sebagai tonik penambah darah.",
      "Memiliki aktivitas anti-hiperglikemik (menurunkan gula darah)."
    ],
    usage: "Daun direbus dengan air bersih, air rebusannya kemudian disaring dan diminum secara berkala untuk menambah darah atau meredakan radang. Untuk mata, digunakan sebagai tetes mata herbal setelah disaring steril.",
    sampleImage: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
  },
  "3": {
    id: "3",
    name: "Kayu Susu",
    latin: "Alstonia scholaris (L.) R. Br.",
    localName: "Kayu Susu / Pulai",
    family: "Apocynaceae",
    description: "Pohon besar bergetah putih dengan tinggi mencapai 15-50 meter. Kulit batang tebal berwarna cokelat keabu-abuan. Daun memanjang tersusun melingkar 4-7 daun di setiap buku. Bunga kecil putih kehijauan dengan aroma wangi yang sangat kuat.",
    benefits: [
      "Sangat efektif untuk mengobati demam tinggi dan malaria.",
      "Mengobati diare kronis, disentri, dan sakit perut.",
      "Secara tradisional digunakan sebagai kontrasepsi oral (KB alami).",
      "Air rebusannya berkhasiat meringankan sakit batuk dan asma.",
      "Memiliki aktivitas anti-malaria, antibakteri, antitumor, dan anti-inflamasi."
    ],
    usage: "Infus rendaman dari kulit batang yang dikeringkan diminum 1 gelas sehari secara teratur untuk mengobati demam dan malaria. Kulit batang segar juga bisa langsung dikunyah dan cairannya ditelan secara bertahap.",
    sampleImage: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=600&q=80"
  },
  "4": {
    id: "4",
    name: "Pinang",
    latin: "Areca catechuu L.",
    localName: "Pinang / Adiah",
    family: "Arecaceae",
    description: "Tumbuhan palma berbatang tegak lurus dan ramping dengan tinggi 10-15 meter. Daun majemuk menyirip. Bunga putih kekuningan. Buah berbentuk bulat telur berserabut setebal 4-6 cm berwarna jingga saat matang.",
    benefits: [
      "Digunakan secara tradisional sebagai stimulan saraf untuk meningkatkan energi.",
      "Meningkatkan rasa percaya diri dan keberanian secara psikologis.",
      "Sebagai astringen untuk mengencangkan jaringan tubuh dan menyehatkan gusi.",
      "Memiliki aktivitas anti-helmintik (cacingan), antioksidan, dan antiseptik."
    ],
    usage: "Biji pinang yang masih muda dikupas kulitnya, lalu dikunyah bersama dengan daun/bunga sirih dan kapur sirih. Cairan hasil kunyahan yang berwarna merah pekat biasanya dibuang, namun sebagian kecil cairan yang tertelan memberikan efek stimulant.",
    sampleImage: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=600&q=80"
  },
  "5": {
    id: "5",
    name: "Sambiloto",
    latin: "Andrographis paniculata (Burm.f.) Wall. Ex Nees",
    localName: "Sambiloto",
    family: "Acanthaceae",
    description: "Terna tegak dengan tinggi mencapai 90 cm. Batang berwarna hijau berbentuk segi empat. Daun tunggal berbentuk lanset memanjang dengan rasa yang sangat pahit karena kandungan andrografolida.",
    benefits: [
      "Mengobati malaria dan demam secara alami.",
      "Menurunkan kadar gula darah (antidiabetes).",
      "Mencegah penyakit hati (hepatoprotektor) dan kanker.",
      "Meningkatkan sistem imun tubuh dan bertindak sebagai anti-inflamasi."
    ],
    usage: "Rebus 10-15 helai daun sambiloto segar dengan 3 gelas air hingga mendidih dan menyusut menjadi 1.5 gelas. Minum air rebusan ini 2 kali sehari secara rutin hingga gejala demam atau penyakit mereda.",
    sampleImage: "https://images.unsplash.com/photo-1563201515-db870868f000?auto=format&fit=crop&w=600&q=80"
  },
  "6": {
    id: "6",
    name: "Kayu Putih",
    latin: "Asteromyrtus symphyocarpa (F. Muell.) Craven",
    localName: "Ru (Marind), Lu (Marori), Mol (PNG)",
    family: "Myrtaceae",
    description: "Pohon dengan tinggi mencapai 12 meter yang banyak tumbuh di wilayah sabana Merauke (Taman Nasional Wasur). Batang berselindris dengan kulit beralur tidak teratur. Daun lanset berbau aromatik khas kayu putih.",
    benefits: [
      "Digunakan untuk menghasilkan minyak kayu putih melalui penyulingan daun.",
      "Meredakan gatal-gatal akibat gigitan serangga.",
      "Menghangatkan badan dan mengurangi nyeri lambung/sakit perut.",
      "Mengobati gejala flu, masuk angin, dan malaria ringan."
    ],
    usage: "Minyak hasil penyulingan daun dioleskan langsung pada kulit yang gatal atau sakit perut. Untuk penderita malaria, Suku Kanum memanfaatkan daun segarnya untuk dikunyah secara langsung.",
    sampleImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80"
  },
  "7": {
    id: "7",
    name: "Ajeran",
    latin: "Bidens pilosa L.",
    localName: "Daun Ajeran",
    family: "Asteraceae",
    description: "Tumbuhan herba liar dengan tinggi mencapai 1 meter. Batang bersegi empat berwarna hijau. Bunga bertangkai panjang dengan mahkota putih dan putik kuning.",
    benefits: [
      "Menyembuhkan bengkak pada persendian dan rematik.",
      "Mengobati bisul, luka luar, dan infeksi kulit.",
      "Meredakan asma, batuk, sariawan, dan sakit perut.",
      "Bertindak sebagai anti-inflamasi, antipiretik, dan antiseptik."
    ],
    usage: "Ambil 3 lembar daun ajeran segar, gulung dan remas menggunakan tangan sampai lemas dan mengeluarkan sedikit cairan. Balutkan atau tempelkan remasan daun tersebut langsung pada bagian luka atau bengkak.",
    sampleImage: "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?auto=format&fit=crop&w=600&q=80"
  },
  "8": {
    id: "8",
    name: "Kaki Kuda",
    latin: "Centella asiatica (L.) Urban",
    localName: "Omeya (Wamena) / Pegagan",
    family: "Apiaceae",
    description: "Tumbuhan menjalar tanpa batang yang tumbuh subur di wilayah pegunungan tengah Papua (Wamena). Daun berbentuk bulat ginjal dengan tepi bergerigi, tumbuh berkumpul pada stolon.",
    benefits: [
      "Menurunkan demam tinggi (panas dalam).",
      "Membantu mengobati penyakit ayan (epilepsi).",
      "Membantu pemulihan penyakit typus dan gejala influenza.",
      "Berfungsi sebagai antimikroba dan peluruh air seni (diuretik)."
    ],
    usage: "Seluruh bagian tumbuhan pegagan (daun dan akarnya) dicuci bersih, kemudian direbus dengan air. Air rebusannya disaring dan diminum secara berkala sebagai obat penurun panas.",
    sampleImage: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&w=600&q=80"
  },
  "9": {
    id: "9",
    name: "Rotan Hutan",
    latin: "Calamus caesius Blume",
    localName: "Rotan Hutan",
    family: "Palmae",
    description: "Tumbuhan monokotil jenis liana berkayu yang merambat sangat panjang di pepohonan hutan. Batang ramping berdiameter 2-4 cm, berwarna hijau dengan bekas pelepah yang berduri.",
    benefits: [
      "Digunakan secara tradisional untuk meningkatkan vitalitas pria dewasa.",
      "Meningkatkan daya tahan tubuh & stamina fisik.",
      "Kaya akan lignin dan serat alami."
    ],
    usage: "Pucuk muda rotan hutan dipotong sepanjang satu jengkal tangan, dibersihkan duri dan pelepahnya, lalu dikupas. Bagian dalam yang lunak dikunyah langsung dan air sarinya ditelan.",
    sampleImage: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80"
  },
  "10": {
    id: "10",
    name: "Bintangur",
    latin: "Calophyllum inophyllum L.",
    localName: "Bintangur (Sarmi)",
    family: "Clusiaceae",
    description: "Pohon pantai berukuran sedang (10-25 meter). Daun tebal mengkilat berbentuk jorong dengan getah putih kental yang keluar jika bagian batang atau daun dilukai.",
    benefits: [
      "Getahnya efektif mengobati iritasi mata dan penyakit mata.",
      "Air rebusan daun kering menyembuhkan infeksi kulit dan eksim.",
      "Daun segar berkhasiat sebagai kompres hangat untuk luka luar dan bisul.",
      "Memiliki aktivitas anti-HIV, antibakteri, antivirus, dan spasmolitik."
    ],
    usage: "Getah putih daun dilarutkan dengan sedikit air bersih steril untuk diteteskan pada mata yang iritasi. Untuk luka/bisul, daun segar dipanaskan di atas api kecil hingga layu lalu ditempelkan pada luka.",
    sampleImage: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=600&q=80"
  },
  "11": {
    id: "11",
    name: "Daun Kaskado",
    latin: "Cassia alata L.",
    localName: "Ketepeng Cina / Daun Kaskado",
    family: "Fabaceae",
    description: "Semak tegak setinggi 2-5 meter dengan bunga berwarna kuning terang yang tersusun tegak. Dikenal sangat luas di Papua sebagai obat mujarab untuk membasmi penyakit kulit.",
    benefits: [
      "Mengobati penyakit kulit menular seperti kaskado (tinea imbricata), kurap, dan scabies.",
      "Meredakan dermatitis dan eksim kulit.",
      "Memiliki efek analgesik (pereda nyeri) dan anti-inflamasi.",
      "Bertindak sebagai pencuci perut alami (laksatif)."
    ],
    usage: "Ambil 2 tangkai daun kaskado segar, tumbuk halus bersama sedikit kapur sirih, lalu gosokkan secara merata pada kulit yang terkena penyakit kaskado. Daun juga bisa diremas langsung dan ditempelkan pada luka.",
    sampleImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80"
  },
  "12": {
    id: "12",
    name: "Cemara Gunung",
    latin: "Casuarina equisetifolia J.R. & G. Forst.",
    localName: "Kasuari / Cemara Gunung (Wamena)",
    family: "Casuarinaceae",
    description: "Pohon tinggi mirip pinus dengan daun jarum halus bersisik. Tumbuh subur di daerah pantai berpasir hingga pegunungan tinggi Papua (Wamena).",
    benefits: [
      "Mengobati demam malaria.",
      "Meredakan sakit perut, disentri, dan diare.",
      "Mengobati batuk dan radang tenggorokan.",
      "Memiliki aktivitas hipoglikemik, antivirus, dan antibakteri."
    ],
    usage: "Buah dan biji cemara gunung dikeringkan, kemudian direbus dengan air bersih. Air rebusannya disaring dan diminum secara teratur 2 kali sehari (pagi dan sore) hingga demam malaria mereda.",
    sampleImage: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=600&q=80"
  },
  "13": {
    id: "13",
    name: "Melati Susun",
    latin: "Clerodendrum chinense (Osbeck) Mabb.",
    localName: "Melati Susun",
    family: "Lamiaceae",
    description: "Tumbuhan semak dengan tinggi 1.5 meter, berdaun oval dengan permukaan halus. Bunga putih berbau harum yang tersusun bergerombol.",
    benefits: [
      "Sangat baik sebagai obat urut untuk menyembuhkan keseleo.",
      "Membantu meredakan nyeri pada kasus patah tulang.",
      "Meredakan rematik, demam, dan hipertensi."
    ],
    usage: "Daun dan batang melati susun dicuci bersih, dikeringkan, lalu digerus halus dicampur dengan minyak kelapa murni. Minyak ramuan ini kemudian dioleskan dan digunakan untuk mengurut bagian yang keseleo.",
    sampleImage: "https://images.unsplash.com/photo-1550950158-d0d960dff51b?auto=format&fit=crop&w=600&q=80"
  },
  "14": {
    id: "14",
    name: "Konde Mambruk",
    latin: "Clerodendrum japonicum (Thunb) Sweet",
    localName: "Konde Mambruk (Waropen)",
    family: "Lamiaceae",
    description: "Perdu setinggi 2 meter dengan bunga merah menyala yang tersusun indah menyerupai jambul burung Mambruk. Daun berbentuk jantung lebar.",
    benefits: [
      "Menurunkan demam tinggi dan panas dalam.",
      "Meredakan radang dan sakit kepala (migrain).",
      "Membantu mengatasi wasir, bisul, dan anemia."
    ],
    usage: "Ambil 3 helai daun konde mambruk segar, tambahkan sedikit minyak kelapa murni, kemudian diremas-remas dengan tangan hingga lemas. Oleskan remasan daun beserta minyaknya secara merata pada kepala penderita demam.",
    sampleImage: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=600&q=80"
  },
  "15": {
    id: "15",
    name: "Keladi Papua",
    latin: "Colocasia esculenta (L.) Schott",
    localName: "Keladi / Kom / Wamona (Wamena)",
    family: "Araceae",
    description: "Spesies talas-talasan berdaun lebar menyerupai telinga gajah. Tumbuh subur di pegunungan tengah Papua pada area basah dan lembab.",
    benefits: [
      "Mengobati rasa nyeri fisik dan bengkak pada otot.",
      "Membantu pemulihan bagian tubuh yang keseleo.",
      "Secara tradisional digunakan untuk mengobati luka melepuh."
    ],
    usage: "Tangkai daun keladi dipotong, lalu dipanaskan di atas bara api hingga menjadi lunak dan layu. Tempelkan atau bubuhkan langsung tangkai hangat tersebut pada bagian tubuh yang nyeri atau bengkak.",
    sampleImage: "https://images.unsplash.com/photo-1567306301408-9b74779a11af?auto=format&fit=crop&w=600&q=80"
  },
  "16": {
    id: "16",
    name: "Temu Ireng",
    latin: "Curcuma aeruginosa Roxb.",
    localName: "Jahe Hutan (Sentani)",
    family: "Zingiberaceae",
    description: "Tanaman rimpang dengan tinggi mencapai 2.5 meter. Rimpang berbau aromatik tajam dengan warna bagian dalam yang gelap kebiruan.",
    benefits: [
      "Meningkatkan nafsu makan secara alami.",
      "Mengobati batuk berdahak dan sesak napas.",
      "Mengobati penyakit kulit seperti kudis dan borok."
    ],
    usage: "Rimpang temu ireng dicuci bersih, diiris tipis, kemudian dicampurkan ke dalam rebusan sayuran atau masakan daging untuk dikonsumsi sebagai penambah nafsu makan.",
    sampleImage: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80"
  },
  "17": {
    id: "17",
    name: "Tumbuhan Perang",
    latin: "Dianella nemorosa Lamk.",
    localName: "Pre Kepey (Sentani) / Tegari",
    family: "Liliaceae",
    description: "Tumbuhan terna berumpun setinggi 1-1.5 meter dengan akar serabut kuat yang membentuk umbi pada usia dewasa. Daun berbentuk pita memanjang.",
    benefits: [
      "Mengobati luka luar pada kulit.",
      "Membantu meredakan asma dan paru-paru basah.",
      "Memiliki kandungan senyawa aktif yang bersifat antikanker."
    ],
    usage: "Daun atau akar dibersihkan, digerus kasar, lalu ditempelkan langsung pada area luka luar. Untuk penyakit dalam (asma), akar dibersihkan lalu direbus dengan air untuk diminum.",
    sampleImage: "https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&w=600&q=80"
  },
  "18": {
    id: "18",
    name: "Kecubung",
    latin: "Datura metel L.",
    localName: "Kecubung / Bunga Terompet",
    family: "Solanaceae",
    description: "Tumbuhan perdu berumur pendek setinggi 2 meter dengan bunga berbentuk terompet besar berwarna putih. Mengandung alkaloid tropana beracun.",
    benefits: [
      "Sangat baik sebagai bahan minyak urut untuk kaki keseleo.",
      "Meredakan asma dan bronkitis (sifat antikolinergik).",
      "Memiliki efek anestesis (pemati rasa) lokal."
    ],
    usage: "Ambil 1-3 kuntum bunga kecubung, campurkan ke dalam botol berisi minyak kelapa murni. Didiamkan selama 1 minggu, lalu gunakan minyak kelapa tersebut untuk mengurut sendi yang keseleo atau patah tulang.",
    sampleImage: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80"
  },
  "19": {
    id: "19",
    name: "Abanik",
    latin: "Datura stramonium L. var. Lanny Jaya",
    localName: "Abanik (Lanny Jaya)",
    family: "Solanaceae",
    description: "Tumbuhan perdu setinggi 2 meter dengan bunga terompet kecil. Di Lanny Jaya, tanaman ini sengaja ditanam di sekitar Honai untuk keperluan pribadi.",
    benefits: [
      "Digunakan sebagai relaksan dan penenang pikiran.",
      "Membantu meredakan gejala pilek beringus, nyeri, dan demam.",
      "Menginduksi efek halusinasi ringan secara adat."
    ],
    usage: "Daun dikeringkan di bawah sinar matahari atau di atas bara api honai, dihancurkan menjadi serbuk, kemudian digulung menggunakan daun pisang kering tipis untuk dirokok.",
    sampleImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80"
  },
  "20": {
    id: "20",
    name: "Tuba",
    latin: "Derris sp. var. Biak",
    localName: "Tuba / Mofer (Biak)",
    family: "Fabaceae",
    description: "Pohon dengan tinggi 5-12 meter yang banyak tumbuh di pinggiran hutan dekat pantai Biak dan Supiori. Daun hijau kekuningan.",
    benefits: [
      "Mengobati penyakit sesak napas dan asma kronis.",
      "Sebagai penawar racun alami akibat gigitan ular berbisa.",
      "Digunakan secara tradisional untuk meracuni ikan di sungai (rotenone)."
    ],
    usage: "Untuk asma, akar halus direbus dan air rebusannya diminum. Untuk gigitan ular, kulit akar dikikis sedikit, dilarutkan dalam air hangat lalu diminum langsung (memberikan rasa agak pedas).",
    sampleImage: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80"
  },
  "21": {
    id: "21",
    name: "Dollu",
    latin: "Dodonaea viscosa (L.) Jacq.",
    localName: "Dollu (Lanny Jaya)",
    family: "Sapindaceae",
    description: "Pohon tinggi berdaun lanset mengkilat seperti berminyak. Tumbuh melimpah di wilayah pegunungan tengah Papua pada ketinggian di atas 1500 m dpl.",
    benefits: [
      "Sangat cepat menghentikan pendarahan pada luka baru.",
      "Mencegah infeksi bakteri pada luka terbuka.",
      "Secara adat digunakan untuk membungkus jari yang diamputasi (tradisi duka Lanny)."
    ],
    usage: "Daun dollu dipanaskan di atas bara api sampai permukaannya mengeluarkan lapisan minyak alami, kemudian segera ditempelkan atau dibungkuskan pada bagian luka baru atau luka potong jari.",
    sampleImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80"
  },
  "22": {
    id: "22",
    name: "Daun Patah Tulang",
    latin: "Euphorbia tirucalli L.",
    localName: "Daun Patah Tulang",
    family: "Euphorbiaceae",
    description: "Perdu berkayu setinggi 6 meter yang hampir tidak berdaun, melainkan tersusun atas ranting-ranting hijau berbentuk silindris bergetah putih susu.",
    benefits: [
      "Sangat populer untuk membantu menyembuhkan patah tulang.",
      "Mengobati rasa nyeri gigi berlubang.",
      "Menetralkan racun akibat bisa ular atau sengatan ikan beracun.",
      "Getahnya memiliki aktivitas antitumor dan antibakteri."
    ],
    usage: "Untuk patah tulang, seluruh bagian ranting ditumbuk halus, dicampur minyak kelapa murni, lalu dibalurkan pada tulang yang patah dan dibalut. Untuk sakit gigi, teteskan getah putih langsung pada gigi yang berlubang.",
    sampleImage: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
  },
  "23": {
    id: "23",
    name: "Zodia",
    latin: "Evodia suaveolens Sceff",
    localName: "Zodia / Pengusir Nyamuk",
    family: "Rutaceae",
    description: "Perdu aromatik setinggi 2 meter dengan daun pipih panjang berwarna hijau muda. Mengeluarkan aroma wangi khas linalool yang sangat kuat jika daunnya saling bergesekan.",
    benefits: [
      "Secara alami mengusir nyamuk dan serangga (anti-nyamuk).",
      "Digunakan sebagai ramuan minyak urut.",
      "Kulit batangnya berkhasiat meredakan demam malaria."
    ],
    usage: "Daun zodia segar cukup diremas-remas dengan tangan, kemudian diusapkan ke seluruh permukaan kulit tubuh agar terhindar dari gigitan nyamuk malaria.",
    sampleImage: "https://images.unsplash.com/photo-1563201515-db870868f000?auto=format&fit=crop&w=600&q=80"
  },
  "24": {
    id: "24",
    name: "Daun Wungu",
    latin: "Graptophyllum pictum (L.) Griff",
    localName: "Daun Wungu / Daun Darah",
    family: "Acanthaceae",
    description: "Perdu berbatang ungu mengkilat setinggi 1.5-2 meter dengan daun berwarna ungu gelap kemerahan. Tumbuh tersebar luas di seluruh wilayah Papua.",
    benefits: [
      "Membantu menambah darah pada penderita anemia.",
      "Mengobati diare dan sembelit (pencahar ringan).",
      "Mempercepat pematangan bisul kulit.",
      "Berkhasiat melancarkan haid dan meredakan radang."
    ],
    usage: "Daun wungu yang sudah tua dicuci bersih, dikeringkan, kemudian diseduh dengan air panas seperti menyeduh teh untuk diminum airnya secara rutin.",
    sampleImage: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
  },
  "25": {
    id: "25",
    name: "Sampare",
    latin: "Glochidion sp. var. Biak",
    localName: "Sampare (Biak)",
    family: "Euphorbiaceae",
    description: "Perdu setinggi 2-3 meter dengan cabang menyudut ke atas. Bunga berukuran kecil kekuningan menyerupai lonceng di ketiak daun.",
    benefits: [
      "Merupakan obat tradisional utama suku Biak untuk menyembuhkan penyakit malaria.",
      "Memiliki kandungan zat aktif antimalaria alami."
    ],
    usage: "Ambil 2 tangkai daun sampare (pilih yang tidak terlalu tua), cuci bersih, lalu rebus dengan 3 gelas air hingga tersisa 1.5 gelas. Minum air rebusan 2 kali sehari secara rutin selama 3-5 hari.",
    sampleImage: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=600&q=80"
  },
  "26": {
    id: "26",
    name: "Wiep",
    latin: "Grevillea papuana Diels",
    localName: "Wiep (Lanny / Dani)",
    family: "Proteaceae",
    description: "Pohon tegak tinggi yang tumbuh subur di wilayah pegunungan tengah Papua (Lanny Jaya, Jayawijaya) pada ketinggian di atas 1500 m dpl.",
    benefits: [
      "Digunakan oleh wanita pegunungan sebagai kontrasepsi tradisional (KB alami).",
      "Membantu mengatur jarak kelahiran anak secara adat."
    ],
    usage: "Biji buah wiep dikonsumsi langsung secara mentah. Berdasarkan aturan turun-temurun, konsumsi maksimal adalah 3 biji sekali makan untuk menunda kehamilan selama jangka waktu tertentu.",
    sampleImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80"
  },
  "27": {
    id: "27",
    name: "Rosela",
    latin: "Hibiscus sabdariffa L.",
    localName: "Rosela",
    family: "Malvaceae",
    description: "Tumbuhan perdu setinggi 3-4 meter dengan kelopak bunga tebal berwarna merah tua pekat yang memiliki rasa asam menyegarkan.",
    benefits: [
      "Meningkatkan stamina tubuh dan menambah darah.",
      "Membantu menurunkan tekanan darah tinggi (antihipertensi).",
      "Membantu menurunkan kadar kolesterol dan antidiabetes.",
      "Menghilangkan flek hitam dan merawat kesehatan kulit."
    ],
    usage: "Kelopak bunga rosela dikeringkan terlebih dahulu di bawah sinar matahari. Seduh 3-5 kelopak kering dengan air panas, tambahkan sedikit madu jika suka, lalu minum selagi hangat.",
    sampleImage: "https://images.unsplash.com/photo-1550950158-d0d960dff51b?auto=format&fit=crop&w=600&q=80"
  },
  "28": {
    id: "28",
    name: "Alang-alang",
    latin: "Imperata cylindrica (L.) Beauv.",
    localName: "Wingor / Omgas (Lanny)",
    family: "Poaceae",
    description: "Tumbuhan rumput berumpun menahun dengan sistem perakaran rimpang (stolon) yang sangat tajam dan tumbuh menembus tanah lapang.",
    benefits: [
      "Mengobati sakit kepala, pusing, dan migrain.",
      "Meredakan demam tinggi dan panas dalam.",
      "Membantu menghentikan pendarahan pada luka luar."
    ],
    usage: "Akar alang-alang dibersihkan dan dikupas. Untuk sakit kepala, ujung akar yang tajam secara adat dicocokkan perlahan ke dalam lubang hidung hingga berdarah sedikit (terapi tradisional). Untuk luka, akar ditumbuk halus lalu dibalutkan.",
    sampleImage: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
  },
  "29": {
    id: "29",
    name: "Bunga Kangkung",
    latin: "Ipomoea tricolor L.",
    localName: "Bunga Kangkung / Morning Glory",
    family: "Convolvulaceae",
    description: "Herba merambat dengan daun berbentuk jantung dan bunga berbentuk corong berwarna ungu, biru, atau putih yang mekar di pagi hari.",
    benefits: [
      "Secara tradisional digunakan sebagai obat penenang pikiran.",
      "Membantu mengatasi insomnia atau susah tidur.",
      "Mengandung senyawa alkaloid dan saponin."
    ],
    usage: "Daun dan bunga kangkung hutan dicuci bersih, kemudian direbus dengan air. Air rebusannya diminum hangat sebelum tidur sebagai ramuan penenang.",
    sampleImage: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=600&q=80"
  },
  "30": {
    id: "30",
    name: "Jarak Pagar",
    latin: "Jatropha curcas L.",
    localName: "Jarak Pagar",
    family: "Euphorbiaceae",
    description: "Perdu berkayu setinggi 6 meter dengan getah bening kental. Daun lebar berbentuk menjari dengan buah bulat lonjong berwarna hijau.",
    benefits: [
      "Meredakan bengkak pada persendian dan rematik.",
      "Mengobati penyakit kulit menular (kaskado/kurap).",
      "Mempercepat penyembuhan luka baru dan bisul.",
      "Bertindak sebagai pencahar ringan."
    ],
    usage: "Ambil selembar daun jarak pagar, layukan di atas api lilin secara perlahan. Olesi permukaan daun dengan minyak kelapa murni hangat, kemudian tempelkan daun pada bagian tubuh yang bengkak atau luka.",
    sampleImage: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
  },
  "31": {
    id: "31",
    name: "Daun Gatal",
    latin: "Laportea ducumana (Roxb.) Wedd.",
    localName: "Daun Gatal / Ponim / Towo (Lanny)",
    family: "Urticaceae",
    description: "Daun gatal adalah tanaman semak liar khas Papua. Permukaan daun dipenuhi bulu sengat yang mengandung asam format. Kontak dengan kulit memicu gatal dan panas sementara yang kemudian meredakan pegal.",
    benefits: [
      "Meredakan pegal-pegal, nyeri otot, dan keletihan fisik.",
      "Mengatasi sakit kepala dengan menempelkan daun di dahi.",
      "Membantu meredakan sesak napas (asma) dengan mengusap dada.",
      "Merangsang keringat pada penderita malaria untuk menurunkan demam."
    ],
    usage: "Daun segar diusapkan langsung ke bagian tubuh yang pegal. Untuk asma, daun digosokkan di dada. Untuk malaria, daun dipukulkan ke seluruh badan agar berkeringat dan menurunkan panas.",
    sampleImage: "../daun gatal/daun_gatal_new.jpg"
  },
  "32": {
    id: "32",
    name: "Mangga Biak",
    latin: "Mangifera minor Blume var. Biak",
    localName: "Awai / Mangga Biak",
    family: "Anacardiaceae",
    description: "Pohon besar setinggi 32 meter dengan batang lurus kokoh. Buah mangga berukuran kecil, berserat, dan sangat manis khas pulau Biak.",
    benefits: [
      "Mengobati penyakit asma.",
      "Meredakan sesak napas akut pada ibu hamil.",
      "Secara adat digunakan secara turun-temurun di Biak."
    ],
    usage: "Kulit kayu mangga biak dikikis bersih, lalu direbus dengan 3 gelas air hingga tersisa 1.5 gelas. Minum air rebusan ini 3 kali sehari selama 3 hari berturut-turut.",
    sampleImage: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=600&q=80"
  },
  "33": {
    id: "33",
    name: "Kayu Putih",
    latin: "Melaleuca viridifolia Sol. ex Gaertn",
    localName: "Womb (Suku Kanum)",
    family: "Myrtaceae",
    description: "Perdu berkayu aromatik setinggi 10 meter yang tumbuh melimpah di sabana basah Merauke. Daunnya tebal berbulu halus dengan bunga merah menyala.",
    benefits: [
      "Asisten utama pembuatan minyak kayu putih.",
      "Meredakan batuk dan sesak napas.",
      "Memiliki efek analgesik (pereda nyeri) dan antirematik.",
      "Bertindak sebagai antiseptik dan antibakteri kuat."
    ],
    usage: "Daun segar direbus dengan air dan air rebusannya diminum hangat untuk meredakan batuk. Minyak hasil sulingan daun dioleskan langsung pada sendi yang nyeri.",
    sampleImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80"
  },
  "34": {
    id: "34",
    name: "Kangkung Laut",
    latin: "Merremia peltata (L.) Merr.",
    localName: "Kangkung Laut (Timika)",
    family: "Convolvulaceae",
    description: "Tumbuhan merambat dengan umbi besar di dalam tanah dan getah putih. Daun lebar berbentuk bulat perisai dengan bunga kuning indah.",
    benefits: [
      "Menghentikan pendarahan hebat pada luka baru.",
      "Mengobati luka akibat tersiram air panas.",
      "Meredakan sakit dada, bengkak, dan radang mata.",
      "Memiliki aktivitas antivirus alami."
    ],
    usage: "Batang segar diremas-remas hingga lunak dan berair, lalu ditempelkan pada luka bakar atau luka baru untuk menghentikan darah. Cairan pucuk daun diteteskan pada mata yang radang.",
    sampleImage: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=600&q=80"
  },
  "35": {
    id: "35",
    name: "Sagu",
    latin: "Metroxylon sagu Rottb.",
    localName: "Sagu",
    family: "Arecaceae",
    description: "Tumbuhan palma penghasil karbohidrat utama masyarakat Papua. Memiliki pelepah berduri panjang dengan empulur batang yang kaya akan pati sagu.",
    benefits: [
      "Sangat baik sebagai pertolongan pertama luka bakar.",
      "Sumber karbohidrat dan energi tinggi.",
      "Pelepahnya digunakan sebagai dinding honai/rumah."
    ],
    usage: "Tangkai pelepah sagu yang kering dibakar hingga menjadi abu. Ambil abu pembakaran tersebut, campur dengan sedikit air bersih hingga membentuk pasta, lalu oleskan pada luka bakar.",
    sampleImage: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=600&q=80"
  },
  "36": {
    id: "36",
    name: "Sarang Semut",
    latin: "Myrmecodia spp.",
    localName: "Sarang Semut",
    family: "Rubiaceae",
    description: "Tanaman epifit dengan batang bawah menggelembung membentuk umbi bulat berongga tempat bersarangnya semut hutan. Memiliki kandungan antioksidan sangat tinggi.",
    benefits: [
      "Obat herbal andalan untuk menyembuhkan kanker dan tumor.",
      "Meredakan radang (anti-inflamasi) dan nyeri otot.",
      "Membantu mengontrol kadar gula darah (diabetes).",
      "Mencegah pengeroposan tulang (osteoporosis)."
    ],
    usage: "Umbi sarang semut diiris tipis-tipis dan dikeringkan. Irisan kering kemudian direbus dengan air sampai airnya berwarna kemerahan. Saring dan minum air rebusan secara teratur.",
    sampleImage: "../sarang semut/sarang_semut_new.jpg"
  },
  "37": {
    id: "37",
    name: "Putri Malu Raksasa",
    latin: "Mimosa pudica Duchass & Walp",
    localName: "Putri Malu Raksasa",
    family: "Fabaceae",
    description: "Semak berduri dengan daun majemuk sensitif yang menutup jika disentuh. Spesies di Taman Nasional Wasur Merauke tumbuh dalam ukuran raksasa.",
    benefits: [
      "Mengobati luka akibat gigitan ular berbisa.",
      "Memiliki efek penenang (sedatif) alami.",
      "Meredakan demam dan bertindak sebagai diuretik."
    ],
    usage: "Daun dan akar segar diremas langsung menggunakan air ludah, kemudian digosokkan atau ditempelkan pada bagian kulit yang digigit ular berbisa sebagai pertolongan pertama.",
    sampleImage: "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?auto=format&fit=crop&w=600&q=80"
  },
  "38": {
    id: "38",
    name: "Kayu Gempol",
    latin: "Nauclea grandifolia DC.",
    localName: "Kayu Gempol / Gal (Marind) / Dama (Kiman)",
    family: "Rubiaceae",
    description: "Pohon kayu besar berdaun lebar dengan bunga berbentuk bulatan kuning rapat. Kulit kayunya beralur tidak teratur dan tebal.",
    benefits: [
      "Mengobati sakit perut melilit dan diare.",
      "Mengobati luka luar dan gigitan hewan/ular.",
      "Digunakan sebagai bahan konstruksi perahu tradisional.",
      "Membantu menetralisir logam berat di tanah (fitoremediasi)."
    ],
    usage: "Kulit kayu gempol dikupas secukupnya, dicuci bersih, kemudian direbus dengan air hingga mendidih. Air rebusannya disaring lalu diminum sebagai obat sakit perut.",
    sampleImage: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=600&q=80"
  },
  "39": {
    id: "39",
    name: "Daun Kumis Kucing",
    latin: "Orthosiphon aristatus (Blume) Miq.",
    localName: "Daun Kumis Kucing",
    family: "Lamiaceae",
    description: "Terna tegak dengan tinggi 1-2 meter. Bunga berwarna putih keunguan dengan benang sari panjang menjuntai menyerupai kumis kucing.",
    benefits: [
      "Sangat efektif membantu menghancurkan batu ginjal.",
      "Melancarkan kencing (diuretik kuat).",
      "Meredakan nyeri encok, rematik, dan sakit pinggang.",
      "Membantu menurunkan kadar gula darah."
    ],
    usage: "Daun kumis kucing segar dikombinasikan dengan daun wungu, direbus dengan air bersih hingga mendidih. Minum air rebusan secara teratur 2 kali sehari.",
    sampleImage: "https://images.unsplash.com/photo-1550950158-d0d960dff51b?auto=format&fit=crop&w=600&q=80"
  },
  "40": {
    id: "40",
    name: "Buah Merah",
    latin: "Pandanus conoideus Lam.",
    localName: "Buah Merah / Kuamsu (Wamena)",
    family: "Pandanaceae",
    description: "Pohon pandan tinggi berakar tunjang kuat dengan buah berbentuk tabung raksasa berwarna merah marun pekat berminyak saat matang.",
    benefits: [
      "Menjaga stamina, kebugaran, dan daya tahan tubuh.",
      "Mencegah penyakit kanker, tumor, stroke, dan penyakit jantung.",
      "Membantu menurunkan hipertensi dan asam urat.",
      "Membantu meringankan kondisi penderita HIV/AIDS."
    ],
    usage: "Daging buah merah dikukus atau direbus, diperas dan disaring untuk diambil minyak merahnya (sari buah merah). Minyak ini dikonsumsi langsung 1-2 sendok makan setiap hari.",
    sampleImage: "./IMG_20260526_141808.jpg"
  },
  "41": {
    id: "41",
    name: "Kelapa Hutan",
    latin: "Pandanus julianettii Marteli",
    localName: "Kelapa Hutan / Gawen (Lanny)",
    family: "Pandanaceae",
    description: "Pohon pandan pegunungan tinggi Papua setinggi 5-8 meter. Buah kelapa hutan berkumpul dalam karangan bulat menyerupai buah durian.",
    benefits: [
      "Meningkatkan stamina tubuh dan kekuatan fisik.",
      "Digunakan sebagai suplemen pangan pencegah kelaparan saat gagal panen.",
      "Mengandung omega 3-6, vitamin E, dan antioksidan tinggi."
    ],
    usage: "Buah kelapa hutan yang sudah masak dipotong atau dibelah, kemudian biji buahnya dimakan secara langsung atau dibakar di atas bara api terlebih dahulu.",
    sampleImage: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=600&q=80"
  },
  "42": {
    id: "42",
    name: "Tumbuhan Wati",
    latin: "Piper methysticum Forst.",
    localName: "Wati / Palima (Marind) / Kuraka (Kiman)",
    family: "Piperaceae",
    description: "Tumbuhan perdu berkayu setinggi 2-5 meter yang hanya tumbuh subur di wilayah Merauke. Batang beruas dengan daun berbentuk jantung.",
    benefits: [
      "Digunakan sebagai penenang (sedatif) alami untuk meredakan stress.",
      "Membantu mengobati penyakit kolera.",
      "Memiliki efek anestesis ringan dan merelaksasi otot."
    ],
    usage: "Bagian batang tanaman wati dipotong kecil, kemudian dikunyah langsung oleh mulut hingga hancur untuk hisap air sarinya sebagai penenang.",
    sampleImage: "https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&w=600&q=80"
  },
  "43": {
    id: "43",
    name: "Katuk Hutan",
    latin: "Phyllanthus sp. var. Papua",
    localName: "Katuk Hutan (Pantai Papua)",
    family: "Phyllanthaceae",
    description: "Pohon kecil setinggi 3 meter dengan daun majemuk berseling gasal yang banyak dijumpai di kawasan hutan dekat pantai utara Papua.",
    benefits: [
      "Digunakan secara tradisional untuk mengobati kanker payudara.",
      "Membantu pengobatan kanker rahim dan kista rahim."
    ],
    usage: "Daun katuk hutan secukupnya dicuci bersih, kemudian direbus dengan air bersih. Air rebusannya disaring dan diminum secara teratur 2 kali sehari.",
    sampleImage: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=600&q=80"
  },
  "44": {
    id: "44",
    name: "Babiji Belakang",
    latin: "Phyllanthus urinaria Linn.",
    localName: "Babiji Belakang / Meniran",
    family: "Euphorbiaceae",
    description: "Tumbuhan semak kecil mirip rerumputan setinggi 25 cm. Bunga dan buah kecil terletak berjejer di bagian bawah tangkai daun majemuk.",
    benefits: [
      "Mengobati penyakit gangguan ginjal (kencing batu).",
      "Membantu mengobati penyakit malaria.",
      "Memiliki efek imunomodulator (meningkatkan kekebalan tubuh).",
      "Kaya akan flavonoid sebagai antioksidan."
    ],
    usage: "Seluruh tanaman meniran dicabut beserta akarnya, dicuci bersih, lalu direbus dengan 3 gelas air hingga sisa 1 gelas. Minum air rebusan selagi hangat 2 kali sehari.",
    sampleImage: "https://images.unsplash.com/photo-1563201515-db870868f000?auto=format&fit=crop&w=600&q=80"
  },
  "45": {
    id: "45",
    name: "Beluntas Sarmi",
    latin: "Pluchea indica (L.) Less.",
    localName: "Beluntas (Sarmi)",
    family: "Asteraceae",
    description: "Perdu kecil setinggi 2 meter dengan cabang tegak berambut halus. Daun beraliran menyirip dengan tepi bergerigi kasar dan bau khas.",
    benefits: [
      "Mencegah infeksi darah putih pada ibu setelah melahirkan (post partus).",
      "Memiliki sifat antibakteri, antidiare, dan anti-arthritis (nyeri sendi)."
    ],
    usage: "Daun beluntas segar dicuci bersih, direbus dengan air hingga mendidih. Minum air rebusan secara teratur 2 kali sehari selama 3 hari berturut-turut.",
    sampleImage: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=600&q=80"
  },
  "46": {
    id: "46",
    name: "Pandan Anggur",
    latin: "Sararanga sinuosa Hemsl.",
    localName: "Kayari (Yapen) / Selre (Sentani) / Pandan Anggur",
    family: "Pandanaceae",
    description: "Pohon tinggi mencapai 10 meter dengan daun roset panjang berduri di tepinya. Buah tersusun dalam tandan besar menggantung menyerupai anggur.",
    benefits: [
      "Digunakan sebagai suplemen mineral dan vitamin alami tubuh.",
      "Daunnya sangat baik diolah sebagai bahan kerajinan anyaman tradisional."
    ],
    usage: "Buah pandan anggur yang sudah berwarna merah tua (matang) dapat langsung dipetik dan dimakan bagian daging buahnya.",
    sampleImage: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=600&q=80"
  },
  "47": {
    id: "47",
    name: "Daun Katuk",
    latin: "Sauropus androgynus (L.) Merr.",
    localName: "Daun Katuk",
    family: "Phyllanthaceae",
    description: "Perdu setinggi 3 meter dengan daun bulat telur berwarna hijau gelap yang tersusun selang-seling pada tangkai daun.",
    benefits: [
      "Sangat baik untuk meningkatkan produksi air susu ibu (ASI).",
      "Kaya akan kalsium, besi, vitamin A, B, C, dan klorofil tinggi."
    ],
    usage: "Daun katuk segar dibersihkan, kemudian dimasak sebagai sayuran bening atau tumisan sehat untuk dikonsumsi secara rutin oleh ibu menyusui.",
    sampleImage: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&w=600&q=80"
  },
  "48": {
    id: "48",
    name: "Sidaguri",
    latin: "Sida rhombifolia Linn.",
    localName: "Sidaguri",
    family: "Malvaceae",
    description: "Tumbuhan semak setinggi 2 meter dengan batang keras. Daun tunggal oval berbulu halus abu-abu di bagian bawah dengan bunga kuning cerah.",
    benefits: [
      "Obat bisul kulit secara cepat.",
      "Membantu menyembuhkan penyakit diabetes melitus (gula darah).",
      "Mengobati cacingan, luka, asam urat, dan anti-inflamasi."
    ],
    usage: "Untuk bisul, daun ditumbuk halus lalu dibubuhkan pada bisul. Untuk diabetes, rebus campuran daun, batang, dan akar sidaguri dengan air, lalu minum rutin.",
    sampleImage: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
  },
  "49": {
    id: "49",
    name: "Terong Hutan",
    latin: "Solanum torvum Swartz.",
    localName: "Terong Hutan / Terong Mini / Takokak",
    family: "Solanaceae",
    description: "Perdu berduri setinggi 3 meter dengan buah bulat kecil berwarna hijau yang berkumpul dalam tandan, berubah jingga saat matang.",
    benefits: [
      "Digunakan sebagai kontrasepsi pria alami (menahan kesuburan pria secara temporer).",
      "Kandungan solasodina memiliki efek menonaktifkan sperma sementara."
    ],
    usage: "Buah terong hutan dikonsumsi secara langsung sebagai lalapan atau dimasak selama 40 hari berturut-turut. Efek kesuburan akan kembali normal setelah konsumsi dihentikan.",
    sampleImage: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=600&q=80"
  },
  "50": {
    id: "50",
    name: "Uncaria Gambir",
    latin: "Uncaria gambir (Hunt) Roxb.",
    localName: "Agya (Kanum) / Ake (Marind) / Gambir",
    family: "Rubiaceae",
    description: "Perdu setengah merambat dengan daun oval licin tidak berbulu. Banyak tumbuh di wilayah Merauke dan digunakan sebagai campuran menyirih.",
    benefits: [
      "Obat luka bakar dan luka luar kulit.",
      "Meredakan diare kronis, disentri, dan sariawan mulut.",
      "Sebagai bahan astringen, antimikroba, dan pewarna alami."
    ],
    usage: "Untuk diare, daun dan kulit kayu direbus lalu airnya diminum. Untuk menyirih, ekstrak air panas dari daun dikeringkan dan dicetak menjadi potongan gambir.",
    sampleImage: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=600&q=80"
  },
  "51": {
    id: "51",
    name: "Daun Jilat",
    latin: "Villebrunea pedunculata",
    localName: "Daun Jilat (Yapen) / Daun Dirare (Serui)",
    family: "Urticaceae",
    description: "Tumbuhan perdu berbatang cokelat dengan daun hijau bergerigi kasar. Sangat dikenal di kepulauan Yapen untuk pengobatan memar.",
    benefits: [
      "Sangat efektif menyembuhkan luka memar dan lebam dalam.",
      "Membantu mengeluarkan darah kotor dari memar."
    ],
    usage: "Daun muda dicuci, dibuang seratnya, dipanaskan sebentar, ditaruh di piring lalu ditaburi kapur sirih, ditempel di luka memar dan dijilat oleh pengobat.",
    sampleImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80"
  },
  "52": {
    id: "52",
    name: "Daun Bungkus",
    latin: "Daun Bungkus Papua",
    localName: "Daun Bungkus / Daun Tiga Jari",
    family: "Smilacaceae",
    description: "Tumbuhan merambat mirip daun sirih yang menjalar di pohon hutan Papua. Sangat legendaris di kalangan masyarakat Papua untuk vitalitas pria.",
    benefits: [
      "Digunakan secara tradisional untuk memperbesar ukuran penis (zakar).",
      "Membuat penis menjadi lebih keras dan mengatasi ejakulasi dini.",
      "Memicu efek pembengkakan lokal dan pelebaran pembuluh darah (histamin)."
    ],
    usage: "Daun ditumbuk halus atau dirajang, dicampur sedikit minyak kelapa, diletakkan di atas daun bungkus lalu dibungkuskan pada penis selama maksimal 10-15 menit (tidak boleh terlalu lama agar kulit tidak melepuh).",
    sampleImage: "https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&w=600&q=80"
  }
};
