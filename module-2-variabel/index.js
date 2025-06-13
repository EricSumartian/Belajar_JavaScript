/* 
    var -> bisa diakses di luar scopes dan nilainya bisa diubah
*/
// contoh variabel var
// if (true) {
//     var nama = "Eric Sumartian";
// }
// console.log(nama); 

/* <----------> */

/* 
    Let -> hanya bisa diakses di dalam scopes dan nilainya bisa diubah
*/
// contoh variabel let
// if (true) {
//     let nama = "Eric Sumartian";
    // nama = "Arya Adhipramana"; -> ini contoh mengubah nilai variabel let
//     console.log(nama);
// }

/* <----------> */

/*
    Const -> hanya bisa diakses di dalam scopes, nilainya tidak bisa diubah
*/
// contoh variabel const
if(true){
    const nama = "Eric Sumartian";
    console.log(nama);
}