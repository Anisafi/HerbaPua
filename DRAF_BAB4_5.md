# BAB IV
# HASIL DAN PEMBAHASAN

## 4.1 Hasil Pengumpulan Data

### 4.1.1 Hasil Wawancara (Studi Etnobotani)
Pengumpulan data etnobotani dilaksanakan di Kampung Kalobo, Distrik Salawati Tengah, Provinsi Papua Barat Daya. Wawancara dilakukan secara terstruktur dan mendalam kepada praktisi pengobatan tradisional setempat (healer/tokoh adat) untuk menggali kearifan lokal mengenai pemanfaatan tanaman obat khas Papua Barat Daya. Hasil wawancara menetapkan empat jenis tanaman herbal yang menjadi fokus utama dalam riset ini:
1. **Daun Gedi (Abelmoschus manihot L.)**: Digunakan oleh masyarakat lokal untuk mengobati maag, radang ginjal, menurunkan kolesterol, serta membantu persalinan. Bagian yang digunakan adalah daun muda yang direbus atau dikonsumsi sebagai sayuran obat.
2. **Daun Gatal (Laportea decumana)**: Daun khas Papua yang permukaannya dipenuhi bulu-bulu penyengat. Digunakan untuk mengatasi pegal linu, lelah fisik, dan nyeri otot dengan cara menepuk-nepukkan permukaan daun langsung ke bagian tubuh yang sakit hingga timbul kemerahan dan rasa hangat.
3. **Buah Merah (Pandanus conoideus Lam)**: Sari pati buah merah dikonsumsi sebagai suplemen untuk meningkatkan daya tahan tubuh, mengobati kanker, paru-paru basah, dan stroke ringan.
4. **Sarang Semut (Myrmecodia spp)**: Berupa umbi batang berduri yang berongga tempat bersarangnya semut. Irisan umbi sarang semut dikeringkan lalu direbus untuk mengobati penyakit kronis seperti tumor, diabetes, ambeien, dan rematik.

### 4.1.2 Hasil Pengumpulan Dataset Citra Daun
Dataset citra dikumpulkan secara mandiri menggunakan kamera perangkat seluler di area Hutan Kampung Kalobo serta beberapa wilayah sekitarnya. Pengambilan gambar dilakukan dengan variasi latar belakang alami, sudut pengambilan, serta kondisi pencahayaan untuk memperkuat tingkat generalisasi model deep learning. 

Total dataset yang berhasil dikumpulkan dan dipersiapkan adalah sebanyak **2.014 citra**, yang kemudian dibagi secara acak dengan rasio 80% sebagai data pelatihan (*training data*) dan 20% sebagai data validasi (*validation data*).

* **Data Training**: 1.612 citra daun
* **Data Validasi**: 402 citra daun
* **Resolusi Input**: Rescale normalisasi 1./255 dengan target visual 224 x 224 piksel.

---

## 4.2 Implementasi dan Evaluasi Model CNN (MobileNetV2)

### 4.2.1 Arsitektur Model Transfer Learning
Untuk mencapai model klasifikasi yang ringan namun berakurasi tinggi di platform website, penelitian ini mengimplementasikan teknik *Transfer Learning* dengan menggunakan arsitektur **MobileNetV2** yang telah dilatih sebelumnya pada dataset berskala besar ImageNet. 

Base model MobileNetV2 digunakan sebagai ekstraktor fitur visual. Pada bagian atas (head) model, dilakukan modifikasi dengan menambahkan:
1. **Global Average Pooling 2D (GAP)**: Untuk mereduksi dimensi peta fitur konvolusi menjadi vektor fitur berdimensi 1.280 tanpa menyebabkan overfitting.
2. **Dense Layer**: Lapisan klasifikasi akhir sebanyak 4 neuron output yang merepresentasikan 4 kelas target (daun_buah_merah, daun_gatal, daun_gedi, sarang_semut) dengan fungsi aktivasi **Softmax** untuk menghasilkan probabilitas prediksi.

### 4.2.2 Hasil Pelatihan Model
Pelatihan model dilakukan menggunakan compiler optimizer **Adam** dengan *learning rate* awal sebesar **0.0001** (1e-4) guna menjaga kestabilan bobot *transfer learning*. Pelatihan berlangsung selama **20 epoch** dengan metode penstabilan *Early Stopping* untuk mencegah terjadinya overfitting.

Berikut adalah ringkasan proses kemajuan pelatihan model pada beberapa epoch kunci:
* **Epoch 1/20**: Akurasi pelatihan awal mencapai 58,13% (loss: 1.0720) dengan akurasi validasi 84,08% (val_loss: 0.5878).
* **Epoch 5/20**: Akurasi pelatihan naik menjadi 94,29% (loss: 0.1836) dengan akurasi validasi 95,77% (val_loss: 0.1680).
* **Epoch 10/20**: Akurasi pelatihan menyentuh 98,33% (loss: 0.0719) dengan akurasi validasi 97,01% (val_loss: 0.1027).
* **Epoch 20/20**: Model mencapai performa terbaiknya dengan tingkat akurasi data pelatihan sebesar **98,64%** (loss: 0.0421) dan akurasi data validasi sebesar **97,76%** (val_loss: 0.0829).

Hasil ini membuktikan bahwa arsitektur MobileNetV2 sangat adaptif dan efisien dalam mempelajari karakteristik morfologi citra daun herbal Papua meskipun dilatih dalam siklus epoch yang relatif singkat.

### 4.2.3 Evaluasi Kinerja Klasifikasi (Metrik Evaluasi)
Pengujian dan evaluasi model akhir dilakukan menggunakan data validasi yang belum pernah dilihat oleh model selama masa pelatihan. Metrik evaluasi yang digunakan meliputi *Precision*, *Recall*, *F1-Score*, serta *Confusion Matrix*.

#### A. Tabel Laporan Klasifikasi (Classification Report)
| Kelas | Precision | Recall | F1-Score | Jumlah Sampel Uji |
| :--- | :---: | :---: | :---: | :---: |
| Daun Buah Merah | 0.94 | 1.00 | 0.97 | 100 |
| Daun Gatal | 0.99 | 1.00 | 1.00 | 100 |
| Daun Gedi | 0.98 | 0.97 | 0.98 | 102 |
| Sarang Semut | 0.99 | 0.93 | 0.96 | 100 |
| **Rata-rata / Akurasi Total** | **0.98** | **0.98** | **0.98** | **402** |

#### B. Analisis Confusion Matrix
Evaluasi sebaran tebakan benar dan salah dari model ditunjukkan lewat Confusion Matrix riil berikut:
```
                      Prediksi Model
                   BuahMerah  DaunGatal  DaunGedi  SarangSemut
Sebenarnya:
Daun Buah Merah [    100         0          0          0      ]
Daun Gatal      [      0       100          0          0      ]
Daun Gedi       [      1         1         99          1      ]
Sarang Semut    [      5         0          2         93      ]
```
* **Daun Buah Merah**: 100% citra terklasifikasi dengan benar tanpa ada eror.
* **Daun Gatal**: Tingkat akurasi sempurna 100% tanpa adanya salah prediksi. Hal ini karena tepi daun yang sangat bergerigi memberikan ciri visual unik bagi model.
* **Daun Gedi**: Dari 102 sampel, 99 berhasil ditebak benar, 1 salah tebak sebagai buah merah, 1 sebagai daun gatal, dan 1 sebagai sarang semut.
* **Sarang Semut**: Dari 100 sampel, 93 ditebak benar, 5 meleset ditebak sebagai buah merah karena kemiripan latar belakang cokelat batang pohon, dan 2 ditebak sebagai daun gedi.

Secara keseluruhan, model mencapai nilai akurasi makro rata-rata sebesar **98% (0.98)**.

### 4.2.4 Visualisasi Grad-CAM Heatmap
Guna menguji reliabilitas model secara ilmiah, dipasang modul **Grad-CAM** (*Gradient-weighted Class Activation Mapping*) pada layer konvolusi terakhir (`out_relu` MobileNetV2). Grad-CAM menghasilkan peta gradien warna panas (*heatmap*) untuk melihat wilayah piksel gambar mana yang paling mempengaruhi keputusan klasifikasi model:
* Pada daun gedi, warna merah terpusat pada wilayah lekukan menjari (*palmate*) daun.
* Pada daun gatal, warna terfokus pada guratan gerigi kasar di tepi daun.
* Hal ini mengonfirmasi bahwa model benar-benar mengenali karakteristik biologis morfologi daun herbal khas Papua tersebut, bukan sekadar menebak warna latar belakang (*background noise*).

### 4.2.5 Integrasi Chatbot PapuaBot dengan Gemini LLM
Untuk melengkapi sistem dengan asisten interaktif, diintegrasikan **Gemini 2.5 Flash API** sebagai pengolah bahasa alami pada menu "Konsultasi PapuaBot". 
* **Basis Pengetahuan Lokal (Knowledge Base)**: Server Python mengintegrasikan data ensiklopedia terstruktur dari buku resmi *"Tumbuhan Obat Tradisional Papua; Berdasarkan Kearifan Lokal Masyarakat Papua (SP3T 2016)"* ke dalam prompt instruksi sistem.
* **Mekanisme Rotasi Kunci API (Failover)**: Dipasang sistem pemuatan banyak kunci (*multi-API key*) di file `config.json` server untuk mengantisipasi batas kuota gratis (*Error 429: Too Many Requests*). Jika satu kunci API terkena rate limit, server secara instan mengalihkan permintaan ke kunci cadangan secara bergantian.
* **Cadangan Luring (Offline Fallback)**: Jika koneksi internet padam sepenuhnya, sistem akan secara otomatis beralih menggunakan inferensi model CNN lokal yang dieksekusi di browser klien menggunakan **TensorFlow.js** untuk memberikan jawaban ensiklopedia statis.

---

## 4.3 Hasil Perancangan Sistem (Metode Extreme Programming)

Implementasi perangkat lunak dikembangkan menggunakan metode metodologi tangkas **Extreme Programming (XP)** yang terdiri atas 4 tahapan berulang:

### 4.3.1 Tahap Perencanaan (Planning)
Pada tahap ini ditentukan kebutuhan fitur fungsional sistem (*system backlog*) berdasarkan *User Stories* pengguna (masyarakat umum, akademisi, dan tenaga kesehatan):
1. Pengguna ingin sistem dapat memindai gambar daun herbal secara instan untuk mengenali jenisnya.
2. Pengguna ingin membaca ensiklopedia mengenai khasiat obat tradisional Papua.
3. Pengguna ingin berkonsultasi secara interaktif melalui chatbot mengenai tata cara perebusan dan takaran ramuan herbal yang aman.

### 4.3.2 Tahap Desain (Design)
Desain arsitektur digambarkan menggunakan Unified Modeling Language (UML) yang mencakup:
* **Use Case Diagram**: Menggambarkan interaksi pengguna dengan menu Beranda, Pindai Daun, Ensiklopedia Herbal, dan Konsultasi PapuaBot.
* **Flowchart Sistem**: Alur proses klasifikasi gambar dari pengunggahan, pemrosesan CNN lokal/backend, hingga penyajian tombol interaktif untuk tanaman non-target.
* **Antarmuka Pengguna (UI/UX)**: Dibuat menggunakan Figma dengan konsep visual modern bertema alam (*emerald green*) yang diimplementasikan penuh ke dalam kode HTML dan CSS agar ramah pengguna (*responsive design*) di laptop maupun layar handphone.

### 4.3.3 Tahap Pengkodean (Coding)
Pengkodean dilakukan secara modular:
* **Frontend (Klien)**: Menggunakan HTML5 semantik, CSS3 murni untuk tata letak responsif, dan Javascript vanilla. Model CNN keras yang telah dikonversi dipuat secara lokal di browser menggunakan pustaka `@tensorflow/tfjs` agar proses pindai gambar berjalan sangat cepat.
* **Backend (Server)**: Ditulis menggunakan bahasa Python dengan pustaka dasar `http.server` tanpa dependensi framework besar agar server berjalan ringan pada port `8000`. Server menangani rotasi kunci API Gemini dan perutean API chat.

### 4.3.4 Tahap Pengujian (Testing)
Pengujian dilakukan untuk menjamin kualitas fungsional dan penerimaan pengguna:

#### A. Pengujian Fungsional (Black Box Testing)
| No. | Fitur yang Diuji | Langkah Pengujian | Hasil yang Diharapkan | Status |
| :---: | :--- | :--- | :--- | :---: |
| 1 | Pemuatan Model CNN | Membuka halaman web di laptop/HP | Model tfjs berhasil diunduh dan siap di browser | Berhasil |
| 2 | Pindai Kamera HP | Klik tombol potret pada HP | Kamera terbuka, gambar terambil, hasil keluar | Berhasil |
| 3 | Filter Tanaman Non-Target | Upload gambar tanaman non-fokus | Chatbot memicu teks warning dospem & tombol Ya/Tidak | Berhasil |
| 4 | Failover API Key | Mengirim chat secara intensif | Server otomatis beralih ke kunci API cadangan saat limit | Berhasil |

#### B. Pengujian Kepuasan Pengguna (Usability Testing / SUS)
Ketergunaan website diuji oleh 15 responden (pengguna umum) menggunakan kuesioner **System Usability Scale (SUS)** dengan 10 butir pertanyaan standar. Hasil pengujian menghasilkan skor rata-rata **82,5**, yang menurut skala penilaian SUS masuk ke dalam kategori **"Excellent"** (Sangat Baik) dengan tingkat penerimaan (*Acceptability*) yang tinggi.

---
---

# BAB V
# PENUTUP

## 5.1 Kesimpulan
Berdasarkan hasil penelitian, implementasi sistem, dan pembahasan yang telah dijabarkan pada bab-bab sebelumnya, maka dapat ditarik beberapa kesimpulan utama sebagai berikut:
1. **Keberhasilan Implementasi Sistem**: Telah berhasil dibangun aplikasi web klasifikasi tanaman herbal khas Papua Barat Daya berbasis website menggunakan arsitektur deep learning Convolutional Neural Network (CNN) MobileNetV2 dan diintegrasikan dengan chatbot pintar berbasis Large Language Model (LLM) Google Gemini.
2. **Kinerja Akurasi Tinggi**: Model transfer learning MobileNetV2 terbukti sangat efektif untuk klasifikasi daun herbal khas Papua. Dengan total dataset 2.014 citra, model berhasil mencapai tingkat akurasi data validasi sebesar **97,76%** pada epoch ke-20 dengan tingkat rugi (*loss*) yang sangat kecil sebesar **0,0829**.
3. **Ketergunaan Aplikasi**: Pengujian menggunakan System Usability Scale (SUS) menghasilkan skor rata-rata **82,5** (kategori Excellent), menandakan bahwa website ini mudah digunakan, interaktif, serta responsif diakses baik menggunakan komputer/laptop maupun handphone (HP).
4. **Keamanan & Keandalan**: Sistem chatbot interaktif PapuaBot telah dilengkapi dengan sistem rotasi banyak kunci API cadangan untuk mengantisipasi batas kuota rate limit, serta fallback model lokal luring untuk menjamin kelangsungan presentasi sistem tanpa kegagalan koneksi.

## 5.2 Saran
Demi pengembangan penelitian dan penyempurnaan sistem aplikasi web ini di masa depan, penulis menyarankan beberapa poin berikut:
1. **Perluasan Dataset Citra**: Diharapkan penelitian selanjutnya dapat menambah jumlah variasi dan sampel citra daun herbal Papua Barat Daya guna meningkatkan ketahanan klasifikasi terhadap gangguan pencahayaan ekstrim dan bayangan di lapangan terbuka.
2. **Penerapan Model Luring Multimodal Penuh**: Mengingat kendala sinyal internet di daerah pedalaman Papua Barat Daya, disarankan pengembangan sistem di masa depan mengintegrasikan model bahasa lokal kecil (*Small Language Model*) secara luring penuh di sisi klien menggunakan WebGPU agar chatbot dapat melayani konsultasi tanpa membutuhkan internet sama sekali.
3. **Kolaborasi Lintas Disiplin (Etnobotani & Medis)**: Mengintegrasikan hasil pengujian klinis laboratorium mengenai zat aktif daun gedi, daun gatal, buah merah, dan sarang semut ke dalam basis data chatbot agar saran takaran ramuan herbal yang disajikan memiliki rujukan medis klinis yang lebih mendalam.
