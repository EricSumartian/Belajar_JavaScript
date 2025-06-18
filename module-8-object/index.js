/** ​‌‌⁡⁣⁣⁢‌​‌‌‍𝗢𝗯𝗷𝗲𝗰𝘁​⁡​ */

// ⁡⁢⁣⁣Membuat Object⁡ 
// ⁡⁢⁣⁣1. Object Literal ⁡
// let mahasiswa = {
//   nama : "Eric Sumartian",
//   umur : 19,
//   jurusan : "Sistem Informasi"
// }
//  ⁡⁣⁢⁢Cara 1 -> Notasi Titik ( Dot Notation)⁡
// console.log(mahasiswa); // seleruh isi propersi key dan value 
// console.log(mahasiswa["jurusan"]);

// ⁡⁣⁢⁢Cara 2 -> Notasi Kurung Petak ( Bracket Notation)⁡
// console.log(mahasiswa.nama); // mengabil properti yang dituju 

// ⁡⁢⁣⁣2⁡. ⁡⁢⁣⁣Object⁡ ⁡⁢⁣⁣Constructor ner Object()⁡
let buku = new Object();
buku.judul = "Belajar JavaScript";
buku.penulis = "Eric Sumartian";
buku.tahun = 2025;
// console.log(buku);// seleruh isi propersi key dan value 
// console.log(buku.penulis);// mengabil properti yang dituju 

// ⁡⁢⁣⁣Menambah dan Mengubah Properti⁡
// ⁡⁢⁣⁣Menambah properti⁡
// let mahasiswa = {
//   nama : "Eric Sumartian",
//   umur : 19,
//   jurusan : "Sistem Informasi"
// }
// mahasiswa.umur = 20;
// mahasiswa.alamat = "Bengkulu";
// console.log(mahasiswa)
// console.log(mahasiswa.alamat)

// ⁡⁢⁣⁣Destructuring Object⁡
let mahasiswa = {
  nama : "Eric Sumartian",
  umur : 19,
  jurusan : "Sistem Informasi"
}
let {nama, umur} = mahasiswa;
console.log(nama);
console.log(umur);

// ⁡⁢⁣⁣Nested Object⁡
let universitas = {
  nama : "Universitas Dehasen Bengkulu",
  fakultas : {
    nama : "Ilmu Komputer",
    prodi : "Sistem Informasi"
  }
}
console.log(universitas)
console.log(universitas.nama)
console.log(universitas.fakultas.prodi)
