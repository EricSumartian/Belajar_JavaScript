/* Tipe Data Primitif */

// String
const nama = "Eric Sumartian" // petik 2
const negara = 'Indonesia' // petik 1
const domisili = `Bengkulu` // bektik

// Number
const umur = 20 // atau 20.5

// Boolean 
const isMarried = true

// Undefined
let x;

// Null
const person = null

// Symbol
const symbol1 = Symbol("description 1")

// Big Integer
const bigInt1 = 12345678910n

/* <----------> */

/* Tipe Data Reference */

// Object
const human = {
  nama : "Eric Sumartian",
  umur : 19,
  negara : "Indonesia"
}

// Array
const hobby = [
  "Mancing",
  "Catur"
]

// Function
function sayHello() {
  return "Hello World"
}
const output = sayHello()
console.log(output, typeof output) // typeof output yang mengeluarkan nama tipe data