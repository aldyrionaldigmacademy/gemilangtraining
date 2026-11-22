// src/data/portofolioData.js
export interface StatItem {
  icon: string;
  value: string;
  label: string;
}

export interface ChallengeSolution {
  title: string;
  desc: string;
}

export interface WorkflowStage {
  stage: string;
  timeline: string;
  title: string;
  desc: string;
  badge: string;
}

export interface ImpactRow {
  param: string;
  before: string;
  after: string;
  improvement: string;
}

export interface CompetencyItem {
  title: string;
  desc: string;
}

export interface PortofolioItem {
  id: string;
  slug: string;
  category: 'vokasi' | 'media' | 'web-fintech' | 'edukasi-marketing' | 'branding';
  badge: string;
  mitra: string;
  lokasi: string;
  title: string;
  subtitle: string;
  desc: string;
  tags: string[];
  img: string;
  featured?: boolean;
  stats: StatItem[];
  executiveSummary: {
    title: string;
    badge: string;
    verified: string;
    content: string;
    caption: string;
    metricBadge: string;
  };
  metadata: {
    client: string;
    category: string;
    approach: string;
    stack: string[];
    duration: string;
    team: string;
    consultationUrl?: string;
  };
  challenges: ChallengeSolution[];
  solutions: ChallengeSolution[];
  workflow: WorkflowStage[];
  impactMetrics: ImpactRow[];
  internshipPillars: {
    badge: string;
    title: string;
    description: string;
    standards: string;
    competencies: CompetencyItem[];
  };
}

export const portofolios: PortofolioItem[] = [
  {
    id: "p0",
    slug: "redesain-website-bisnis-edukasi",
    category: "web-fintech",
    badge: "Website Development & SEO",
    mitra: "Lembaga Pelatihan & Sertifikasi Profesi",
    lokasi: "Malang & Jawa Timur",
    title: "Redesain Website Multi-Page Bisnis Edukasi",
    subtitle: "Transformasi arsitektur website satu halaman menjadi sistem multi-page berkinerja tinggi dengan skor Core Web Vitals 98/100, alur konversi terstruktur, dan fondasi SEO ramah mesin pencari.",
    desc: "Perombakan total situs edukasi profesional dari arsitektur single-page lambat menjadi sistem multi-page Jamstack super kencang dengan skor PageSpeed 98/100 dan kenaikan leads pendaftaran hingga 4x lipat.",
    tags: ["Website Development", "SEO Teknis", "Core Web Vitals", "Astro & Bootstrap", "Schema JSON-LD"],
    img: "/assets/img/portofolio-hasil-magang.webp",
    featured: true,
    stats: [
      { icon: "speedometer", value: "98/100", label: "Core Web Vitals Mobile" },
      { icon: "trending-down", value: "-65%", label: "Penurunan Rasio Pantulan" },
      { icon: "clock", value: "3.2x", label: "Peningkatan Sesi Pengguna" },
      { icon: "calendar", value: "4 Minggu", label: "Waktu Pengerjaan Terstruktur" }
    ],
    executiveSummary: {
      title: "Ringkasan Transformasi Arsitektur Digital",
      badge: "Executive Summary",
      verified: "Verified Live Production Project",
      content: "Proyek ini merupakan redesain menyeluruh terhadap platform online institusi pelatihan dan edukasi profesional di Jawa Timur. Tim Gemilang Training merombak struktur situs dari model single-page bloated menjadi website multi-page terdistribusi dengan performa tinggi. Melalui optimasi aset modern, semantik HTML5 murni, skema terstruktur, dan rancangan UX berorientasi konversi, situs ini mampu mencapai skor Core Web Vitals 98/100 di perangkat bergerak serta mencatat lonjakan dwell-time pengunjung hingga 3.2 kali lipat.",
      caption: "Tampilan Responsif Multi-Platform (Desktop & Mobile)",
      metricBadge: "LCP 1.1s | 0 CLS | Green Score"
    },
    metadata: {
      client: "Lembaga Pelatihan & Sertifikasi Profesi Jawa Timur",
      category: "Website Development & SEO Teknis",
      approach: "Multi-Page Architecture, Mobile-First UX, Component-Based",
      stack: ["HTML5 Semantik", "Vanilla JS", "Tailwind / Bootstrap 5", "WebP Asset", "Schema JSON-LD"],
      duration: "4 Minggu Kerja (Sesuai Timeline SPRINT)",
      team: "1 Senior Web Mentor + 2 Interns (SMK RPL & Mahasiswa Informatika)",
      consultationUrl: "https://wa.me/6281943431484?text=Halo%20Admin%20Gemilang%20Training%2C%20saya%20tertarik%20konsultasi%20pembuatan%20website%20seperti%20studi%20kasus%20Redesain%20Website%20Bisnis%20Edukasi"
    },
    challenges: [
      {
        title: "Single-Page yang Terlalu Panjang",
        desc: "Semua penawaran kursus, testimoni, profil instruktur, dan kontak digabung dalam 1 halaman melebihi 15.000 pixel scroll yang membingungkan pengunjung."
      },
      {
        title: "Kecepatan Lambat (PageSpeed 34/100)",
        desc: "Aset foto resolusi mentah tanpa kompresi mengakibatkan waktu muat mencapai 6.8 detik di koneksi seluler sehingga banyak prospek mental."
      },
      {
        title: "Kanibalisasi Topik & SEO Lemah",
        desc: "Google tidak dapat mengindeks halaman layanan spesifik karena URL tidak memiliki hierarki subdirektori tematik yang bersih."
      },
      {
        title: "Tingginya Tingkat Pantulan (78%)",
        desc: "Calon pendaftar kesulitan menemukan formulir registrasi dan rincian silabus kurikulum secara cepat dan interaktif."
      }
    ],
    solutions: [
      {
        title: "Arsitektur Multi-Page Tematik",
        desc: "Membagi konten ke dalam struktur folder direktori mandiri (/program/, /sertifikasi/, /jadwal/) yang bersih dan mudah dirayapi bot pencari."
      },
      {
        title: "Performa Ekstrem (98/100 Mobile)",
        desc: "Konversi gambar ke format WebP terkompresi dengan explicit dimensions untuk mengeliminasi Cumulative Layout Shift (CLS)."
      },
      {
        title: "Fondasi SEO & Skema JSON-LD",
        desc: "Penerapan tag H1 hierarkis tunggal per halaman, breadcrumbs berbasis schema microdata, dan XML sitemap modular."
      },
      {
        title: "Alur Konversi Cepat (Frictionless UX)",
        desc: "Sticky action bar dan tombol konsultasi WhatsApp terintegrasi yang mudah diakses dari seluruh perangkat genggam."
      }
    ],
    workflow: [
      {
        stage: "Tahap 1",
        timeline: "Minggu 1",
        title: "Audit & Wireframing",
        desc: "Pemetaan sitemap baru, eliminasi tautan mati, perancangan struktur konten wireframe mobile-first, dan benchmarking kecepatan kompetitor.",
        badge: "Sitemap & Wireframe Approved"
      },
      {
        stage: "Tahap 2",
        timeline: "Minggu 2 - 3",
        title: "Development & Optimasi",
        desc: "Coding semantic HTML5, styling modular CSS yang ringan, konversi aset WebP, dan penerapan zero-blocking script untuk Core Web Vitals.",
        badge: "PageSpeed 98/100 Green Score"
      },
      {
        stage: "Tahap 3",
        timeline: "Minggu 4",
        title: "QA, SEO & Deployment",
        desc: "Injeksi Schema JSON-LD, integrasi Google Analytics 4 & Search Console, pengujian lintas browser, serta serah terima panduan kelola situs.",
        badge: "100% Crawlable & Live Deployment"
      }
    ],
    impactMetrics: [
      {
        param: "Skor Mobile PageSpeed",
        before: "34 / 100 (Buruk)",
        after: "98 / 100 (Sangat Baik)",
        improvement: "+188% Lebih Kencang"
      },
      {
        param: "Largest Contentful Paint (LCP)",
        before: "6.8 Detik",
        after: "1.1 Detik",
        improvement: "Pemuatan 6x Lebih Cepat"
      },
      {
        param: "Rasio Pantulan (Bounce Rate)",
        before: "78.4%",
        after: "27.6%",
        improvement: "-65% Penurunan Pantulan"
      },
      {
        param: "Rasio Konversi Pendaftaran",
        before: "1.2% dari Total Visitor",
        after: "4.8% dari Total Visitor",
        improvement: "4x Lipat Peningkatan Leads"
      }
    ],
    internshipPillars: {
      badge: "Pilar Magang Gemilang Training",
      title: "Kolaborasi Mentor Senior & Talenta Magang",
      description: "Proyek ini merupakan bukti nyata metode Project-Based Internship di Gemilang Training Malang. Peserta magang tidak hanya diberi latihan teoritis, melainkan terlibat langsung dalam pengerjaan kode produksi di bawah supervisi ketat Lead Web Developer.",
      standards: "Standar Industri Profesional: Code review, commit terstruktur, dan validasi Lighthouse.",
      competencies: [
        {
          title: "Optimasi Core Web Vitals",
          desc: "Memahami pencegahan CLS, penanganan asynchronous script, dan kompresi WebP aset visual."
        },
        {
          title: "Struktur SEO On-Page",
          desc: "Implementasi Open Graph, canonical link, semantic headings, dan JSON-LD schema microdata."
        },
        {
          title: "Responsivitas Lintas Layar",
          desc: "Menyesuaikan breakpoint CSS fluid di smartphone, tablet, hingga resolusi layar monitor lebar."
        },
        {
          title: "Manajemen Workflow Git",
          desc: "Praktik branching, pull request, dan pengujian pra-deployment di staging environment."
        }
      ]
    }
  },
  {
    id: "p1",
    slug: "kemitraan-jurnalistik-radar-kediri",
    category: "media",
    badge: "Media Digital",
    mitra: "Jawa Pos Radar Kediri",
    lokasi: "Kediri, Jawa Timur",
    title: "Kemitraan Jurnalistik & Portal Media Digital Radar Kediri",
    subtitle: "Pengembangan strategi komunikasi media digital, manajemen konten portal berita komersial, serta optimalisasi jangkauan pembaca digital bersama mitra Jawa Pos Radar Kediri.",
    desc: "Pengembangan strategi komunikasi media digital, manajemen konten portal berita komersial, serta optimalisasi jangkauan pembaca digital bersama mitra Jawa Pos Radar Kediri.",
    tags: ["Media Digital", "SEO Analytics", "Content Writing", "Social Media Management"],
    img: "/assets/img/kka-radar-kediri.webp",
    stats: [
      { icon: "trending-up", value: "+340%", label: "Kenaikan Impresi Konten Berita" },
      { icon: "clock", value: "2.8x", label: "Durasi Membaca Artikel" },
      { icon: "speedometer", value: "95/100", label: "Skor Keterbacaan & SEO On-Page" },
      { icon: "calendar", value: "3 Bulan", label: "Siklus Pendampingan Industri" }
    ],
    executiveSummary: {
      title: "Transformasi Arsitektur Konten & Akselerasi Portal Berita",
      badge: "Executive Summary",
      verified: "Verified Media Partnership",
      content: "Kolaborasi strategis antara Gemilang Training bersama Jawa Pos Radar Kediri berpusat pada modernisasi distribusi konten jurnalistik dan digital storytelling. Tim magang diterjunkan langsung dalam newsroom untuk menyusun artikel teroptimasi SEO ramah Google Discover, merancang infografis interaktif, dan menerapkan analitik waktu nyata untuk memantau tren topik lokal di kawasan Kediri Raya.",
      caption: "Aktivitas Redaksi & Liputan Berita Mitra Radar Kediri",
      metricBadge: "Google Discover Ready | SEO On-Page 95+"
    },
    metadata: {
      client: "Jawa Pos Radar Kediri (Grup Jawa Pos)",
      category: "Media Digital, Jurnalistik & SEO Berita",
      approach: "Data-Driven Journalism, Headline Optimization, Social Amplification",
      stack: ["WordPress VIP CMS", "Google Trends & Search Console", "Canva Pro", "Schema NewsArticle", "Meta Business Suite"],
      duration: "3 Bulan Pendampingan Berkelanjutan",
      team: "1 Mentor Jurnalistik Senior + 4 Peserta Magang (Informatika & Komunikasi)",
      consultationUrl: "https://wa.me/6281943431484?text=Halo%20Admin%20Gemilang%20Training%2C%20saya%20tertarik%20proyek%20kemitraan%20media%20seperti%20Radar%20Kediri"
    },
    challenges: [
      {
        title: "Tingginya Persaingan Trafik Informasi Cepat",
        desc: "Portal berita membutuhkan kecepatan publikasi namun tetap mempertahankan akurasi data dan kaidah jurnalistik terpercaya."
      },
      {
        title: "Kurang Maksimalnya Optimasi Tagging SEO",
        desc: "Banyak artikel mendalam yang tidak muncul di pencarian Google karena struktur kata kunci dan metadata headline belum terarah."
      },
      {
        title: "Retensi Pembaca Mobile yang Cenderung Singkat",
        desc: "Tata letak artikel yang monoton menyebabkan audiens muda cepat keluar sebelum membaca hingga paragraf akhir."
      },
      {
        title: "Sinkronisasi Media Sosial dan Portal Web",
        desc: "Konten viral di media sosial belum secara otomatis terkonversi menjadi pembaca setia di website utama media."
      }
    ],
    solutions: [
      {
        title: "Implementasi Panduan SEO Jurnalistik",
        desc: "Penyusunan format penulisan berita dengan heading terstruktur, focus keyphrase terukur, dan penerapan schema NewsArticle."
      },
      {
        title: "Pengemasan Infografis & Snippet Visual",
        desc: "Mengolah rangkuman data berita berat menjadi infografis ringkas yang meningkatkan waktu baca (dwell time) hingga 2.8 kali lipat."
      },
      {
        title: "Distribusi Multi-Saluran Terintegrasi",
        desc: "Menghubungkan artikel unggulan dengan postingan carousel dan video pendek di kanal media sosial resmi mitra."
      },
      {
        title: "Monitoring Realtime Google Trends",
        desc: "Riset topik hangat harian secara proaktif guna menempatkan ulasan berita lokal di peringkat teratas pencarian."
      }
    ],
    workflow: [
      {
        stage: "Tahap 1",
        timeline: "Bulan 1",
        title: "Audit Editorial & Riset Topik",
        desc: "Analisis kinerja konten sebelumnya, penyusunan guideline SEO editorial, dan orientasi ruang redaksi.",
        badge: "Editorial Blueprint Approved"
      },
      {
        stage: "Tahap 2",
        timeline: "Bulan 2",
        title: "Eksekusi Liputan & Optimasi On-Page",
        desc: "Produksi artikel reguler harian, optimasi meta deskripsi, penulisan headline click-worthy tanpa clickbait murahan.",
        badge: "Trafik Organik Melonjak"
      },
      {
        stage: "Tahap 3",
        timeline: "Bulan 3",
        title: "Evaluasi Analitik & Standardisasi",
        desc: "Penyusunan laporan analitik performa Google Search Console, review keterlibatan pembaca, serta serah terima SOP penulisan.",
        badge: "Final Report & SOP Handover"
      }
    ],
    impactMetrics: [
      {
        param: "Jangkauan Impresi Google Discover",
        before: "45.000 / Bulan",
        after: "198.000 / Bulan",
        improvement: "+340% Kenaikan Impresi"
      },
      {
        param: "Rata-rata Waktu Membaca (Dwell Time)",
        before: "48 Detik",
        after: "2 Menit 15 Detik",
        improvement: "2.8x Lebih Lama"
      },
      {
        param: "Indeks Kecepatan Google Search",
        before: "Indexed dalam 12 Jam",
        after: "Indexed dalam < 15 Menit",
        improvement: "Peringkat Berita Terkini Instan"
      },
      {
        param: "Interaksi Sosial Media (Shares & Saves)",
        before: "120 Interaksi/Minggu",
        after: "680 Interaksi/Minggu",
        improvement: "+466% Keterlibatan Publik"
      }
    ],
    internshipPillars: {
      badge: "Pilar Magang Gemilang Training",
      title: "Praktek Langsung di Ekosistem Media Nyata",
      description: "Peserta magang ditempatkan langsung mendampingi jurnalis berpengalaman. Mereka belajar memadukan etika peliputan, kecepatan penulisan berita kilat, serta teknologi pemeringkatan mesin pencari modern.",
      standards: "Standar Jurnalistik Komersial: Verifikasi sumber akurat, bebas plagiasi, dan kepatuhan kode etik pers.",
      competencies: [
        {
          title: "SEO Writing & Keyword Research",
          desc: "Teknik membedah kata kunci pencarian berita lokal dengan volume tinggi dan intensi pembaca kuat."
        },
        {
          title: "Visual Content Design",
          desc: "Membuat visualisasi data, kutipan grafis, dan thumbnail berita yang memikat di feed media sosial."
        },
        {
          title: "CMS Publishing Workflow",
          desc: "Manajemen alur drafting, penyuntingan bahasa, pemilihan kategori berita, dan penjadwalan tayang."
        },
        {
          title: "Analytics Interpretation",
          desc: "Membaca metrik Google Analytics untuk menentukan strategi konten berita yang paling diminati masyarakat."
        }
      ]
    }
  },
  {
    id: "p2",
    slug: "pelatihan-kejuruan-smk-skariga",
    category: "vokasi",
    badge: "Vokasi & Pelatihan",
    mitra: "SMK PGRI 1 Malang (SKARIGA)",
    lokasi: "Kota Malang, Jawa Timur",
    title: "Pelatihan Kejuruan Terpadu & Sinkronisasi Industri SKARIGA",
    subtitle: "Program peningkatan kompetensi siswa SMK melalui sertifikasi keahlian, pendampingan uji kompetensi keahlian, dan workshop pelatihan akselerasi talenta digital lintas jurusan.",
    desc: "Program peningkatan kompetensi siswa SMK melalui sertifikasi keahlian, pendampingan uji kompetensi keahlian, dan workshop pelatihan akselerasi talenta digital lintas jurusan (RPL, TKJ, DKV, dan Multimedia).",
    tags: ["Pelatihan SMK", "Sinkronisasi Kurikulum", "RPL", "TKJ", "Multimedia"],
    img: "/assets/img/pelatihan-smk3pgri.webp",
    stats: [
      { icon: "speedometer", value: "100%", label: "Kelulusan Sertifikasi Siswa" },
      { icon: "clock", value: "120+ Jam", label: "Praktik Terapan Langsung" },
      { icon: "trending-up", value: "4 Jurusan", label: "Kolaborasi Lintas Kompetensi" },
      { icon: "calendar", value: "Berkelanjutan", label: "Kemitraan Link & Match" }
    ],
    executiveSummary: {
      title: "Akselerasi Link & Match Vokasi SMK dengan Kebutuhan Industri",
      badge: "Executive Summary",
      verified: "MoU Kerjasama Sekolah & DUDI",
      content: "Melalui skema sinkronisasi kurikulum berbasis industri, Gemilang Training memfasilitasi ratusan siswa SMK PGRI 1 Malang (SKARIGA) untuk menguasai teknologi mutakhir. Pembelajaran tidak lagi sebatas teori baku, melainkan simulasi pengerjaan proyek riil perangkat lunak modern, konfigurasi jaringan komputer skala enterprise, serta produksi aset multimedia komersial.",
      caption: "Sesi Pelatihan & Bedah Studi Kasus di Lab Komputer SKARIGA",
      metricBadge: "Sertifikasi Resmi DUDI | Portofolio Siap Kerja"
    },
    metadata: {
      client: "SMK PGRI 1 Malang (SKARIGA)",
      category: "Vokasi, Sertifikasi Kompetensi & Pelatihan SMK",
      approach: "Project-Based Learning, Teaching Factory, Hands-On Mentoring",
      stack: ["Astro Framework", "MikroTik & Cisco Packet Tracer", "Figma & Adobe Premiere", "Git & GitHub", "Vercel Cloud"],
      duration: "Program Intensif Semesteran",
      team: "4 Lead Trainer Industri + Asisten Instruktur Magang",
      consultationUrl: "https://wa.me/6281943431484?text=Halo%20Admin%20Gemilang%20Training%2C%20saya%20tertarik%20program%20pelatihan%20sekolah%20seperti%20SKARIGA"
    },
    challenges: [
      {
        title: "Kesenjangan Antara Kurikulum Sekolah & Praktik Industri",
        desc: "Materi buku ajar sekolah kerap tertinggal 2-3 tahun dibandingkan alur kerja software development dan jaringan yang dipakai agensi saat ini."
      },
      {
        title: "Minimnya Jam Terbang Menangani Proyek Nyata",
        desc: "Siswa terbiasa mengerjakan tugas latihan sederhana tanpa batasan tenggat waktu dan standar kualitas produk pasar komersial."
      },
      {
        title: "Tantangan Kolaborasi Antar Jurusan Berbeda",
        desc: "Siswa RPL, TKJ, dan DKV berjalan sendiri-sendiri tanpa memahami bagaimana ketiga disiplin ini saling melengkapi dalam ekosistem digital."
      },
      {
        title: "Kesiapan Mental Menghadapi Uji Kompetensi Kejuruan (UKK)",
        desc: "Diperlukan pembekalan khusus agar siswa percaya diri dan memiliki portofolio otentik saat dinilai oleh penguji eksternal."
      }
    ],
    solutions: [
      {
        title: "Sinkronisasi Modul Pelatihan Berstandar DUDI",
        desc: "Menyusun silabus praktikum berbasis kebutuhan riil klien industri teknologi, mulai dari semantic coding hingga routing jaringan terproteksi."
      },
      {
        title: "Simulasi Tim Proyek Lintas Jurusan",
        desc: "Membentuk kelompok kerja di mana anak DKV membuat UI wireframe, anak RPL mengoding sistem frontend, dan anak TKJ mengelola server."
      },
      {
        title: "Pemberian Sertifikat Kompetensi Industri Resmi",
        desc: "Menyediakan sertifikasi keahlian yang diakui dunia kerja lengkap dengan transkrip penilaian teknis dan soft-skills."
      },
      {
        title: "Pendampingan Langsung oleh Praktisi Lapangan",
        desc: "Setiap kelas dibimbing mentor aktif dari industri teknologi untuk memastikan transfer ilmu berjalan efektif dan komunikatif."
      }
    ],
    workflow: [
      {
        stage: "Tahap 1",
        timeline: "Fase 1",
        title: "Sinkronisasi Silabus & Penyelarasan Materi",
        desc: "Diskusi meja bundar bersama dewan guru produktif untuk memadukan kurikulum nasional dengan kebutuhan industri nyata.",
        badge: "Kurikulum Link & Match Final"
      },
      {
        stage: "Tahap 2",
        timeline: "Fase 2",
        title: "Bootcamp Intensif & Praktikum Proyek",
        desc: "Pelaksanaan kelas interaktif, bedah kode, instalasi perangkat keras, pembuatan portofolio, dan review hasil kerja berkala.",
        badge: "Produksi Proyek Terverifikasi"
      },
      {
        stage: "Tahap 3",
        timeline: "Fase 3",
        title: "Uji Kompetensi & Sertifikasi Industri",
        desc: "Pengujian karya akhir di hadapan asesor industri, evaluasi portofolio live, dan penyerahan sertifikat kompetensi resmi.",
        badge: "100% Sertifikasi Terbit"
      }
    ],
    impactMetrics: [
      {
        param: "Tingkat Kelulusan Uji Kompetensi (UKK)",
        before: "Nilai Rata-rata 78.2",
        after: "Nilai Rata-rata 92.5",
        improvement: "+18.3% Peningkatan Skor"
      },
      {
        param: "Kepemilikan Portofolio Online Terverifikasi",
        before: "Hanya 15% Siswa",
        after: "100% Siswa Memiliki Live URL",
        improvement: "Portofolio Lengkap Siap Kerja"
      },
      {
        param: "Kesiapan Menghadapi Seleksi Magang Industri",
        before: "Cenderung Ragu & Pasif",
        after: "Percaya Diri Saat Wawancara Teknis",
        improvement: "Terserap di Berbagai DUDI"
      },
      {
        param: "Evaluasi Kepuasan Pihak Sekolah",
        before: "Metode Konvensional",
        after: "Skor Kepuasan 4.9 / 5.0",
        improvement: "Kemitraan Diperpanjang Rutin"
      }
    ],
    internshipPillars: {
      badge: "Pilar Magang Gemilang Training",
      title: "Model Teaching Factory & Mentoring Bersahabat",
      description: "Peserta pelatihan didampingi dengan pendekatan personal. Mentor mendengarkan kesulitan siswa, memberikan solusi langsung di layar komputer mereka, dan membiasakan mereka bekerja secara tertib layaknya di kantor software house.",
      standards: "Standar Vokasi Terpadu: Disiplin jam kerja, kerapian dokumentasi proyek, dan etika komunikasi profesional.",
      competencies: [
        {
          title: "Modern Web Crafting",
          desc: "Membangun tampilan web responsif menggunakan Astro SSG dan styling modern yang ringan dan cepat."
        },
        {
          title: "Network Administration",
          desc: "Konfigurasi bandwidth management, firewall MikroTik, dan pemecahan masalah jaringan lokal (LAN)."
        },
        {
          title: "Creative Visual Branding",
          desc: "Merancang identitas visual, editing video promosi beresolusi tinggi, dan packaging produk komersial."
        },
        {
          title: "Collaboration & Presentation",
          desc: "Kemampuan mempresentasikan alur pemecahan masalah teknis di depan audiens dan asesor."
        }
      ]
    }
  },
  {
    id: "p3",
    slug: "magang-mahasiswa-universitas-yudharta",
    category: "vokasi",
    badge: "Vokasi & Pelatihan",
    mitra: "Universitas Yudharta Pasuruan",
    lokasi: "Pasuruan & Malang, Jawa Timur",
    title: "Kemitraan Industri & Magang Mahasiswa Universitas Yudharta",
    subtitle: "Kolaborasi dan integrasi kurikulum magang terapan Gemilang Training bersama 3 mahasiswa Universitas Yudharta Pasuruan berfokus pada pengembangan platform web modern dan proyek industri riil.",
    desc: "Kolaborasi dan integrasi kurikulum magang terapan Gemilang Training bersama 3 mahasiswa Universitas Yudharta Pasuruan. Berfokus pada pengembangan platform web modern, optimasi ekosistem digital, serta eksekusi proyek riil industri.",
    tags: ["Kemitraan Universitas", "Magang Mahasiswa", "Informatika", "Web Engineering", "Project Industri"],
    img: "/assets/img/yudharta.webp",
    stats: [
      { icon: "speedometer", value: "3 Proyek", label: "Platform Web Produksi Live" },
      { icon: "clock", value: "6 Bulan", label: "Masa Magang Terstruktur Penuh" },
      { icon: "trending-up", value: "100%", label: "Penyelesaian Capstone Industri" },
      { icon: "calendar", value: "A+", label: "Konversi Nilai Akademik Kampus" }
    ],
    executiveSummary: {
      title: "Integrasi Riset Terapan Kampus ke Ekosistem Produk Nyata",
      badge: "Executive Summary",
      verified: "Academic & Industry Capstone",
      content: "Kerjasama antara Gemilang Training dan Program Studi Teknik Informatika Universitas Yudharta Pasuruan memberikan wadah implementasi bagi mahasiswa tingkat akhir. Tiga mahasiswa terpilih didelegasikan untuk menggarap arsitektur web modern, integrasi API, perbaikan struktur database, dan optimasi performa digital klien institusi dengan metodologi Agile Scrum.",
      caption: "Dokumentasi Bimbingan Teknis & Evaluasi Proyek Mahasiswa Yudharta",
      metricBadge: "Production Ready Architecture | Fullstack Experience"
    },
    metadata: {
      client: "Universitas Yudharta Pasuruan (Fakultas Teknik Informatika)",
      category: "Magang Mahasiswa, Web Engineering & Riset Terapan",
      approach: "Agile Development, Daily Standup, Git Flow, Code Review",
      stack: ["Astro Framework", "Node.js & Express", "Tailwind CSS", "GitHub CI/CD", "Supabase / PostgreSQL"],
      duration: "6 Bulan Penuh (Konversi 20 SKS MBKM)",
      team: "1 Lead Tech Architect + 3 Mahasiswa Magang Informatika",
      consultationUrl: "https://wa.me/6281943431484?text=Halo%20Admin%20Gemilang%20Training%2C%20saya%20tertarik%20program%20magang%20kampus%20seperti%20Universitas%20Yudharta"
    },
    challenges: [
      {
        title: "Kesenjangan Antara Pemrograman Teori Kampus & Kode Produksi",
        desc: "Mahasiswa menguasai konsep algoritma namun belum terbiasa dengan struktur arsitektur modular yang dapat di-scale oleh banyak developer."
      },
      {
        title: "Manajemen Konflik Kode pada Kolaborasi Tim",
        desc: "Sering terjadi tabrakan kode (merge conflicts) karena belum terbiasanya alur branching Git standar industri."
      },
      {
        title: "Optimasi Beban Server dan Akses Basis Data",
        desc: "Query database yang belum terindeks menyebabkan waktu respon web melambat ketika diakses simultan oleh pengguna."
      },
      {
        title: "Tuntutan Dokumentasi Teknis untuk Laporan Kampus",
        desc: "Diperlukan bukti logbook terverifikasi, screenshot deployment, dan metrik keberhasilan yang dapat dipertanggungjawabkan ke dewan penguji."
      }
    ],
    solutions: [
      {
        title: "Penerapan Arsitektur Jamstack & Komponen Reusable",
        desc: "Mengganti pendekatan monolitik dengan Astro Static Site Generation yang memangkas waktu loading hingga di bawah 1 detik."
      },
      {
        title: "Standardisasi Git Branching & Pull Request Review",
        desc: "Mewajibkan branch feature, code review oleh mentor sebelum merge, dan pencatatan commit message yang deskriptif."
      },
      {
        title: "Refaktorisasi Query & Caching Strategis",
        desc: "Mengoptimalkan pemanggilan data secara asynchronous dan mengimplementasikan edge caching untuk halaman-halaman dengan trafik tinggi."
      },
      {
        title: "Penyusunan Portofolio & Logbook Akademik Komprehensif",
        desc: "Mentor memvalidasi jurnal mingguan serta memberikan surat rekomendasi resmi berisi ulasan kontribusi proyek mahasiswa."
      }
    ],
    workflow: [
      {
        stage: "Tahap 1",
        timeline: "Bulan 1 - 2",
        title: "Onboarding & System Architecture Design",
        desc: "Analisis kebutuhan sistem, pemodelan database relational, wireframing komponen, dan pengaturan repositori kolaboratif.",
        badge: "Architecture Spec Approved"
      },
      {
        stage: "Tahap 2",
        timeline: "Bulan 3 - 4",
        title: "Sprint Development & Feature Building",
        desc: "Implementasi fitur antarmuka responsif, pembuatan API endpoints, penanganan otentikasi aman, dan pengujian unit berkala.",
        badge: "Core Features Live on Staging"
      },
      {
        stage: "Tahap 3",
        timeline: "Bulan 5 - 6",
        title: "Performance Tuning, Security Audit & Handover",
        desc: "Optimasi Lighthouse 95+, pengujian penetrasi keamanan dasar, deployment ke server cloud, serta presentasi laporan akhir.",
        badge: "Live Production & Nilai A+"
      }
    ],
    impactMetrics: [
      {
        param: "Waktu Muat Rata-rata Halaman (TTFB)",
        before: "1.4 Detik",
        after: "180 Milidetik",
        improvement: "8x Lebih Cepat Merespon"
      },
      {
        param: "Efisiensi Kode (Bundle Size)",
        before: "2.4 MB JS bloated",
        after: "140 KB Zero-JS Core",
        improvement: "-94% Pengecilan Ukuran Aset"
      },
      {
        param: "Capaian Proyek Riil Mahasiswa",
        before: "Hanya Mockup Dummy",
        after: "3 Website Live Terverifikasi",
        improvement: "Portofolio GitHub Siap Kerja"
      },
      {
        param: "Nilai Konversi Magang Kampus",
        before: "Target Standar",
        after: "Predikat Nilai A (Istimewa)",
        improvement: "100% Kepuasan Dosen Pembimbing"
      }
    ],
    internshipPillars: {
      badge: "Pilar Magang Gemilang Training",
      title: "Mentoring Mendalam Tingkat Engineer Profesional",
      description: "Mahasiswa magang diperlakukan setara junior software engineer. Mereka berpartisipasi dalam diskusi perancangan sistem, belajar memecahkan masalah arsitektur yang kompleks, dan merasakan atmosfer agensi teknologi yang dinamis.",
      standards: "Standar Rekayasa Perangkat Lunak: Clean code, dokumentasi API lengkap, dan prinsip keamanan modern.",
      competencies: [
        {
          title: "Jamstack & Modern Frameworks",
          desc: "Keahlian membangun aplikasi web cepat dengan teknologi generasi terbaru seperti Astro dan Tailwind CSS."
        },
        {
          title: "Continuous Integration & Deployment",
          desc: "Mengotomatiskan alur pengujian kode dan rilis produksi menggunakan GitHub Actions dan cloud hosting."
        },
        {
          title: "API Design & Data Handling",
          desc: "Merancang skema request-response RESTful yang bersih, aman, dan efisien dalam konsumsi data."
        },
        {
          title: "Professional Problem Solving",
          desc: "Kemampuan mendiagnosis error rumit (debugging) secara mandiri dan sistematis berdasar log error."
        }
      ]
    }
  },
  {
    id: "p5",
    slug: "pelatihan-literasi-digital-insan-kamil",
    category: "vokasi",
    badge: "Vokasi & Pelatihan",
    mitra: "Yayasan Insan Kamil",
    lokasi: "Jawa Timur",
    title: "Pelatihan Literasi Digital & Pengenalan IT Insan Kamil",
    subtitle: "Program pelatihan dasar teknologi informasi, edukasi pemanfaatan internet sehat dan aman, serta pengembangan dasar kapabilitas perangkat komputer bagi generasi muda di lingkungan masyarakat.",
    desc: "Program pelatihan dasar teknologi informasi, edukasi pemanfaatan internet sehat dan aman, serta pengembangan dasar kapabilitas perangkat komputer bagi generasi muda di lingkungan masyarakat.",
    tags: ["Pemberdayaan Digital", "Pengenalan Komputer", "Literasi Teknologi", "Generasi Muda"],
    img: "/assets/img/pelatihan-insan-kamil.webp",
    stats: [
      { icon: "speedometer", value: "150+", label: "Peserta Terlatih Aktif" },
      { icon: "clock", value: "30 Hari", label: "Durasi Pendampingan Warga" },
      { icon: "trending-up", value: "96%", label: "Peningkatan Pemahaman IT" },
      { icon: "calendar", value: "Sosial", label: "Program Pengabdian Berkelanjutan" }
    ],
    executiveSummary: {
      title: "Pemberdayaan Generasi Muda Melalui Literasi Teknologi & Etika Digital",
      badge: "Executive Summary",
      verified: "Program Pemberdayaan Komunitas",
      content: "Program inisiatif sosial dan literasi teknologi bersama Yayasan Insan Kamil bertujuan meratakan akses kecakapan digital bagi remaja dan masyarakat umum. Melalui kelas interaktif, peserta dibekali pengenalan operasional komputer, pemanfaatan tools produktivitas daring, keamanan privasi berinternet, dan cara menghindari kejahatan siber serta konten hoaks.",
      caption: "Suasana Belajar Praktikum Komputer Bersama Peserta Insan Kamil",
      metricBadge: "Komunitas Cerdas Digital | Sertifikasi Peserta"
    },
    metadata: {
      client: "Yayasan Insan Kamil Jawa Timur",
      category: "Literasi Digital, Pemberdayaan Masyarakat & Pelatihan IT",
      approach: "Interactive Workshop, Peer Mentoring, Gamified Learning",
      stack: ["Google Workspace", "Canva for Education", "OS Windows & Browser Security", "Cyber Hygiene Tools"],
      duration: "4 Sesi Workshop Terjadwal",
      team: "Lead Trainer Edukasi + 3 Fasilitator Magang Gemilang Training",
      consultationUrl: "https://wa.me/6281943431484?text=Halo%20Admin%20Gemilang%20Training%2C%20saya%20tertarik%20program%20pelatihan%20literasi%20seperti%20Insan%20Kamil"
    },
    challenges: [
      {
        title: "Kesenjangan Akses Pengenalan Komputer Mandiri",
        desc: "Sebagian peserta belum pernah menggunakan komputer jinjing secara intensif dan hanya terbiasa memakai smartphone untuk hiburan."
      },
      {
        title: "Rendahnya Kesadaran Bahaya Kejahatan Siber",
        desc: "Mudahnya masyarakat mempercayai tautan mencurigakan (phishing), penipuan online, dan penyebaran data pribadi sembarangan."
      },
      {
        title: "Keterbatasan Media Ajar yang Sederhana",
        desc: "Diperlukan materi pelatihan yang bebas dari istilah teknis membingungkan agar mudah dicerna oleh berbagai latar belakang usia."
      },
      {
        title: "Mempertahankan Minat Belajar Peserta",
        desc: "Metode ceramah satu arah terbukti membuat peserta cepat bosan, sehingga diperlukan metode praktik langsung yang mengasyikkan."
      }
    ],
    solutions: [
      {
        title: "Metodologi Praktik Langsung 80% : 20% Teori",
        desc: "Peserta langsung memegang perangkat, mencoba mengetik dokumen rapi, membuat tabel kalkulasi, dan berselancar secara cerdas."
      },
      {
        title: "Simulasi Kasus Keamanan Digital Sehari-hari",
        desc: "Mengajarkan cara membuat kata sandi yang kuat, mengaktifkan autentikasi dua faktor (2FA), dan membedakan informasi valid vs hoaks."
      },
      {
        title: "Pembuatan Modul Bergambar Ramah Pemula",
        desc: "Menyusun buku panduan saku bergambar langkah demi langkah yang dapat dibawa pulang peserta untuk latihan mandiri di rumah."
      },
      {
        title: "Kuis Interaktif & Pemberian Penghargaan Proyek Mini",
        desc: "Mengadakan kompetisi mini pembuatan materi presentasi kreatif menggunakan Canva untuk memicu semangat berprestasi."
      }
    ],
    workflow: [
      {
        stage: "Tahap 1",
        timeline: "Pekan 1",
        title: "Pemetaan Kebutuhan & Dasar Komputer",
        desc: "Asesmen tingkat pengenalan IT awal peserta, pengenalan perangkat keras, sistem operasi, dan etika berinternet.",
        badge: "Dasar Komputer Dikuasai"
      },
      {
        stage: "Tahap 2",
        timeline: "Pekan 2 - 3",
        title: "Aplikasi Perkantoran & Desain Kreatif",
        desc: "Praktik pengolahan dokumen, spreadsheet dasar untuk pencatatan kas, dan perancangan poster informasi visual.",
        badge: "Karya Digital Mandiri"
      },
      {
        stage: "Tahap 3",
        timeline: "Pekan 4",
        title: "Keamanan Siber & Pameran Karya",
        desc: "Edukasi perlindungan data pribadi, presentasi hasil karya peserta di depan kelas, dan pembagian sertifikat keikutsertaan.",
        badge: "Sertifikat Literasi Terbit"
      }
    ],
    impactMetrics: [
      {
        param: "Tingkat Penguasaan Komputer Dasar",
        before: "32% Peserta Percaya Diri",
        after: "94% Peserta Menguasai",
        improvement: "+193% Lonjakan Kecakapan"
      },
      {
        param: "Kesadaran Keamanan Kata Sandi (2FA)",
        before: "Hampir 0% Mengaktifkan",
        after: "88% Akun Peserta Terproteksi",
        improvement: "Pencegahan Kebocoran Akun"
      },
      {
        param: "Produktivitas Dokumen Daring",
        before: "Tulis Tangan Konvensional",
        after: "Pengarsipan Digital Rapi",
        improvement: "Efisiensi Administrasi Yayasan"
      },
      {
        param: "Antusiasme Melanjutkan Belajar",
        before: "Canggung Menggunakan Laptop",
        after: "100% Ingin Kelas Lanjutan",
        improvement: "Dampak Sosial Berkelanjutan"
      }
    ],
    internshipPillars: {
      badge: "Pilar Magang Gemilang Training",
      title: "Melatih Jiwa Empati & Kepemimpinan Mentor Muda",
      description: "Peserta magang Gemilang Training dilibatkan sebagai instruktur pendamping. Pengalaman ini mengasah kemampuan komunikasi publik, kesabaran dalam membimbing, dan kepekaan sosial terhadap pemerataan teknologi.",
      standards: "Standar Pengajaran Ramah: Bahasa komunikatif, pendampingan satu-lawan-satu, dan suasana kelas inklusif.",
      competencies: [
        {
          title: "Public Speaking & Training Delivery",
          desc: "Keahlian menyampaikan materi teknis dengan bahasa yang sederhana, mudah dipahami, dan menyenangkan."
        },
        {
          title: "Instructional Design",
          desc: "Menyusun alur bahan ajar yang terstruktur sesuai dengan daya tangkap audiens pemula."
        },
        {
          title: "Community Engagement",
          desc: "Berinteraksi secara hangat dan membangun hubungan suportif dengan pengurus yayasan dan peserta warga."
        },
        {
          title: "Problem Solving Lapangan",
          desc: "Kesiapsiagaan menangani kendala teknis perangkat laptop atau koneksi internet saat sesi praktik berlangsung."
        }
      ]
    }
  },
  {
    id: "p6",
    slug: "sistem-registrasi-qris-run",
    category: "web-fintech",
    badge: "Web & Fintech",
    mitra: "Panitia QRIS Run & Komunitas Digital",
    lokasi: "Jawa Timur",
    title: "Sistem Registrasi Digital & Event Management QRIS Run",
    subtitle: "Implementasi ticketing smart-presence dan lokasi live tracking untuk kegiatan olahraga bergaya kampanye QRIS, sistem otomatisasi pendaftaran elektronik, dan pemantauan peserta secara aktual.",
    desc: "Implementasi ticketing smart-presence dan lokasi live tracking untuk kegiatan olahraga bergaya kampanye QRIS, sistem otomatisasi pendaftaran elektronik, dan pemantauan peserta secara aktual.",
    tags: ["Web Event", "QRIS Payment Gateway", "Ticketing System", "Realtime Tracking"],
    img: "/assets/img/qris-run.webp",
    stats: [
      { icon: "speedometer", value: "2.500+", label: "Peserta Terdaftar Otomatis" },
      { icon: "trending-down", value: "0 Menit", label: "Antrean Verifikasi Manual" },
      { icon: "clock", value: "99.98%", label: "Uptime Sistem Saat Lonjakan" },
      { icon: "calendar", value: "1 Detik", label: "Verifikasi Tiket Barcode" }
    ],
    executiveSummary: {
      title: "Solusi Otomatisasi Registrasi Massal & Pembayaran FinTech Terpadu",
      badge: "Executive Summary",
      verified: "High-Traffic Event Platform",
      content: "Gemilang Training merancang dan meluncurkan sistem manajemen event olahraga berskala ribuan peserta QRIS Run. Platform ini menangani formulir pendaftaran cerdas, validasi pembayaran otomatis dengan integrasi QRIS Bank Indonesia, penerbitan e-ticket dengan QR Code unik, serta scanner check-in real-time di gerbang masuk lokasi acara.",
      caption: "Antarmuka Sistem Registrasi & Scanning Tiket QRIS Run",
      metricBadge: "QRIS Integrated | Sub-second Check-in | Zero Downtime"
    },
    metadata: {
      client: "Panitia Pelaksana QRIS Run & Asosiasi Komunitas Digital",
      category: "Fintech, Web Event Ticketing & Automated Check-in",
      approach: "Serverless Architecture, Scalable API, Barcode Fast-Scan",
      stack: ["Next.js / Astro", "Payment Gateway QRIS", "PostgreSQL", "Tailwind CSS", "HTML5 QR Scanner API"],
      duration: "3 Minggu Pengembangan & Standby Hari H",
      team: "1 Lead Backend Mentor + 2 Interns (Web Engineering & Cloud)",
      consultationUrl: "https://wa.me/6281943431484?text=Halo%20Admin%20Gemilang%20Training%2C%20saya%20tertarik%20sistem%20event%20dan%20QRIS%20seperti%20QRIS%20Run"
    },
    challenges: [
      {
        title: "Lonjakan Pendaftar Simultan (Traffic Spikes)",
        desc: "Saat pembukaan pendaftaran tiket (war ticket), ribuan calon peserta mengakses formulir secara serentak yang berisiko merubuhkan server."
      },
      {
        title: "Verifikasi Bukti Transfer yang Lambat & Rawan Human Error",
        desc: "Pengecekan mutasi bank manual membuat panitia kewalahan dan berpotensi meloloskan bukti transfer palsu."
      },
      {
        title: "Antrean Mengular di Gerbang Masuk Hari Pelaksanaan",
        desc: "Pencatatan daftar hadir fisik dengan kertas memperlambat aliran peserta dan rawan terjadi pemalsuan nomor dada (BIB)."
      },
      {
        title: "Kebutuhan Data Dashboard Realtime untuk Penyelenggara",
        desc: "Pihak sponsor dan panitia inti membutuhkan statistik jumlah pendaftar, jenis kategori lari, dan total dana terhimpun secara akurat."
      }
    ],
    solutions: [
      {
        title: "Arsitektur Serverless Cloud Berdaya Tahan Tinggi",
        desc: "Menggunakan database cloud elastis yang secara dinamis meningkatkan kapasitas saat lonjakan traffic tanpa mengalami server crash."
      },
      {
        title: "Integrasi QRIS Dynamic Auto-Confirmation",
        desc: "Sistem membuat QRIS unik per transaksi. Begitu peserta membayar lewat aplikasi mobile banking/e-wallet, status langsung lunas dalam 2 detik."
      },
      {
        title: "Penerbitan E-Ticket PDF dengan QR Code Terenkripsi",
        desc: "Tiket otomatis dikirim ke WhatsApp dan email peserta, siap dipindai oleh panitia menggunakan smartphone biasa dalam waktu kurang dari 1 detik."
      },
      {
        title: "Live Command Dashboard untuk Panitia",
        desc: "Menyediakan panel monitoring interaktif yang menampilkan grafik kedatangan peserta secara aktual di lokasi acara."
      }
    ],
    workflow: [
      {
        stage: "Tahap 1",
        timeline: "Pekan 1",
        title: "Perancangan Alur UX & Integrasi Payment Gateway",
        desc: "Rancang alur formulir tanpa hambatan, koneksi API sandbox QRIS, dan pemodelan database peserta.",
        badge: "Sandbox Payment Terverifikasi"
      },
      {
        stage: "Tahap 2",
        timeline: "Pekan 2",
        title: "Stress Testing & Modul Scanner Check-in",
        desc: "Uji beban simulasi 5.000 request simultan, pembuatan aplikasi scanner kamera web, dan pengujian cetak e-ticket.",
        badge: "Stress Test 99.9% Sukses"
      },
      {
        stage: "Tahap 3",
        timeline: "Pekan 3 & Hari H",
        title: "Live Deployment & On-Site Technical Support",
        desc: "Peluncuran pendaftaran publik, monitoring transaksi real-time, serta penempatan tim teknis di lokasi untuk memastikan gate check-in lancar.",
        badge: "Event Berjalan Sukses Tanpa Kendala"
      }
    ],
    impactMetrics: [
      {
        param: "Waktu Proses Verifikasi Pembayaran",
        before: "15 - 45 Menit (Manual)",
        after: "2 Detik (Otomatis QRIS)",
        improvement: "99% Efisiensi Waktu"
      },
      {
        param: "Kecepatan Check-in per Peserta",
        before: "45 Detik per Orang",
        after: "1.2 Detik per Orang",
        improvement: "Eliminasi Antrean Gerbang"
      },
      {
        param: "Tingkat Kegagalan Transaksi",
        before: "8.4% Masalah Mutasi",
        after: "0.04% Error Rate",
        improvement: "Akurasi Finansial Terjamin"
      },
      {
        param: "Uptime Sistem Selama Event",
        before: "Rentan Down",
        after: "100% Uptime Stabil",
        improvement: "Nol Keluhan Teknis"
      }
    ],
    internshipPillars: {
      badge: "Pilar Magang Gemilang Training",
      title: "Pengalaman Mengelola Sistem Bertrafik Tinggi",
      description: "Peserta magang merasakan langsung adrenalin mengelola sistem produksi dengan ribuan pengguna aktif. Mereka diajarkan menangani transaksi keuangan sensitif, optimasi database, dan standby teknis layaknya engineer profesional.",
      standards: "Standar Keamanan Transaksi: Validasi token JWT, proteksi SQL Injection, enkripsi data pribadi peserta.",
      competencies: [
        {
          title: "Payment Gateway Integration",
          desc: "Keahlian menghubungkan endpoint webhook pembayaran dan penanganan status konfirmasi otomatis."
        },
        {
          title: "High-Concurrency Handling",
          desc: "Strategi indexing basis data dan caching untuk mencegah deadlock pada saat ribuan orang bertransaksi bersamaan."
        },
        {
          title: "QR Code Cryptography",
          desc: "Penerapan payload terenkripsi pada barcode tiket agar tidak dapat dipalsukan atau di-scan ganda."
        },
        {
          title: "Event Operations Support",
          desc: "Kesiapsiagaan mental memberikan dukungan teknis di lapangan dengan respon cepat terhadap kendala pengguna."
        }
      ]
    }
  },
  {
    id: "p7",
    slug: "seminar-digitalisasi-umkm-xl-smart",
    category: "edukasi-marketing",
    badge: "Edukasi & Pemasaran Digital",
    mitra: "Komunitas UMKM XL Smart Center",
    lokasi: "Kab. Malang, Jawa Timur",
    title: "Seminar Digitalisasi UMKM & Adopsi Teknologi XL Smart",
    subtitle: "Seminar dan bimbingan teknis pemasaran digital untuk pelaku usaha mikro kecil dan menengah bersama jaringan XL Smart, mengoptimalkan katalog online, integrasi marketplace, dan strategi promosi multi-channel.",
    desc: "Seminar dan bimbingan teknis pemasaran digital untuk pelaku usaha mikro kecil dan menengah bersama jaringan XL Smart, mengoptimalkan katalog online, integrasi marketplace, dan strategi promosi multi-channel.",
    tags: ["Digitalisasi", "E-commerce Branding", "Pemasaran Lokal GEO", "XL Smart Center"],
    img: "/assets/img/seminar-umkm-xlsmart.webp",
    stats: [
      { icon: "speedometer", value: "85 UMKM", label: "Pelaku Usaha Terdampingi" },
      { icon: "trending-up", value: "+210%", label: "Kenaikan Omset Peserta Binaan" },
      { icon: "clock", value: "100%", label: "Memiliki Google Profil Bisnis" },
      { icon: "calendar", value: "Tiap Bulan", label: "Kelas Mentoring Berkala" }
    ],
    executiveSummary: {
      title: "Pemberdayaan Pelaku Usaha Mikro Menembus Pasar Digital Nasional",
      badge: "Executive Summary",
      verified: "Program Inkubasi Bisnis UMKM",
      content: "Kolaborasi antara Gemilang Training dan XL Smart Center berfokus pada pendampingan taktis pelaku UMKM kuliner, kerajinan, dan jasa di wilayah Malang Raya. Program ini mengajarkan cara membuat foto produk profesional hanya dengan smartphone, optimalisasi titik lokasi toko di Google Maps (Local SEO), serta pengelolaan katalog WhatsApp Business yang menghasilkan transaksi berulang.",
      caption: "Sesi Diskusi & Praktik Optimasi Toko Online Bersama Pelaku UMKM",
      metricBadge: "Local SEO Verified | Omset Bertumbuh | Mandiri Digital"
    },
    metadata: {
      client: "XL Smart Center & Komunitas UMKM Binaan Jawa Timur",
      category: "Digital Marketing, Local SEO & Pembinaan UMKM",
      approach: "Actionable Mentoring, Visual Merchandising, Google Maps Ranking",
      stack: ["Google Profil Bisnis", "WhatsApp Business API", "Canva Pro", "Instagram Shopping", "Shopee / Tokopedia"],
      duration: "Program Workshop & Pendampingan 2 Bulan",
      team: "Lead Marketing Strategist + 3 Mentor Magang Pemasaran",
      consultationUrl: "https://wa.me/6281943431484?text=Halo%20Admin%20Gemilang%20Training%2C%20saya%20tertarik%20pelatihan%20digitalisasi%20UMKM%20seperti%20XL%20Smart"
    },
    challenges: [
      {
        title: "Ketergantungan Pada Penjualan Offline Konvensional",
        desc: "Ketika trafik toko fisik sepi, pelaku usaha mengalami penurunan omset drastis karena tidak memiliki saluran pemasaran digital aktif."
      },
      {
        title: "Titik Lokasi Toko Belum Terverifikasi di Google Maps",
        desc: "Banyak pelanggan luar kota kesulitan menemukan alamat fisik gerai karena titik maps tidak akurat atau belum berstatus terverifikasi."
      },
      {
        title: "Katalog Visual Produk yang Kurang Menarik",
        desc: "Foto produk buram, pencahayaan minim, dan ketiadaan deskripsi harga yang jelas membuat calon pembeli enggan menghubungi penjual."
      },
      {
        title: "Kesulitan Mengelola Pesanan Secara Rapi",
        desc: "Pencatatan order manual di kertas sering menimbulkan pesanan tercecer, salah kirim, dan respon chat pelanggan yang lambat."
      }
    ],
    solutions: [
      {
        title: "Optimasi Profil Bisnis Google (Local SEO Malang)",
        desc: "Memvalidasi titik Maps, melengkapi kata kunci kategori usaha, jam buka, dan mengumpulkan ulasan bintang 5 dari pelanggan loyal."
      },
      {
        title: "Workshop Food & Product Photography Murah",
        desc: "Pelatihan teknik pencahayaan alami dan sudut pengambilan gambar estetik menggunakan kamera ponsel pintar masing-masing peserta."
      },
      {
        title: "Penataan Etalase WhatsApp Business Cerdas",
        desc: "Membuat katalog produk berlabel harga, quick replies pesan otomatis, dan tautan ringkas yang mudah disebarkan di status medsos."
      },
      {
        title: "Strategi Konten Video TikTok & Reels Pendek",
        desc: "Membimbing pembuatan video proses pembuatan produk (behind-the-scenes) yang membangun kepercayaan dan memikat calon pembeli."
      }
    ],
    workflow: [
      {
        stage: "Tahap 1",
        timeline: "Minggu 1",
        title: "Pembedahan Profil & Setup Fondasi Online",
        desc: "Pendaftaran titik Google Profil Bisnis, klaim kepemilikan bisnis, dan pengaturan profil WhatsApp Business profesional.",
        badge: "Maps & Kontak Terverifikasi"
      },
      {
        stage: "Tahap 2",
        timeline: "Minggu 2 - 3",
        title: "Produksi Visual & Kampanye Sosial Media",
        desc: "Pemotretan produk bersama, editing poster promosi diskon, serta pembuatan konten video pendek bercerita (storytelling).",
        badge: "Katalog Siap Jual"
      },
      {
        stage: "Tahap 3",
        timeline: "Minggu 4+",
        title: "Evaluasi Penjualan & Scaling Promosi",
        desc: "Review lonjakan panggilan telepon dan kunjungan maps, penerapan broadcast promosi etis, dan ekspansi ke marketplace.",
        badge: "Omset Tumbuh Signifikan"
      }
    ],
    impactMetrics: [
      {
        param: "Kemunculan di Pencarian Google Maps Lokal",
        before: "Rata-rata 120 Pencarian/Bln",
        after: "1.450+ Pencarian/Bln",
        improvement: "+1.100% Keterlihatan Lokal"
      },
      {
        param: "Permintaan Arah Petunjuk Jalan (Direction)",
        before: "15 Rute per Bulan",
        after: "185 Rute Kunjungan Fisik",
        improvement: "Lonjakan Kunjungan Gerai"
      },
      {
        param: "Konversi Chat Menjadi Penjualan",
        before: "Hanya 10% Chat Closing",
        after: "38% Chat Jadi Transaksi",
        improvement: "Katalog Informatif Efektif"
      },
      {
        param: "Rata-rata Omset Bulanan UMKM Binaan",
        before: "Stagnan",
        after: "Meningkat Rata-rata 2.1x Lipat",
        improvement: "Dampak Finansial Nyata"
      }
    ],
    internshipPillars: {
      badge: "Pilar Magang Gemilang Training",
      title: "Praktik Nyata Pemasaran Digital & Konsultasi Bisnis",
      description: "Peserta magang jurusan Bisnis Digital dan Pemasaran diterjunkan langsung mendampingi 1 UMKM per orang. Mereka bertindak sebagai konsultan mini, menganalisis peluang pasar, dan mengeksekusi strategi promosi hingga membuahkan hasil.",
      standards: "Standar Konsultasi Pemasaran: Komunikasi empatik, orientasi target penjualan, dan akurasi analisis pasar lokal.",
      competencies: [
        {
          title: "Local SEO & Google Maps Marketing",
          desc: "Teknik merangking toko pada kotak Google Local Pack dengan optimasi review dan kata kunci geografis."
        },
        {
          title: "Commercial Photography & Copywriting",
          desc: "Keahlian merangkai kalimat penawaran yang menggugah selera dan memotret produk agar tampak bernilai tinggi."
        },
        {
          title: "Customer Relationship Management (CRM)",
          desc: "Mengelola database kontak pelanggan agar melakukan pembelian ulang melalui penawaran broadcast yang tepat waktu."
        },
        {
          title: "Business Performance Analytics",
          desc: "Menghitung return on investment (ROI) dan efektivitas saluran pemasaran digital bagi efisiensi modal usaha."
        }
      ]
    }
  },
  {
    id: "p8",
    slug: "seminar-kit-merchandise-pelatihan",
    category: "branding",
    badge: "Branding & Merchandise",
    mitra: "Mitra Corporate / Event Pendidikan",
    lokasi: "Jawa Timur",
    title: "Pengembangan Fasilitas & Perlengkapan Pelatihan Seminar Kit",
    subtitle: "Perancangan dan pengadaan perlengkapan merchandise edukatif, aksesoris penyelenggaraan event, serta kit peserta pelatihan institusi guna mendukung kenyamanan dan kerapian kegiatan kelas/seminar.",
    desc: "Perancangan dan pengadaan perlengkapan merchandise edukatif, aksesoris penyelenggaraan event, serta kit peserta pelatihan institusi guna mendukung kenyamanan dan kerapian kegiatan kelas/seminar.",
    tags: ["Merchandise Custom", "Branding Design", "Seminar Kit Production", "Event Kit"],
    img: "/assets/img/seminarkits.webp",
    stats: [
      { icon: "speedometer", value: "1.200+", label: "Paket Seminar Kit Terdistribusi" },
      { icon: "trending-up", value: "99.4%", label: "Tingkat Kepuasan Peserta" },
      { icon: "clock", value: "7 Hari", label: "Lead Time Produksi Cepat" },
      { icon: "calendar", value: "Eksklusif", label: "Desain Ergonomis & Elegan" }
    ],
    executiveSummary: {
      title: "Penguatan Citra Brand Institusi Melalui Fasilitas & Merchandise Edukatif",
      badge: "Executive Summary",
      verified: "Corporate Quality Standard",
      content: "Merchandise dan perlengkapan pelatihan bukan sekadar souvenir, melainkan representasi profesionalisme sebuah institusi. Gemilang Training merancang paket seminar kit komprehensif mulai dari totebag kanvas premium, buku catatan berpenjilid elegan, pena eksklusif, lanyard berbahan lembut, hingga modul cetak berwarna yang meningkatkan kenyamanan belajar peserta.",
      caption: "Display Paket Seminar Kit Eksklusif Siap Distribusi ke Peserta",
      metricBadge: "Premium Finishing | Eco-Friendly Materials | High Utility"
    },
    metadata: {
      client: "Mitra Korporat, Perguruan Tinggi & Badan Diklat",
      category: "Branding Identitas Visual, Percetakan & Seminar Kit",
      approach: "Ergonomic Design, Brand Guidelines Compliance, Fast Turnaround",
      stack: ["Adobe Illustrator", "Mockup Pro 3D", "Screen Printing & Laser Engraving", "High-Grade Canvas & Hardcover"],
      duration: "Proses Desain hingga Cetak 7 - 10 Hari Kerja",
      team: "Lead Visual Designer + 2 Desainer Magang DKV/Multimedia",
      consultationUrl: "https://wa.me/6281943431484?text=Halo%20Admin%20Gemilang%20Training%2C%20saya%20tertarik%20pemesanan%20seminar%20kit%20pelatihan"
    },
    challenges: [
      {
        title: "Kualitas Souvenir Pasaran yang Murah & Cepat Rusak",
        desc: "Banyak paket seminar kit menggunakan bahan tipis dan sablon mudah retak yang justru menurunkan reputasi citra penyelenggara acara."
      },
      {
        title: "Waktu Pengadaan yang Sangat Mepet (Tight Deadline)",
        desc: "Kepastian jumlah peserta seminar sering kali baru terkonfirmasi H-7 sebelum acara sehingga vendor konvensional kerap menolak."
      },
      {
        title: "Desain yang Kaku dan Kurang Fungsional",
        desc: "Buku catatan dan perlengkapan seminar sering berakhir dibuang karena ukurannya tidak praktis dibawa untuk aktivitas harian."
      },
      {
        title: "Ketidaksesuaian Warna Cetak dengan Panduan Brand (Pantone)",
        desc: "Hasil cetak fisik sering kali melenceng jauh dari warna resmi logo instansi klien akibat kalibrasi mesin yang buruk."
      }
    ],
    solutions: [
      {
        title: "Pemilihan Material Premium yang Bermanfaat Tinggi",
        desc: "Menggunakan kanvas serat rapat yang awet, kertas bookpaper ramah mata, serta pena logam dengan sensasi menulis yang halus."
      },
      {
        title: "Sistem Manajemen Produksi Terpadu Tepat Waktu",
        desc: "Alur kerja printing berkapasitas tinggi yang menjamin paket seminar kit tiba di lokasi acara 2 hari sebelum pelaksanaan."
      },
      {
        title: "Sentuhan Desain Minimalis & Modern",
        desc: "Menonjolkan estetika tata letak tipografi bersih sehingga souvenir terasa berkelas dan bangga digunakan peserta di ruang publik."
      },
      {
        title: "Color Proofing Standar Percetakan Industri",
        desc: "Melakukan validasi sampel cetak fisik awal (sample dummy) yang ditandatangani klien sebelum tahap produksi massal berjalan."
      }
    ],
    workflow: [
      {
        stage: "Tahap 1",
        timeline: "Hari 1 - 2",
        title: "Brainstorming Konsep & Mockup Visual 3D",
        desc: "Menyesuaikan brand guideline klien, merancang opsi tata letak logo, dan menyajikan preview 3D realistis untuk persetujuan.",
        badge: "Visual Mockup Approved"
      },
      {
        stage: "Tahap 2",
        timeline: "Hari 3 - 5",
        title: "Proofing Sampel & Produksi Massal",
        desc: "Pembuatan sampel fisik pertama, kalibrasi warna sablon/grafir, dan eksekusi pencetakan massal dengan quality control ketat.",
        badge: "Production QC Passed"
      },
      {
        stage: "Tahap 3",
        timeline: "Hari 6 - 7",
        title: "Packaging Eksklusif & Pengiriman Terproteksi",
        desc: "Pengemasan rapi tiap paket kit dengan kemasan ramah lingkungan, pengecekan kelengkapan, dan pengantaran ke venue acara.",
        badge: "Delivered On-Time"
      }
    ],
    impactMetrics: [
      {
        param: "Tingkat Kepuasan Peserta Acara",
        before: "Souvenir Standar (72%)",
        after: "Kit Premium Eksklusif (99.4%)",
        improvement: "+27.4% Apresiasi Audiens"
      },
      {
        param: "Ketepatan Waktu Pengiriman",
        before: "Kerap Terlambat",
        after: "100% Tiba Pra-Acara (H-2)",
        improvement: "Nol Resiko Keterlambatan"
      },
      {
        param: "Masa Pakai Merchandise Pasca Acara",
        before: "Langsung Ditinggal di Meja",
        after: "Dipakai Rutin Harian",
        improvement: "Retensi Brand Jangka Panjang"
      },
      {
        param: "Akurasi Warna Identitas Instansi",
        before: "Warna Pudar / Melenceng",
        after: "100% Akurat Sesuai CMYK/Pantone",
        improvement: "Integritas Brand Terjaga"
      }
    ],
    internshipPillars: {
      badge: "Pilar Magang Gemilang Training",
      title: "Penguasaan Alur Desain Produk & Pra-Cetak",
      description: "Peserta magang jurusan Desain Komunikasi Visual (DKV) belajar seluruh siklus industri merchandise: mulai dari penyesuaian resolusi vektor, separasi warna cetak (spot color), komunikasi vendor percetakan, hingga standard packaging produk.",
      standards: "Standar Grafika Profesional: Color profile CMYK, resolusi 300+ DPI, kerapian bleed/margin cetak.",
      competencies: [
        {
          title: "Pre-press & Color Management",
          desc: "Keahlian menyiapkan file siap cetak berstandar pabrik tanpa distorsi warna atau font hilang."
        },
        {
          title: "3D Packaging & Merchandise Mockup",
          desc: "Membuat render digital tiga dimensi yang merepresentasikan bentuk fisik produk secara akurat kepada klien."
        },
        {
          title: "Vendor Negotiation & Quality Control",
          desc: "Memeriksa kecacatan produksi secara teliti dan berkoordinasi dengan pengrajin sablon serta percetakan."
        },
        {
          title: "Brand Identity Implementation",
          desc: "Menjaga konsistensi peletakan logo, proporsi elemen grafis, dan estetika pada berbagai media benda padat."
        }
      ]
    }
  }
];

export function getPortofolioBySlug(slug: string): PortofolioItem | undefined {
  return portofolios.find((item) => item.slug === slug);
}

export function getAllPortofolioSlugs(): string[] {
  return portofolios.map((item) => item.slug);
}
