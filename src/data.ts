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
  name: "Khairatin Nazirah",
  title: "Teacher | Administrative Support | Education Graduate",
  subtitle: "Lulusan S1 Pendidikan Bahasa Jerman Universitas Negeri Medan yang memiliki pengalaman sebagai Guru Sekolah Dasar dan keahlian dalam administrasi perkantoran serta pengelolaan dokumen.",
  about: "Saya merupakan alumni dari Prodi Pendidikan Bahasa Jerman UNIMED yang telah berpengalaman bekerja sebagai Guru SD. Dalam bekerja, saya terbiasa membuat administrasi kelas, mengelola data murid, membuat laporan belajar mengajar, hingga berkoordinasi dengan rekan kerja dan juga orang tua murid.\n\nBerdasarkan pengalaman tersebut, maka saya telah dibentuk menjadi seorang yang teliti, bertanggung jawab, cepat beradaptasi, komunikatif, dan mampu mengelola waktu. Kini saya siap untuk berkarier dalam bidang administrasi, pendidikan, customer service, data entry, atau bahkan dalam bidang lain yang sesuai dengan keahlian dan pengalaman saya.",
  email: "khairatinnadzirah0106@gmail.com",
  phone: "+62 857-6144-6858",
  whatsapp: "https://wa.me/6285761446858",
  linkedin: "https://linkedin.com/in/khairatin-nazirah",
  location: "Aceh Singkil, Indonesia",
  education: [
    {
      degree: "Sarjana Pendidikan (S.Pd.)",
      major: "Pendidikan Bahasa Jerman",
      institution: "Universitas Negeri Medan (UNIMED)",
      period: "Lulusan S1",
      gpa: "S.Pd.",
      details: "Alumni Prodi Pendidikan Bahasa Jerman UNIMED yang memiliki keterampilan dalam melakukan administrasi, menulis dokumen, melaporkan, dan mengelola data."
    }
  ],
  experiences: [
    {
      id: "exp-1",
      role: "Guru Sekolah Dasar",
      company: "Sekolah Dasar Negeri",
      period: "Juli 2023 – Mei 2026",
      location: "Indonesia",
      responsibilities: [
        "Menyusun perangkat pembelajaran sesuai kurikulum.",
        "Melaksanakan kegiatan belajar mengajar di kelas.",
        "Mengelola administrasi kelas dan dokumentasi peserta didik.",
        "Menyusun laporan hasil belajar siswa secara berkala.",
        "Berkoordinasi dengan guru, orang tua, dan pihak sekolah.",
        "Mendukung berbagai kegiatan akademik dan non-akademik di lingkungan sekolah."
      ],
      achievements: [
        "Menyusun administrasi kelas secara rapi dan tepat waktu.",
        "Mengelola data peserta didik dengan baik.",
        "Membangun komunikasi yang positif dengan siswa, orang tua, dan rekan kerja.",
        "Mengembangkan kemampuan administrasi, komunikasi, dan kerja sama tim."
      ]
    }
  ],
  skillCategories: [
    {
      category: "Administrasi & Perkantoran",
      skills: [
        { name: "Microsoft Word", level: 95, description: "Pembuatan dokumen formal, surat-menyurat, dan penyusunan laporan." },
        { name: "Microsoft Excel", level: 90, description: "Pengolahan data peserta didik, rekapitulasi, dan formulasi data." },
        { name: "Microsoft PowerPoint", level: 90, description: "Penyusunan materi presentasi dan perangkat pembelajaran." },
        { name: "Data Entry", level: 95, description: "Entri data presisi, verifikasi berkas, dan pembaharuan basis data." },
        { name: "Document Management", level: 92, description: "Pengarsipan digital dan fisik secara terstruktur dan teratur." },
        { name: "Administrative Support", level: 95, description: "Dukungan operasional harian, tata kelola berkas, dan pelaporan." }
      ]
    },
    {
      category: "Manajemen & Pengajaran",
      skills: [
        { name: "Classroom Management", level: 92, description: "Pengelolaan tata tertib kelas dan dokumentasi perkembangan murid." },
        { name: "Time Management", level: 90, description: "Pengaturan jadwal mengajar, penyusunan laporan, dan ketepatan waktu." },
        { name: "Problem Solving", level: 88, description: "Penyelesaian kendala pembelajaran dan penanganan administrasi." },
        { name: "Adaptability", level: 95, description: "Kemampuan cepat beradaptasi dengan lingkungan dan tugas baru." }
      ]
    },
    {
      category: "Komunikasi & Tim",
      skills: [
        { name: "Communication", level: 95, description: "Komunikasi aktif dan positif dengan siswa, orang tua, dan rekan kerja." },
        { name: "Teamwork", level: 95, description: "Kolaborasi efektif dalam kegiatan akademik dan non-akademik." }
      ]
    }
  ],
  languages: [
    { name: "Bahasa Indonesia", proficiency: "Native / Penutur Asli", percentage: 100 },
    { name: "Bahasa Jerman", proficiency: "Goethe-Zertifikat A1", percentage: 75 }
  ],
  certifications: [
    "Goethe-Zertifikat A1 - Goethe Institut (2024)"
  ]
};
