// ⁡⁢⁣⁣Higher-Order Function⁡
function manipulasiArray(arr, callback){
  let hasil = [];
  for(let i = 0; i <= arr.length; i++){
    hasil.push(callback(arr[i]));
  };
  return hasil;
};
function kaliDua(x){
  return x * 2;
};
let angka = [1,2,3,4];
let hasil = manipulasiArray(angka,kaliDua);
console.log(hasil);

// ⁡⁢⁣⁣Callback function⁡
function selesaikanTugas(tugas, callback) {
  console.log("Menyelesaikan tugas : " + tugas);
  callback();
};
function tugasSelesai() {
  console.log("Tugas Selesai");
};
selesaikanTugas("Belajar JavaScript", tugasSelesai);