// Array
// array literal
// let buah = ["Pisang", "Pepaya", "Alpukat"];
// console.log(buah);
// menggunakan new Array
// let number = new Array(1,2,3,4,5);
// console.log(number);
// mengakses element array
// let buah = ["Pisang", "Pepaya", "Alpukat"];
// console.log(buah[1]); // Pisang
// console.log(buah[2]); // Alpukat
// menambah dan mengubah elemen array
let buah = ["Pisang", "Pepaya", "Alpukat"];
buah[3] = "Mangga";
buah[0] = "Durian";
console.log(buah);
/** Manipulasi */
// push(), pop(), shift(), unshift(), length()
let number = [1,2,3,4,5];
number.push(6); //-> menambah nilai array
number.pop(); // -> menghapus nilai terakhir
number.shift(); // -> menghapus nilai pertama
number.unshift(0); // -> menambah nilai ke pertama
console.log(number.length) // -> jumlah nilai, panjang nilai

