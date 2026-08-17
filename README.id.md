[English](https://github.com/nunocoracao/blowfish/blob/main/README.md) | [Français](https://github.com/nunocoracao/blowfish/blob/main/README.fr.md) | [Deutsch](https://github.com/nunocoracao/blowfish/blob/main/README.de.md) | [Português (PT)](https://github.com/nunocoracao/blowfish/blob/main/README.pt-pt.md) | [Português (BR)](https://github.com/nunocoracao/blowfish/blob/main/README.pt-br.md) | [Español](https://github.com/nunocoracao/blowfish/blob/main/README.es.md) | [日本語](https://github.com/nunocoracao/blowfish/blob/main/README.ja.md) | [简体中文](https://github.com/nunocoracao/blowfish/blob/main/README.zh-cn.md) | Indonesian

# Blowfish  
[![Netlify Status](https://api.netlify.com/api/v1/badges/6e5256d4-3148-4d69-879c-310341020fe9/deploy-status)](https://app.netlify.com/sites/snazzy-dango-efb2ec/deploys)
[![Minimum Hugo Version](https://img.shields.io/static/v1?label=min-HUGO-version&message=0.162.0&color=blue&logo=hugo)](https://github.com/gohugoio/hugo/releases/tag/v0.162.0)
[![GitHub](https://img.shields.io/github/license/nunocoracao/blowfish)](https://github.com/nunocoracao/blowfish/blob/main/LICENSE)
[![Blowfish](https://img.shields.io/badge/Hugo--Themes-@Blowfish-blue)](https://themes.gohugo.io/themes/blowfish/)
![code-size](https://img.shields.io/github/languages/code-size/nunocoracao/blowfish)

Blowfish dirancang sebagai tema yang kuat dan ringan untuk [Hugo](https://gohugo.io). Tema ini dibuat menggunakan Tailwind CSS dengan desain yang bersih dan minimalis, yang mengutamakan konten Anda.  

![Tangkapan layar Blowfish](https://github.com/nunocoracao/blowfish/blob/main/images/screenshot.png?raw=true)  

🌏 [Situs demo](https://blowfish.page/)  
📑 [Dokumentasi tema](https://blowfish.page/docs/)  
🐛 [Laporan bug & masalah](https://github.com/nunocoracao/blowfish/issues)  
💡 [Pertanyaan & permintaan fitur](https://github.com/nunocoracao/blowfish/discussions)  

<a href="https://www.buymeacoffee.com/nunocoracao" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Belikan Saya Kopi" style="height: 60px !important;width: 217px !important;" ></a>  

## Fitur  

- Tata letak responsif sepenuhnya dengan Tailwind CSS 4  
- Beragam skema warna (atau sesuaikan sendiri)  
- Mode gelap (paksa aktif/nonaktif atau otomatis dengan pengaturan pengguna)  
- Beragam tata letak halaman utama, termasuk landing page bergaya produk dengan gambar hero, statistik, dan grid fitur  
- Header kaca mengambang dengan pintasan pencarian ⌘K / Ctrl+K  
- Kanvas latar belakang global dengan bagian hero yang melebur ke dalamnya saat digulir  
- Bilah kemajuan membaca untuk artikel  
- Pengalih tata letak halaman utama interaktif untuk pratinjau langsung  
- Agent skill agar agen pemrograman AI (seperti Claude Code) dapat menginstal dan mengonfigurasi tema untuk Anda  
- Halaman ramah cetak dengan gaya cetak khusus  
- Konfigurasi yang sangat dapat disesuaikan  
- Integrasi Firebase untuk mendukung data dinamis  
- Penghitung tampilan & mekanisme suka  
- Artikel terkait  
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
- Lebih dari 40 shortcode termasuk Galeri, Timeline, Kartu GitHub, Carousel, Statistik, Grid fitur, Langkah, dan tombol CTA
- Sintaks GitHub Alerts, 15 jenis, dukungan lipat
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

Instruksi terperinci untuk setiap metode dapat ditemukan dalam [dokumentasi instalasi](https://blowfish.page/docs/installation). Anda sebaiknya membaca dokumentasi untuk pengalaman penyiapan yang paling sederhana. Berikut ini adalah panduan memulai cepat menggunakan submodul jika Anda menggunakan git, atau modul Hugo jika Anda sudah terbiasa menginstal tema Hugo.  

### Instalasi Cepat Menggunakan Agen AI  

Blowfish menyertakan sebuah [agent skill](https://github.com/nunocoracao/blowfish/tree/main/.claude/skills/blowfish) yang mengajarkan agen pemrograman AI — seperti Claude Code — cara menginstal, mengonfigurasi, dan membangun situs dengan tema ini. Instal dari marketplace plugin Blowfish di Claude Code:  

```shell
/plugin marketplace add nunocoracao/blowfish
/plugin install blowfish@blowfish
```

Atau cukup salin folder skill ke repositori situs Anda di `.claude/skills/blowfish/` — agen akan mengenali skill proyek secara otomatis. Kemudian minta agen Anda untuk menyiapkan Blowfish untuk Anda.  

### Instalasi Cepat Menggunakan Blowfish Tools  

> **Catatan:** Pastikan Anda sudah menginstal **Node.js**, **Git**, dan **Hugo**, serta telah membuat proyek Hugo sebelum melanjutkan.  

Blowfish Tools adalah alat CLI yang membantu Anda memulai dengan Blowfish. Alat ini akan membuat proyek Hugo baru, menginstal tema, dan mengatur file konfigurasi tema untuk Anda. Silakan [laporkan masalah apa pun yang Anda temukan](https://github.com/nunocoracao/blowfish-tools).  

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

> **Catatan:** Pastikan Anda sudah menginstal **Git** dan **Hugo**, serta telah membuat proyek Hugo sebelum melanjutkan.  

1. Dari direktori proyek Anda, inisialisasi git:  
   ```shell
   git init
   ```

2. Konfigurasikan Blowfish sebagai submodul git:  
   ```shell
   git submodule add -b main https://github.com/nunocoracao/blowfish.git themes/blowfish
   ```

3. Hapus file `hugo.toml` di root proyek dan salin file `*.toml` dari tema ke dalam folder `config/_default/`.  

   Anda akan menemukan file konfigurasi tema ini di direktori cache Hugo, atau [unduh salinannya](https://github.com/nunocoracao/blowfish/releases/latest/download/config-default.zip) dari GitHub.  

4. Ikuti petunjuk [Memulai](https://blowfish.page/docs/getting-started/) untuk mengonfigurasi situs web Anda.  

### Instalasi Cepat Menggunakan Hugo  

> **Catatan:** Pastikan Anda sudah menginstal **Go** dan **Hugo**, serta telah membuat proyek Hugo baru sebelum melanjutkan.  

1. Dari direktori proyek Anda, inisialisasi Hugo Modules:  
   ```shell
   hugo mod init github.com/<username>/<repo-name>
   ```

2. Buat `config/_default/module.toml` dan tambahkan berikut ini:  
   ```toml
   [[imports]]
   path = "github.com/nunocoracao/blowfish/v3"
   ```

3. Jalankan server Anda menggunakan `hugo server` dan tema akan diunduh secara otomatis.  

4. Di folder root situs web Anda, hapus file `hugo.toml` yang dibuat oleh Hugo. Salin file konfigurasi `*.toml` dari tema ke folder `config/_default/` Anda.  

   > **Catatan:** Jangan menimpa file `module.toml` yang Anda buat di atas!  

   Anda akan menemukan file konfigurasi tema ini di direktori cache Hugo, atau [unduh salinannya](https://github.com/nunocoracao/blowfish/releases/latest/download/config-default.zip) dari GitHub.  

5. Ikuti petunjuk [Memulai](https://blowfish.page/docs/getting-started/) untuk mengonfigurasi situs web Anda.  

### Menginstal Pembaruan Tema  

Saat rilis baru diterbitkan, Anda dapat memperbarui tema menggunakan Hugo. Cukup jalankan `hugo mod get -u` dari direktori proyek Anda dan tema akan diperbarui secara otomatis ke rilis terbaru.  

Instruksi pembaruan selengkapnya tersedia dalam [dokumentasi instalasi](https://blowfish.page/docs/installation/#installing-updates).  

### Peningkatan dari v2 ke v3  

Blowfish v3 sepenuhnya kompatibel dengan versi sebelumnya: setiap fitur baru bersifat opsional dan tidak ada opsi konfigurasi atau templat yang dihapus. Instalasi submodul git dan manual diperbarui seperti biasa tanpa perubahan apa pun; pengguna modul Hugo cukup mengubah jalur impor di `config/_default/module.toml` dari `github.com/nunocoracao/blowfish/v2` menjadi `github.com/nunocoracao/blowfish/v3` lalu menjalankan `hugo mod get -u`. Lihat [instruksi peningkatan](https://blowfish.page/docs/installation/#upgrading-from-v2-to-v3) untuk detailnya.  

---

## Kontribusi  

Blowfish akan terus berkembang seiring waktu. Jika Anda memiliki ide atau ingin melaporkan bug, silakan hubungi kami:  

- 🐛 **Laporan bug & masalah:** Gunakan [GitHub Issues](https://github.com/nunocoracao/blowfish/issues)  
- 💡 **Ide fitur baru:** Buat diskusi di [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions)  
- 🙋‍♀️ **Pertanyaan umum:** Kunjungi [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions)  

Jika Anda bisa memperbaiki bug atau menambahkan fitur baru, kontribusi dalam bentuk PR sangat dihargai. Pelajari lebih lanjut dalam [panduan kontribusi](https://github.com/nunocoracao/blowfish/blob/main/CONTRIBUTING.md).  

---

  

<a rel="me" href="https://masto.ai/@blowfish">Mastodon</a>
