// ⁡⁣⁣⁢Function⁡
// ⁡⁢⁣⁣Membuat dan memanggil function⁡
function sapaPengguna(nama){
  console.log("Halo," + nama + "!"); // Cara 1
  console.log(`Halo, ${nama} !`); // Cara 2
}
sapaPengguna("Eric") // Memanggil Function

function sapaSemua(){
  console.log("Halo Semuanya");
}
sapaSemua();

// ⁡⁢⁣⁣Parameter dan argumen⁡
function tambah(a,b){
  console.log(a+b);
}
tambah(2,3);

// ⁡⁢⁣⁣Return Statement⁡
function kuadrat(x){
  return x * x;
}
console.log(kuadrat(4));

// function dengan parameter Default
function perkenalan(nama = "eric"){
  console.log("Halo," + nama + "!")
}
perkenalan();
perkenalan("arya");