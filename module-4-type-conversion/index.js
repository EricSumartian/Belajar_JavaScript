// implicit conversion -> otomatis dari javascript / default
// let result = "5" + 10 -> menjadi string
let result = "5" - 10 // -> menjadi number (-, *, /, %)

// falsy value 0, null, undefined, ""
// let bool = !0 // -> menjadi true
// let bool = !1 // -> menjadi false

// explicit conversion -> manual dari programmer
// let num = 100
// let string = String(num) // mengubah number menjadi string
// let string = num.toString() // cara lain mengubah number menjadi string

// let string = "200" / "200.88"
// let num = parseInt(string) -> bilangan bulat
// let num = parseFloat(string) -> bilangan pecahan

// let bool = Boolean(0)
let bool = Boolean(1)
console.log(bool, typeof bool) 