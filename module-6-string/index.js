/** String */

// membuat string
// let nama1 = 'Eric Sumartian'
// let nama2 = "Eric Sumartian"
// let nama3 = `Eric Sumartian`

// mengakses karakter dalam string
// let string = "JavaScript"
// console.log(string[4]) // output: S

// property dan method didalam string
// console.log(string.length) // output: 10, panjang string

// console.log(string.toUpperCase()) // output: JAVASCRIPT, mengubah string menjadi huruf kapital
// console.log(string.toLowerCase()) // output: javascript, mengubah string menjadi huruf kecil

// let testrimg = "   Hello World!   "
// console.log(testrimg.trim()) // output: Hello World!, menghapus spasi di awal dan akhir string

/** <----------> */

// ⁡⁣⁣⁢𝗠𝗮𝗻𝘂𝗽𝘂𝗹𝗮𝘀𝗶 𝗦𝘁𝗿𝗶𝗻𝗴⁡
// concat
let firstName = "Eric"
let lastName = "Sumartian"
// let fullName = firstName + " " + lastName
let fullName = `${firstName} ${lastName}` // menggunakan template literal "Rekomendasi"
console.log(fullName) // output: Eric Sumartian

// mengambil bagian dari string
let text = "JavaScript"
console.log(text.slice(0,4)) // output: Java, mengambil karakter dari index 0 sampai 4 (tidak termasuk index 4)
console.log(text.substring(4)) // output: Script, mengambil karakter dari index 4 sampai akhir string

// Mengganti karakter dalam string
let nama = "Eric Sumartian"
let newNama = nama.replace("Sumartian", "Simanjuntak")
console.log(newNama) // output: Eric Simanjuntak, mengganti "Sumartian" dengan "Simanjuntak"

// menggabungkan string dengan array
let buah = "Saya-makan-buah-buahan"
console.log(buah.split('-', 2))

// menggabungkan array dengan string
let pragraf = ["Saya", "makan", "buah-buahan"]
console.log(pragraf.join("-"))

// pencarian didalam string
let kalimat = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, commodi?"
let index = kalimat.indexOf("amet")
console.log(index) // output: 18, mencari index dari kata "amet"
let lastIndex = kalimat.lastIndexOf("consectetur")
console.log(lastIndex) // output: 26, mencari index dari kata "amet"
let isExist = kalimat.includes("Lorem")
console.log(isExist) // output: true, mengecek apakah string mengandung kata "Lorem"

const stringAsli = "javascript"
const stringBaru = stringAsli.replace("javascript", "Javascript")
console.log(stringBaru) // output: Javascript, mengganti "javascript" dengan "Javascript"