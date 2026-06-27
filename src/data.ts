/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
  achievements: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number; description?: string }[];
}

export interface Language {
  name: string;
  proficiency: string;
  percentage: number;
}

export interface PortfolioData {
  name: string;
  title: string;
  subtitle: string;
  about: string;
  email: string;
  phone: string;
  whatsapp: string;
  linkedin: string;
  location: string;
  education: {
    degree: string;
    major: string;
    institution: string;
    period: string;
    gpa: string;
    details: string;
  }[];
  experiences: Experience[];
  skillCategories: SkillCategory[];
  languages: Language[];
  certifications: string[];
}

export const portfolioData: PortfolioData = {
  name: "Khairatin Nadzirah",
  title: "Professional Administrative & Operations Specialist",
  subtitle: "Mengoptimalkan efisiensi operasional kantor dengan manajemen dokumen yang presisi, penjadwalan teratur, dan komunikasi profesional tingkat tinggi.",
  about: "Saya adalah seorang profesional administrasi yang berdedikasi, teliti, dan terorganisir dengan pengalaman lebih dari 5 tahun dalam mengelola operasional kantor, manajemen arsip digital, serta asisten eksekutif. Memiliki keahlian mendalam dalam menyederhanakan alur kerja administratif, mengelola basis data dengan tingkat akurasi 100%, dan berkoordinasi lintas divisi secara efektif. Saya percaya bahwa kesuksesan organisasi dimulai dari manajemen administratif yang rapi, transparan, dan efisien.",
  email: "khairatin.nadzirah@gmail.com",
  phone: "+62 812-3456-7890",
  whatsapp: "https://wa.me/6281234567890",
  linkedin: "https://linkedin.com/in/khairatin-nadzirah",
  location: "Jakarta, Indonesia",
  education: [
    {
      degree: "Sarjana Administrasi Bisnis (S.AB.)",
      major: "Administrasi Bisnis / Perkantoran",
      institution: "Universitas Indonesia",
      period: "2015 - 2019",
      gpa: "3.82 / 4.00 (Cum Laude)",
      details: "Fokus pada Manajemen Operasional Kantor, Hukum Bisnis, Korespondensi Korporat, dan Sistem Informasi Manajemen Perkantoran."
    }
  ],
  experiences: [
    {
      id: "exp-1",
      role: "Senior Administrative Specialist",
      company: "PT Global Sentosa Abadi",
      period: "2022 - Sekarang",
      location: "Jakarta, Indonesia",
      responsibilities: [
        "Mengelola kalender eksekutif, koordinasi jadwal rapat dewan direksi, dan menyusun notulen rapat (MoM) yang komprehensif.",
        "Mengatur logistik perjalanan bisnis domestik dan internasional untuk jajaran manajemen puncak termasuk akomodasi, visa, dan pengeluaran terkait.",
        "Mengawasi anggaran operasional kantor bulanan, memproses klaim pengeluaran (reimbursement), dan bekerja sama dengan tim keuangan untuk pelaporan pengeluaran berkala.",
        "Mengkoordinasikan pengadaan inventaris kantor dan bernegosiasi dengan vendor untuk mendapatkan efisiensi biaya hingga 15%."
      ],
      achievements: [
        "Mengimplementasikan sistem manajemen dokumen berbasis cloud (Google Workspace & SharePoint) yang mempercepat waktu pencarian berkas dari 10 menit menjadi kurang dari 1 menit.",
        "Berhasil mengorganisir Rapat Umum Pemegang Saham (RUPS) Tahunan yang dihadiri oleh lebih dari 50 pemangku kepentingan utama tanpa kendala operasional."
      ]
    },
    {
      id: "exp-2",
      role: "Office Operations Administrator",
      company: "Sinergi Muda Kreatif (Digital Agency)",
      period: "2020 - 2022",
      location: "Jakarta, Indonesia",
      responsibilities: [
        "Menangani seluruh korespondensi resmi perusahaan, baik surat menyurat fisik maupun elektronik, dengan klien dan mitra strategis.",
        "Mengelola proses onboarding administratif untuk karyawan baru, termasuk penyiapan dokumen kontrak kerja, ID card, serta inventaris kerja.",
        "Mengelola basis data operasional internal dan memastikan keakuratan data inventaris aset digital dan fisik perusahaan.",
        "Membantu pembuatan laporan bulanan performa operasional kantor untuk diserahkan kepada Direktur Operasional."
      ],
      achievements: [
        "Mengurangi keterlambatan pengiriman laporan inventaris bulanan sebesar 30% melalui perancangan templat Excel otomatis.",
        "Menjadi narahubung utama dalam audit kepatuhan internal, mengumpulkan dan memverifikasi lebih dari 400 dokumen arsip fisik dan digital dengan nol kesalahan."
      ]
    },
    {
      id: "exp-3",
      role: "Junior Admin & Data Entry Staff",
      company: "Prakarsa Mandiri Group",
      period: "2019 - 2020",
      location: "Tangerang, Indonesia",
      responsibilities: [
        "Melakukan entri data harian berupa transaksi penjualan dan data pelanggan ke dalam sistem CRM internal perusahaan.",
        "Menyambut tamu kantor dengan ramah dan profesional serta mengarahkan panggilan telepon masuk ke departemen yang sesuai.",
        "Membantu menyusun salinan dokumen, memindai (scanning), serta melakukan pengarsipan fisik secara sistematis menggunakan metode kronologis dan alfabetis.",
        "Mempersiapkan ruangan rapat, konsumsi, dan peralatan presentasi sebelum pertemuan dimulai."
      ],
      achievements: [
        "Mencatat rekor akurasi entri data 100% untuk lebih dari 15.000 data entri pelanggan selama 12 bulan berturut-turut.",
        "Menerima penghargaan 'Staff Terdisiplin' Kuartal II-2020 atas konsistensi kehadiran dan kerapihan dokumentasi meja kerja."
      ]
    }
  ],
  skillCategories: [
    {
      category: "Administrasi Utama",
      skills: [
        { name: "Manajemen Dokumen & Arsip", level: 95, description: "Pengarsipan sistematis fisik dan digital berbasis cloud." },
        { name: "Penjadwalan & Manajemen Kalender", level: 90, description: "Pengaturan koordinasi rapat kompleks lintas zona waktu." },
        { name: "Korespondensi Bisnis", level: 88, description: "Penulisan surat resmi, email profesional, dan notulen rapat formal." },
        { name: "Pengadaan & Manajemen Vendor", level: 85, description: "Negosiasi kontrak, kontrol kualitas barang, dan pengadaan berkala." }
      ]
    },
    {
      category: "Aplikasi & Perangkat Lunak",
      skills: [
        { name: "Microsoft Office Suite", level: 92, description: "Tingkat lanjut pada Excel (VLOOKUP, PivotTable, Rumus Logika), Word, PowerPoint." },
        { name: "Google Workspace", level: 95, description: "Docs, Sheets, Slides, Forms, Drive, Calendar, Admin Console." },
        { name: "Sistem CRM & Database", level: 85, description: "Pengalaman menginput dan memvalidasi data pada Salesforce & HubSpot." },
        { name: "Aplikasi Akuntansi Dasar", level: 80, description: "Pencatatan pengeluaran kecil (petty cash) via Accurate / Mekari Jurnal." }
      ]
    },
    {
      category: "Kemampuan Interpersonal",
      skills: [
        { name: "Komunikasi Profesional", level: 95, description: "Komunikasi lisan dan tertulis yang diplomatis dan santun." },
        { name: "Manajemen Waktu & Multi-tasking", level: 90, description: "Menangani berbagai tugas operasional di bawah tenggat waktu ketat." },
        { name: "Ketelitian & Detail-Oriented", level: 95, description: "Memeriksa ejaan, angka, dan format dokumen dengan ketajaman tinggi." },
        { name: "Pemecahan Masalah", level: 88, description: "Kemampuan berpikir cepat menghadapi kendala fasilitas kantor mendadak." }
      ]
    }
  ],
  languages: [
    { name: "Bahasa Indonesia", proficiency: "Native / Penutur Asli", percentage: 100 },
    { name: "Bahasa Inggris", proficiency: "Professional Working Proficiency (Skor TOEFL: 580)", percentage: 85 }
  ],
  certifications: [
    "Certified Administrative Professional (CAP) - Badan Nasional Sertifikasi Profesi (BNSP), 2023",
    "Microsoft Office Specialist (MOS): Excel Associate - Microsoft, 2021",
    "Pelatihan Manajemen Perkantoran Modern - Indonesia Professional Academy, 2020"
  ]
};
