/** ⁡⁣⁣⁢If-ELse Statement⁡⁡ */
// ⁡⁢⁣⁣If-Else ⁡
// if (kondisi){
//   // kode dijalankan ketika kondisi benar(true)
// }else {
//   // kode dijalankan ketika kondisi salah(false)
// }
let umur = 15;
if(umur >= 18){
  console.log("Boleh Menyoblos")
}else {
  console.log("Dilarang Nyoblos")
}

// ⁡⁢⁣⁣If-Else If⁡
// if(kondisi1){
//   // kode jika kondisi1 benar (true)
// }else if(kondisi2){
//   // kode jika kondisi2 benar (true)
// }else if(kondisi3){
//   // kode jika kondisi3 benar (true)
// }else {
//   // ko jika semua kondisi salah ( false )
// }

let nilai = 40;
if(nilai >= 90){
  console.log("A");
}else if(nilai >= 80){
  console.log("B");
}else if(nilai >= 70){
  console.log("C");
}else if(nilai >= 60){
  console.log("D");
}else {
  console.log("F");
}

// ⁡⁢⁣⁣Nested If-Else (If-Else Bertingkat)⁡
// if(kondisi1){
//   if(kondisi2){
//     // kode jika kondisi1 dan kondisi2 benar (true)
//   }else {
//     // kode jika kondisi1 benar dan kondisi2 salah
//   }
// }else {
//   // jika kondisi salah (false)
// }

let num = 10;
if(num >= 10){
  if(num % 2 === 0){
    console.log("The number is positive and even")
  }else{
    console.log("The number is positive but add")
  }
}else {
  console.log("The number is non-positive")
}