# Portfolio Website - Civil Engineer

Sebuah website portfolio pribadi yang modern, minimalis, dan profesional untuk Civil Engineer yang dibuat dengan React, TypeScript, dan Tailwind CSS.

## 🚀 Fitur Utama

- **Design Modern & Minimalis**: Tema monochrome yang elegan dan profesional
- **Responsive Design**: Optimal di semua perangkat (desktop, tablet, mobile)
- **Smooth Animations**: Menggunakan Framer Motion untuk transisi yang halus
- **TypeScript**: Type safety dan development experience yang lebih baik
- **Tailwind CSS**: Utility-first CSS framework untuk styling yang konsisten
- **Component-based Architecture**: Struktur komponen yang reusable dan maintainable

## 🛠️ Teknologi yang Digunakan

- **Frontend Framework**: React 18 dengan TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v3.4
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Package Manager**: npm

## 📁 Struktur Project

```
src/
├── components/          # Komponen React yang reusable
│   ├── Header.tsx      # Header dengan navigasi
│   ├── HeroSection.tsx # Hero section utama
│   ├── AboutSection.tsx # Section tentang saya
│   ├── ExperienceSection.tsx # Section pengalaman kerja
│   ├── EducationSection.tsx # Section pendidikan
│   ├── SkillsSection.tsx # Section skills
│   ├── AwardsSection.tsx # Section penghargaan
│   ├── ProjectsSection.tsx # Section proyek
│   ├── ProjectDetail.tsx # Halaman detail proyek
│   └── Footer.tsx      # Footer
├── data/               # Data portfolio
│   └── portfolioData.ts # Data lengkap portfolio
├── App.tsx            # Komponen utama aplikasi
├── main.tsx           # Entry point aplikasi
└── index.css          # Global styles dan Tailwind directives
```

## 🎨 Prinsip Desain

- **Monochrome Theme**: Warna hitam, putih, dan abu-abu untuk tampilan profesional
- **Clean Layout**: Layout yang rapi dan mudah dibaca
- **Smooth Transitions**: Animasi yang halus dan tidak mengganggu
- **Consistent Spacing**: Penggunaan spacing yang konsisten dengan Tailwind CSS
- **Professional Typography**: Font Inter untuk readability yang optimal

## 📱 Responsive Design

Website ini dirancang untuk responsif di semua ukuran layar:
- **Mobile First**: Design dimulai dari mobile dan scaling up
- **Breakpoints**: Menggunakan Tailwind breakpoints (sm, md, lg, xl)
- **Touch Friendly**: Optimized untuk touch devices
- **Flexible Grid**: Grid system yang adaptif

## 🚀 Cara Menjalankan

1. **Clone repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Build untuk production**
   ```bash
   npm run build
   ```

5. **Preview build**
   ```bash
   npm run preview
   ```

## 📝 Customization

### Mengubah Data Portfolio

Semua data portfolio dapat diubah di file `src/data/portfolioData.ts`:

- **Personal Info**: Nama, title, deskripsi, kontak
- **Experience**: Pengalaman kerja dan organisasi
- **Education**: Riwayat pendidikan
- **Skills**: Technical dan soft skills
- **Awards**: Penghargaan dan pengakuan
- **Projects**: Proyek yang telah dikerjakan

### Mengubah Styling

- **Colors**: Edit `tailwind.config.js` untuk mengubah skema warna
- **Components**: Modifikasi komponen individual di folder `components/`
- **Global Styles**: Edit `src/index.css` untuk styling global

## 🎯 Fitur Portfolio

### 1. Hero Section
- Foto profil (opsional)
- Nama dan title
- Deskripsi singkat
- Call-to-action buttons
- Informasi kontak

### 2. About Section
- Deskripsi lengkap
- Informasi kontak
- Statistik pengalaman
- Visual elements

### 3. Experience Section
- Timeline pengalaman kerja
- Posisi dan organisasi
- Periode kerja
- Pencapaian utama

### 4. Education Section
- Riwayat pendidikan
- GPA dan pencapaian
- Timeline pendidikan

### 5. Skills Section
- Technical skills dengan progress bar
- Soft skills
- Kategorisasi skills
- Overview skills

### 6. Awards Section
- Penghargaan formal
- Pengakuan tambahan
- Call-to-action

### 7. Projects Section
- Grid proyek
- Thumbnail dan deskripsi
- Link ke detail proyek
- Filter dan search (future enhancement)

### 8. Project Detail
- Halaman detail lengkap proyek
- Gallery proyek
- Technologies used
- Project statistics
- Contact CTA

## 🔧 Development

### Scripts Available

- `npm run dev` - Development server
- `npm run build` - Build production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

- **TypeScript**: Strict mode enabled
- **ESLint**: Code quality rules
- **Prettier**: Code formatting
- **Component Structure**: Functional components dengan hooks

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

Website dapat di-deploy ke berbagai platform:

- **Vercel**: Recommended untuk React apps
- **Netlify**: Static site hosting
- **GitHub Pages**: Free hosting
- **AWS S3**: Scalable hosting

## 🤝 Contributing

1. Fork repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📄 License

MIT License - lihat file LICENSE untuk detail

## 📞 Contact

Untuk pertanyaan atau feedback, silakan hubungi:
- Email: [email@example.com]
- LinkedIn: [LinkedIn Profile]
- GitHub: [GitHub Profile]

---

**Dibuat dengan ❤️ untuk Civil Engineering Community**
