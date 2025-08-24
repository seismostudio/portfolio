export interface Project {
  id: string;
  title: string;
  description: string;
  image: string[];
  role: string;
  responsibilities: string[];
  technologies: string[];
  period: string;
  link?: string;
}

export interface Experience {
  id: string;
  organization: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  period: string;
  gpa?: string;
  achievements?: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: 'technical' | 'soft';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  email: string;
  linkedin: string;
  phone?: string;
  location: string;
  profileImage?: string;
}

export const personalInfo: PersonalInfo = {
  name: "David Harly Rizky Prabudhi, S.T.",
  title: "Civil Engineer, Geotechnical Engineer",
  shortDescription: "Civil Engineer dengan fokus pada Geotechnical Engineer dan Structural Design, serta penggiat Building Information Modeling (BIM). Berkomitmen menghadirkan solusi teknik yang praktis, aman, dan inovatif.",
  longDescription: "Saya adalah seorang insinyur sipil yang berfokus pada geoteknik dan desain struktur, serta aktif sebagai penggiat Building Information Modeling (BIM). Keahlian saya mencakup analisis perilaku tanah, perancangan struktur yang stabil dan efisien, serta pengembangan alur kerja teknik sipil yang memadukan teori dengan penerapan di lapangan. Saya memiliki ketertarikan besar untuk menyederhanakan analisis dan konsep di bidang teknik sipil, khususnya geoteknik, agar lebih mudah dipahami dan diaplikasikan oleh praktisi maupun pelajar. Bagi saya, tantangan teknik adalah peluang untuk menciptakan solusi yang efektif tanpa mengorbankan aspek keamanan dan ketelitian. Selama perjalanan profesional, saya terlibat dalam berbagai proyek mulai dari perencanaan bangunan, studi stabilitas lereng, hingga pengembangan konten edukatif dan perangkat bantu teknik sipil. Dengan memadukan ketelitian, kreativitas, dan pemahaman mendalam terhadap prinsip teknik, saya berkomitmen memberikan hasil kerja yang tidak hanya memenuhi standar, tetapi juga memberikan nilai lebih.",
  email: "davidharlyrp@gmail.com",
  linkedin: "https://linkedin.com/in/davidharlyrp",
  phone: "+62 821-2086-7946",
  location: "Bandung, Indonesia",
  profileImage: "/Pict.png"
};

export const experiences: Experience[] = [
  {
    id: "exp-1",
    organization: "PT. Wijaya Karya Bangunan Gedung Tbk.",
    position: "Internship | Production & QC/QA Division",
    period: "Sep. 2022 - Jan. 2023",
    description: "Proyek Pembangunan Gedung No. 34 PT. Bio Farma Bandung",
    achievements: [
      "Membantu kontrol kualitas produk yang terbuat di lapangan.",
      "Melakukan opname pekerjaan dan menghitung backup volume",
      "Membantu monitoring lapangan serta membuat action plan"
    ]
  },
  {
    id: "exp-2",
    organization: "CV. Pasir Mas Mulya Jaya",
    position: "Civil Engineer & Drafter",
    period: "Apr. 2023 - Jan. 2024",
    description: "Pembangunan Alun-Alun Kabupaten Bandung Barat",
    achievements: [
      "Menghitung ulang struktur baja untuk penyesuaian kondisi lapangan",
      "Menentukan pondasi alternatif serta dinding penahan tanah untuk penyesuaian kondisi lapangan",
      "Membuat shop drawing dan as built drawing"
    ]
  },
  {
    id: "exp-3",
    organization: "CV. Karya Putra",
    position: "Drafter",
    period: "Jul. 2023 - Des. 2023",
    description: "Penataan Kawasan Kumuh Perkotaan di Kabupaten Pangandaran",
    achievements: [
      "Menghitung ulang struktur baja untuk penyesuaian kondisi lapangan",
      "Menentukan pondasi alternatif serta dinding penahan tanah untuk penyesuaian kondisi lapangan",
      "Membuat shop drawing dan as built drawing"
    ]
  },
  {
    id: "exp-4",
    organization: "PT. Citrawees Salawasna",
    position: "Civil Engineer, BIM Engineer & Drafter",
    period: "Sep. 2023 - Jan. 2024",
    description: "Penyusunan DED Kawasan UPTD BPPT Unggas Jatiwangi",
    achievements: [
      "Menghitung & menganalisis struktur atas dan bawah seluruh bangunan kawasan",
      "Membuat laporan analisa struktur",
      "Membuat pemodelan BIM kawasan 16 Ha (LOD 300)",
      "Membuat BoQ Kawasan",
      "Membuat gambar perencanaan"
    ]
  },
  {
    id: "exp-5",
    organization: "Samsat Kota Bandung",
    position: "Civil Engineer, BIM Engineer & Drafter",
    period: "Feb. 2024 - Mar. 2024",
    description: "Penyusunan DED Perencanaan Extend Canopy Drive Thru Samsat Kota Bandung",
    achievements: [
      "Menghitung & menganalisis struktur atas",
      "Membuat pemodelan BIM (LOD 300)",
      "Membuat BoQ",
      "Membuat gambar perencanaan"
    ]
  },
  {
    id: "exp-6",
    organization: "PT. Lambok Ulina",
    position: "Site Engineer, Geotechnical Engineer & Drafter",
    period: "Feb. 2024 - Des. 2024",
    description: "Pembangunan Ruas Jalan Ciparay-Cikumpay, Bayah, Banten",
    achievements: [
      "Menghitung & menganalisis kebutuhan perkuatan lereng pada 3 titik longsoran",
      "Membuat laporan justifikasi analisa struktur bawah jembatan (abutment dan pondasi)",
      "Menghitung backup volume pekerjaan",
      "Membuat Action Plan",
      "Membuat Shop Drawing dan As Built Drawing"
    ]
  },
  {
    id: "exp-7",
    organization: "Freelancer",
    position: "Geotechnical Engineer & Drafter",
    period: "Des. 2024 - Feb. 2025",
    description: "Penyusunan DED Jembatan Trusses Bridge Bentang 70m Tegalluar",
    achievements: [
      "Menghitung & menganalisis kebutuhan struktur bawah jembatan (abutment dan pondasi)",
      "Membuat laporan analisa struktur bawah jembatan (abutment dan pondasi)",
      "Menghitung BoQ pekerjaan struktur bawah",
      "Membuat gambar kerja produk perencanaan"
    ]
  },
];

export const education: Education[] = [
  {
    id: "edu-1",
    institution: "Universitas Pendidikan Indonesia",
    degree: "Sarjana Teknik | Geotechnical Engineering",
    field: "Teknik Sipil",
    period: "2019 - 2024",
    gpa: "3.46/4.00",
    achievements: [
      "Ketua Departemen Keilmuan dan Keprofesian, Himpunan Mahasiswa Sipil, 2021-2022",
      "Anggota Bidang Keilmuan, Himpunan Mahasiswa Sipil, 2020-2021"
    ]
  },
  {
    id: "edu-2",
    institution: "SMA Negeri 1 Bandung",
    degree: "SMA",
    field: "IPA",
    period: "2015 - 2018",
    achievements: [
      "Paskibraka Kota Bandung 2016"
    ]
  },
  {
    id: "edu-3",
    institution: "SMP Negeri 14 Bandung",
    degree: "SMP",
    period: "2012 - 2015"
  }
];

export const skills: Skill[] = [
  // Technical Skills
  { id: "skill-1", name: "MS. Office", category: "technical", level: "expert" },
  { id: "skill-2", name: "Adobe (AI, Pr, Ae, Ps, Au)", category: "technical", level: "advanced" },
  { id: "skill-3", name: "GeoStudio", category: "technical", level: "advanced" },
  { id: "skill-4", name: "SketchUp", category: "technical", level: "intermediate" },
  { id: "skill-5", name: "Etabs", category: "technical", level: "advanced" },
  { id: "skill-6", name: "SAP 2000", category: "technical", level: "advanced" },
  { id: "skill-7", name: "CSI Bridge", category: "technical", level: "intermediate" },
  { id: "skill-8", name: "Robot Structural", category: "technical", level: "beginner" },
  { id: "skill-9", name: "Plaxis 2D & 3D", category: "technical", level: "expert" },
  { id: "skill-10", name: "HEC-RAS", category: "technical", level: "intermediate" },
  { id: "skill-11", name: "ArcGIS", category: "technical", level: "intermediate" },
  { id: "skill-12", name: "Autodesk Revit", category: "technical", level: "expert" },
  { id: "skill-13", name: "Autodesk Naviswork", category: "technical", level: "advanced" },
  { id: "skill-14", name: "Autodesk AutoCAD", category: "technical", level: "expert" },
  { id: "skill-15", name: "Autodesk Civil 3D", category: "technical", level: "advanced" },
  { id: "skill-16", name: "Idea Statica", category: "technical", level: "advanced" },
  { id: "skill-17", name: "SP Column", category: "technical", level: "expert" },
  { id: "skill-18", name: "Settle 3D", category: "technical", level: "expert" },
  { id: "skill-19", name: "AllPile", category: "technical", level: "expert" },
  { id: "skill-20", name: "LPile", category: "technical", level: "expert" },
  { id: "skill-21", name: "GroupPile", category: "technical", level: "expert" },
  { id: "skill-22", name: "Deep Soil", category: "technical", level: "intermediate" },
  { id: "skill-23", name: "Midas Civil", category: "technical", level: "intermediate" },
  { id: "skill-24", name: "Renderer Application", category: "technical", level: "advanced" },
  { id: "skill-25", name: "Python", category: "technical", level: "advanced" },
  
  // Soft Skills
  { id: "skill-26", name: "Leadership", category: "soft", level: "advanced" },
  { id: "skill-27", name: "Communication", category: "soft", level: "expert" },
  { id: "skill-28", name: "Problem Solving", category: "soft", level: "expert" },
  { id: "skill-29", name: "Team Management", category: "soft", level: "advanced" },
  { id: "skill-30", name: "Time Management", category: "soft", level: "advanced" },
  { id: "skill-31", name: "Negotiation", category: "soft", level: "intermediate" },
  { id: "skill-32", name: "Effective & Efficient", category: "soft", level: "advanced" },
  { id: "skill-33", name: "Improving", category: "soft", level: "advanced" },
];

export const awards: Award[] = [
  {
    id: "award-1",
    title: "PASKIBRAKA HUT Kemerdekaan RI Tahun 2016",
    organization: "Dinas Pemuda dan Olahraga Kota Bandung",
    year: "2016",
    description: "Anggota PASKIBRAKA Tingkat Kota Bandung Tahun 2016"
  },
  {
    id: "award-2",
    title: "Top 10 Finalist",
    organization: "PT. Tetrasa Geosinindo",
    year: "2021",
    description: "Lomba Geosinindo Perencanaan Geoteknik menggunakan material Geosintetik Se-Indonesia 'Geosisnindo Geosynthetic Application Challenge 2021'"
  },
  {
    id: "award-3",
    title: "3rd Place",
    organization: "Institut Teknologi Sepuluh Nopember",
    year: "2022",
    description: "Lomba Civil National Expo 2022 Kategori Analisis Geoteknik"
  },
  {
    id: "award-4",
    title: "2nd Place",
    organization: "PT. Tetrasa Geosinindo",
    year: "2022",
    description: "Lomba Karya Tulis Ilmiah Dengan Material Geosintetik Se-Indonesia 'Geosisnindo Geosynthetic Application Challenge 2022'"
  },
  {
    id: "award-5",
    title: "Pelaksana Lapangan Pekerjaan Jalan",
    organization: "Badan Nasional Sertifikasi Profesi",
    year: "2024",
    description: "Lembaga Pengembangan Jasa Konstruksi - Sertifikat Kompetensi Pelaksana Lapangan Pekerjaan Jalan"
  }
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Analisa Stabilitas Lereng Rel Kereta Api Cisauk DAOP I",
    description: "Menganalisa dan Menentukan Perkuatan Lereng pada jalur rel kereta api Cisauk DAOP I km 33+280 & km 33+304",
    image: [
      "/projects/project1 (1).png",
      "/projects/project1 (2).png",
      "/projects/project1 (3).png",
      "/projects/project1 (4).png",
    ],
    role: "Freelancer | Geotechnical Engineer",
    responsibilities: [
      "Menghitung stabilitas lereng dalam kondisi short-term, long-term, dan gempa",
      "Memberikan beberapa alternatif perkuatan yang memenuhi syarat",
      "Membuat laporan untuk masing-masing alternatif"
    ],
    technologies: ["AutoCAD", "Excel", "Plaxis"],
    period: "2022"
  },
  {
    id: "proj-2",
    title: "Pembangunan Alun-Alun Kabupaten Bandung Barat",
    description: "Proyek pembangunan alun-alun Kabupaten Bandung Barat dengan struktur baja",
    image: [
      "/projects/project2 (1).png",
      "/projects/project2 (2).png",
      "/projects/project2 (3).png",
      "/projects/project2 (4).png",
      "/projects/project2 (5).png",
      "/projects/project2 (6).png",
      "/projects/project2 (7).png",
      "/projects/project2 (8).png",
    ],
    role: "Structural Engineer, Geotechnical Engineer & Drafter",
    responsibilities: [
      "Menghitung ulang struktur baja untuk penyesuaian kondisi lapangan",
      "Menentukan pondasi alternatif serta dinding penahan tanah untuk penyesuaian kondisi lapangan",
      "Membuat shop drawing dan as built drawing"
    ],
    technologies: ["Autodesk Revit", "Excel", "AutoCAD", "Plaxis", "ETABS", "LPile"],
    period: "2023 - 2024"
  },
  {
    id: "proj-3",
    title: "Renovasi Rumah Tinggal",
    description: "Proyek renovasi gedung perkantoran 15 lantai dengan penambahan 3 lantai baru",
    image: [
      "/projects/project1.png",
    ],
    role: "Designer, Estimator, Site Engineer",
    responsibilities: [
      "Analisis struktur existing",
      "Desain struktur penambahan lantai",
      "Perhitungan beban dan analisis kekuatan",
      "Pengawasan pelaksanaan konstruksi"
    ],
    technologies: ["ETABS", "AutoCAD", "SAP2000", "Structural Analysis Software"],
    period: "2025"
  }
];
