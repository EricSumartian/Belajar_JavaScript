/** ⁡⁣⁣⁢Switch case⁡ */
// switch (ekspresi) {
//   case nilai1 :
//     // kode yang dijalankan jika e sama dengan nilai1
//     break;
//   case nilai2 :
//     // kode yang dijalankan jika ekspresi sama dengan nilai2
//     break;
//   case nilai3 :
//     // kode yang dijalankan jika ekspresi sama dengan nilai3
//     break;
//   default :
//   // kode dijalankan jika tidak ada nilai yang cocok
// }

let hari = 12;
let namaHari ;
switch (hari) {
  case 1 :
    namaHari = "Senin";
    break;
  case 2 :
    namaHari ="Selasa";
    break;
  case 3 :
    namaHari ="Rabu";
    break;
  case 4 :
    namaHari ="Kamis";
    break;
  case 5 :
    namaHari ="Jumat";
    break;
  case 6 :
    namaHari ="Sabtu";
    break;
  case 7 :
    namaHari ="Minggu";
    break;
  default:
    namaHari = "Hari tidak valid";
}
console.log(namaHari);

// Switch-Case dengan Ekspresi
let nilai = 100;
switch (true) {
  case nilai >= 90 :
    console.log("A");
    break;
  case nilai >= 80 :
    console.log("B");
    break;
  case nilai >= 70 :
    console.log("C");
    break;
  default:
    console.log("D");
}