# Product Catalog

## Deskripsi Proyek

Product Catalog adalah aplikasi web sederhana yang dibuat menggunakan React JS dan Vite untuk menampilkan daftar produk dari Fake Store API. Aplikasi ini memungkinkan pengguna untuk melihat produk, mencari produk, memfilter berdasarkan kategori, mengurutkan berdasarkan harga, melihat detail produk, dan mensimulasikan penambahan produk ke keranjang belanja.

---

## Teknologi yang Digunakan

* React JS
* Vite
* Axios
* React Toastify
* CSS3
* Fake Store API

---

## Cara Menjalankan Aplikasi

### 1. Clone Repository

```bash
git clone https://github.com/username/product-catalog.git
```

### 2. Masuk ke Folder Project

```bash
cd product-catalog
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Jalankan Aplikasi

```bash
npm run dev
```

### 5. Buka Browser

```text
http://localhost:5173
```

---

## API yang Digunakan

Fake Store API

```text
https://fakestoreapi.com/products
```

---

## Fitur-Fitur yang Diimplementasikan

### 1. Menampilkan Daftar Produk

Menampilkan seluruh data produk yang diperoleh dari Fake Store API menggunakan Axios.

### 2. Loading Indicator

Menampilkan status loading saat data produk sedang diambil dari API.

### 3. Error Handling

Menampilkan pesan error apabila terjadi kegagalan saat mengambil data dari API.

### 4. Search Produk

Pengguna dapat mencari produk berdasarkan judul (title) produk.

### 5. Filter Kategori

Produk dapat difilter berdasarkan kategori yang tersedia pada API.

### 6. Sorting Harga

Produk dapat diurutkan berdasarkan:

* Harga Terendah
* Harga Tertinggi

### 7. Product Detail Modal

Menampilkan informasi lengkap produk dalam bentuk modal, meliputi:

* Nama Produk
* Harga
* Kategori
* Rating
* Jumlah Review
* Deskripsi Produk

### 8. Add to Cart

Mensimulasikan penambahan produk ke keranjang belanja dengan notifikasi menggunakan React Toastify.

### 9. Pagination

Membagi daftar produk ke dalam beberapa halaman agar tampilan lebih rapi dan mudah digunakan.

### 10. Responsive Design

Tampilan website dapat menyesuaikan ukuran layar perangkat:

* Desktop (4 kolom)
* Tablet (2 kolom)
* Mobile (1 kolom)

---

## Struktur Data Produk

```json
{
  "id": 1,
  "title": "Fjallraven - Foldsack No. 1 Backpack",
  "price": 109.95,
  "description": "Your perfect pack for everyday use...",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "rating": {
    "rate": 3.9,
    "count": 120
  }
}
```

---



## Pengembang

Nama: Renal Dolok Saribu

Mata Kuliah: Pemrograman Web / React JS

Tahun: 2026
