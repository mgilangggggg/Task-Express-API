# Task-Express-API
TUGAS Tech Web Backend (Only Backend)
Pergrup Massive

Deadline : 20 juni 2024
Link pengumpulan menyusul ya teman2, jgn lupa dikerjain

Kebutuhan
 - Mampu membuat notes baru
 - Mampu menampilkan semua notes
 - Mampu menampilkan salah satu notes
 - Mampu mengubah notes (judul, tanggal, dan catatan)
 - Mampu menghapus notes


Perhatian
 - Wajib dikerjakan
 - Wajib menggunakan database yang disediakan
 - Perintah SQL dilampirkan di bagian lampiran
 - Dilarang mengubah struktur table dan tipe data
 - Menggunakan file .env (Template di lampiran)
 - Wajib memiliki file .gitignore (Template di lampiran)

Lampiran 1. Template Database

CREATE DATABASE notes_db;
USE notes_db;
create table notes
(
    id       bigint auto_increment
        primary key,
    title    text     not null,
    datetime datetime not null,
    note     longtext not null
);


Lampiran 2. Template .env

APP_PORT=
HOST=
USER=
PASSWORD=
DATABASE=

Lampiran 3. Template .gitignore

node_modules
.env