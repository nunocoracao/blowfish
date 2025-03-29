**[English](https://github.com/nunocoracao/blowfish/blob/main/README.md) | Indonesian | [简体中文](https://github.com/nunocoracao/blowfish/blob/main/README.zh-cn.md) | [日本語](https://github.com/nunocoracao/blowfish/blob/main/README.ja.md)**  

# Blowfish  
[![Netlify Status](https://api.netlify.com/api/v1/badges/6e5256d4-3148-4d69-879c-310341020fe9/deploy-status)](https://app.netlify.com/sites/snazzy-dango-efb2ec/deploys)
[![Minimum Hugo Version](https://img.shields.io/static/v1?label=min-HUGO-version&message=0.87.0&color=blue&logo=hugo)](https://github.com/gohugoio/hugo/releases/tag/v0.87.0)
[![GitHub](https://img.shields.io/github/license/nunocoracao/blowfish)](https://github.com/nunocoracao/blowfish/blob/main/LICENSE)
[![Blowfish](https://img.shields.io/badge/Hugo--Themes-@Blowfish-blue)](https://themes.gohugo.io/themes/blowfish/)
![code-size](https://img.shields.io/github/languages/code-size/nunocoracao/blowfish)

Blowfish dirancang sebagai tema yang kuat dan ringan untuk [Hugo](https://gohugo.io). Tema ini dibuat menggunakan Tailwind CSS dengan desain yang bersih dan minimalis, yang mengutamakan konten Anda.  

![Tangkapan layar Blowfish](https://github.com/nunocoracao/blowfish/blob/main/images/screenshot.png?raw=true)  

🌏 [Situs demo](https://blowfish.page/)  
📑 [Dokumentasi tema](https://blowfish.page/docs/)  
💎 [Toko Merch](http://tee.pub/lic/qwSlWVBL5zc)  
🐛 [Laporan bug & masalah](https://github.com/nunocoracao/blowfish/issues)  
💡 [Pertanyaan & permintaan fitur](https://github.com/nunocoracao/blowfish/discussions)  

<a href="https://www.buymeacoffee.com/nunocoracao" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Belikan Saya Kopi" style="height: 60px !important;width: 217px !important;" ></a>  
<a target="_blank" href="http://tee.pub/lic/qwSlWVBL5zc"><img class="nozoom" src="https://img.buymeacoffee.com/button-api/?text=Toko Merch &emoji=💎&slug=nunocoracao&button_colour=5F7FFF&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00" /></a>  

## Fitur  

- Tata letak responsif sepenuhnya dengan Tailwind CSS 3.0  
- Beragam skema warna (atau sesuaikan sendiri)  
- Mode gelap (paksa aktif/nonaktif atau otomatis dengan pengaturan pengguna)  
- Konfigurasi yang sangat dapat disesuaikan  
- Integrasi Firebase untuk mendukung data dinamis  
- Penghitung tampilan & mekanisme suka  
- Artikel terkait  
- Beragam tata letak halaman utama  
- Dukungan untuk banyak penulis  
- Seri artikel  
- Penyortiran artikel berdasarkan tanggal dan bobot  
- Mode Zen untuk membaca artikel  
- Fleksibel dengan berbagai jenis konten, taksonomi, dan menu  
- Menu header dan footer  
- Menu bersarang & sub-menu navigasi  
- Daftar isi yang dapat digulir  
- Dukungan untuk konten multibahasa termasuk bahasa RTL  
- Kemampuan untuk menautkan ke artikel di situs web pihak ketiga  
- Dukungan untuk beberapa shortcode seperti Galeri, Timeline, Kartu GitHub, dan Carousel  
- Integrasi BuyMeACoffee  
- Pencarian situs berbasis klien dengan Fuse.js  
- Diagram dan visualisasi menggunakan Mermaid  
- Grafik menggunakan Chart.js  
- Integrasi TypeIt  
- Sematan YouTube dengan peningkatan kinerja  
- Notasi matematika menggunakan KaTeX  
- Ikon SVG dari FontAwesome 6  
- Pengubahan ukuran gambar otomatis menggunakan Hugo Pipes  
- Anchor heading, daftar isi, salin kode, tombol, lencana, dan lainnya  
- Dukungan HTML dan emoji dalam artikel 🎉  
- SEO-friendly dengan tautan berbagi ke media sosial  
- Dukungan untuk Fathom Analytics dan Google Analytics  
- Dukungan RSS feed, favicon, dan komentar  
- Kustomisasi tingkat lanjut dengan definisi warna dan gaya Tailwind yang sederhana  
- Dioptimalkan untuk kinerja dan aksesibilitas dengan skor Lighthouse sempurna  
- Dokumentasi lengkap dengan pembaruan rutin  

---

![Logo Blowfish](https://github.com/nunocoracao/blowfish/blob/main/logo.png?raw=true)  

## Dokumentasi  

Blowfish memiliki [dokumentasi lengkap](https://blowfish.page/docs/) yang mencakup semua aspek tema. Pastikan untuk [membaca dokumentasi](https://blowfish.page/docs/) guna mempelajari cara menggunakan tema dan fiturnya.  

---

## Instalasi  

Blowfish mendukung beberapa metode instalasi - sebagai submodul git, Modul Hugo, atau instalasi manual sepenuhnya.  

Instruksi terperinci untuk setiap metode dapat ditemukan dalam [dokumentasi instalasi](https://blowfish.page/docs/installation).  

### Instalasi Cepat Menggunakan Blowfish Tools  

> **Catatan:** Pastikan Anda sudah menginstal **Node.js**, **Git**, **Go**, dan **Hugo**, serta telah membuat proyek Hugo sebelum melanjutkan.  

Kami baru saja meluncurkan alat CLI baru untuk membantu Anda memulai dengan Blowfish. Ini akan membuat proyek Hugo baru, menginstal tema, dan mengatur file konfigurasi tema untuk Anda.  

Instal alat CLI secara global menggunakan npm (atau manajer paket lainnya):  
```shell
npm i -g blowfish-tools
```

Kemudian jalankan perintah berikut untuk memulai interaksi yang akan memandu Anda melalui proses pembuatan dan konfigurasi:  
```shell
blowfish-tools
```

Untuk membuat proyek Hugo baru dan menginstal tema sekaligus, gunakan:  
```shell
blowfish-tools new mynewsite
```

### Instalasi Cepat Menggunakan Git Submodules  

> **Catatan:** Pastikan Anda sudah menginstal **Git**, **Go**, dan **Hugo**, serta telah membuat proyek Hugo sebelum melanjutkan.  

1. Dari direktori proyek Anda, inisialisasi git:  
   ```shell
   git init
   ```

2. Konfigurasikan Blowfish sebagai submodul git:  
   ```shell
   git submodule add -b main https://github.com/nunocoracao/blowfish.git themes/blowfish
   ```

3. Hapus file `config.toml` di root proyek dan salin file `*.toml` dari tema ke dalam folder `config/_default/`.  

4. Ikuti petunjuk [Memulai](https://blowfish.page/docs/getting-started/) untuk mengonfigurasi situs web Anda.  

### Memperbarui Tema  

Untuk memperbarui tema ke rilis terbaru, cukup jalankan perintah berikut di direktori proyek Anda:  
```shell
hugo mod get -u
```

Instruksi pembaruan selengkapnya tersedia dalam [dokumentasi instalasi](https://blowfish.page/docs/installation/#installing-updates).  

---

## Kontribusi  

Blowfish akan terus berkembang seiring waktu. Jika Anda memiliki ide atau ingin melaporkan bug, silakan hubungi kami:  

- 🐛 **Laporan bug & masalah:** Gunakan [GitHub Issues](https://github.com/nunocoracao/blowfish/issues)  
- 💡 **Ide fitur baru:** Buat diskusi di [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions)  
- 🙋‍♀️ **Pertanyaan umum:** Kunjungi [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions)  

Jika Anda bisa memperbaiki bug atau menambahkan fitur baru, kontribusi dalam bentuk PR sangat dihargai. Pelajari lebih lanjut dalam [panduan kontribusi](https://github.com/nunocoracao/blowfish/blob/main/CONTRIBUTING.md).  

---

## Grafik Stargazers  

[![Stargazers over time](https://starchart.cc/nunocoracao/blowfish.svg)](https://starchart.cc/nunocoracao/blowfish)  

<a rel="me" href="https://masto.ai/@blowfish">Mastodon</a>
