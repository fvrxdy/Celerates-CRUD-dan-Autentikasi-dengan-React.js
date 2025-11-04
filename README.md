# 🧠 Front-End CRUD & Authentication with React.js + Express + PostgreSQL

Proyek ini merupakan tugas **Asynchronous 4 - Front-End Development Part 2**, yang mengimplementasikan:
- Autentikasi (Register & Login)
- CRUD (Create, Read, Update, Delete)
- Integrasi JWT
- React Router
- UI Modern menggunakan React-Bootstrap
- Database PostgreSQL (diakses via Sequelize ORM)
- Backend dengan Express.js

---

## 🚀 **Tech Stack**
| Bagian | Teknologi |
|--------|------------|
| Frontend | React.js, React Router DOM, React-Bootstrap, Axios |
| Backend | Node.js, Express.js, Sequelize ORM |
| Database | PostgreSQL (diakses melalui DBeaver) |
| Autentikasi | JWT (JSON Web Token) |
| Styling | Custom CSS (Glassmorphism UI) |

---

## 📁 **Struktur Project**

```
📦 latihan-frontend
├── backend/
│   ├── config/db.js
│   ├── middleware/authMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   └── Item.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── items.js
│   ├── server.js
│   └── .env
│
└── src/
    ├── api/api.js
    ├── components/
    │   ├── Navbar.js
    │   ├── PrivateRoute.js
    │   └── FormModal.js
    ├── pages/
    │   ├── Login.js
    │   ├── Register.js
    │   ├── Dashboard.js
    │   └── NotFound.js
    ├── styles/global.css
    ├── App.js
    └── index.js
```

---

## ⚙️ **Langkah Menjalankan Project**

### 🧩 1. Clone Repository
```bash
git clone https://github.com/username/latihan-frontend.git
cd latihan-frontend
```

---

### 🖥️ 2. Setup Backend (Express + PostgreSQL)

Masuk ke folder backend:
```bash
cd backend
npm install
```

Buat file `.env` di dalam folder `backend/`:
```env
PORT=5000
DB_NAME=latihan_frontend
DB_USER=postgres
DB_PASS=123456
DB_HOST=localhost
DB_DIALECT=postgres
JWT_SECRET=supersecretkey123
```

Jalankan server backend:
```bash
npm run dev
```

Jika berhasil, muncul:
```
✅ PostgreSQL Connected & Synced
🚀 Server running on http://localhost:5000
```

---

### 🌐 3. Setup Frontend (React)
Masuk ke folder utama React:
```bash
cd ../
npm install
```

Jalankan React:
```bash
npm start
```

Frontend akan berjalan di:
```
http://localhost:3000
```

---

## 🔐 **Fitur Autentikasi**
| Fitur | Deskripsi |
|--------|------------|
| Register | Pengguna baru dapat mendaftar (data tersimpan di PostgreSQL) |
| Login | Pengguna login menggunakan email dan password |
| JWT | Token disimpan di localStorage dan dikirim dalam header Authorization |

---

## 🗂️ **Fitur CRUD (Dashboard)**
| Aksi | Deskripsi |
|------|------------|
| Create | Tambah data item melalui modal |
| Read | Tampilkan seluruh data item milik user login |
| Update | Edit data item langsung dari dashboard |
| Delete | Hapus data item langsung dari tabel |
| Proteksi | Semua aksi CRUD hanya bisa dilakukan user yang login |

---

## 🧭 **Routing (React Router v6)**
| Path | Halaman |
|------|----------|
| `/login` | Halaman login |
| `/register` | Halaman register |
| `/dashboard` | Dashboard (protected route) |
| `*` | NotFound (404) |

---

## 🎨 **UI/UX**
- Desain minimalis & modern (glassmorphism style)
- Responsif (tampilan menyesuaikan layar)
- Menggunakan `React-Bootstrap` untuk komponen UI
- Efek hover & fokus halus untuk pengalaman pengguna yang lebih baik

---

## 🧪 **Kriteria Penilaian (Checklist ✅)**

| Kriteria | Status | Keterangan |
|-----------|:------:|------------|
| Autentikasi Berfungsi | ✅ | User dapat register & login |
| JWT Terintegrasi | ✅ | Token diverifikasi untuk setiap request |
| CRUD Berjalan | ✅ | Tambah, edit, hapus, tampil data berhasil |
| Modal CRUD | ✅ | Semua aksi CRUD dilakukan via modal |
| React Router | ✅ | Navigasi login → dashboard lancar |
| UI Rapi | ✅ | Menggunakan React-Bootstrap + desain modern |
| Kerapian Kode | ✅ | Struktur folder sesuai standar |
| (Bonus) Validasi Form / Notifikasi | ✅ | Ada alert sukses & gagal |

---

## 🧰 **Sumber Belajar**
- [React Bootstrap Documentation](https://react-bootstrap.github.io/)
- [Axios Documentation](https://axios-http.com/)
- [React Router v6 Docs](https://reactrouter.com/en/main)
- [JWT.io Introduction](https://jwt.io/introduction)
- [Sequelize Docs](https://sequelize.org/)
- [PostgreSQL Docs](https://www.postgresql.org/docs/)

---

## 👨‍💻 **Developer**
**Nama:** Ferdi Al Majid Firdaus  
**Kelas:** Front-End Development — Asynchronous 4  
**Stack:** React.js, Express.js, PostgreSQL  
**Tanggal:** November 2025  
