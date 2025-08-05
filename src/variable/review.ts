interface ReviewComponent {
    id: number
    stars: number
    avatar: string
    name: string
    review: string
}

export const reviews: ReviewComponent[] = [
    {
        id: 1,
        stars: 5,
        avatar: "/avatar.png",
        name: "Budi Santoso",
        review: "Tim dari tukangngapak sangat profesional dan tepat waktu. Proyek rumah saya selesai lebih cepat dari jadwal dan hasilnya sangat rapi!",
    },
    {
        id: 2,
        stars: 4,
        avatar: "/avatar.png",
        name: "Siti Aisyah",
        review: "Tukangnya ramah dan komunikatif. Beberapa detail sempat perlu dikoreksi, tapi secara keseluruhan saya puas dengan hasilnya.",
    },
    {
        id: 3,
        stars: 5,
        avatar: "/avatar.png",
        name: "Andi Pratama",
        review: "Tukangngapak benar-benar solusi buat yang cari jasa renovasi rumah tanpa ribet. Harga transparan dan pengerjaan cepat.",
    },
    {
        id: 4,
        stars: 4,
        avatar: "/avatar.png",
        name: "Dewi Lestari",
        review: "Dapur baru saya terlihat sangat modern dan bersih. Prosesnya juga tidak mengganggu aktivitas di rumah. Recommended!",
    },
    {
        id: 5,
        stars: 5,
        avatar: "/avatar.png",
        name: "Rahmat Hidayat",
        review: "Senang bisa nemu jasa seperti tukangngapak. Bisa order online, ada estimasi biaya, dan hasil kerjanya memuaskan.",
    },
    {
        id: 6,
        stars: 3,
        avatar: "/avatar.png",
        name: "Lina Marlina",
        review: "Pelayanan oke tapi agak delay di awal. Untungnya tukangnya cepat menyesuaikan dan hasil akhirnya tetap bagus.",
    },
    {
        id: 7,
        stars: 4,
        avatar: "/avatar.png",
        name: "Fajar Nugroho",
        review: "Pengerjaan kamar tidur saya dikerjakan dengan detail. Semua sesuai keinginan saya dan istri. Terima kasih tukangngapak!",
    },
    {
        id: 8,
        stars: 5,
        avatar: "/avatar.png",
        name: "Mega Yuliana",
        review: "Booking-nya gampang dan cepat, tukangnya datang tepat waktu, kerja rapi dan nggak banyak tanya. Puas banget!",
    },
];
