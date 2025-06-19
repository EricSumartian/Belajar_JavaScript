// ⁡⁣⁣⁢Loop⁡
// ⁡⁢⁣⁣Foor Loop⁡
// for (let i = 1; i <= 5; i++){
//   console.log(`${i}`);
// };

// ⁡⁢⁣⁣While Loop ⁡
// let i = 1;
// while (i <= 10) {
//   console.log(`${i}`);
//   i++;
// };

// ⁡⁢⁣⁣Do-While Loop⁡
// let i = 1;
// do {
//   console.log(`${i}`);
//   i++;
// } while (i <= 15);

//⁡⁢⁣⁣ For-In Loop⁡
const object = {
  nama : "Eric Sumartian",
  umur : 19
};

for (let propertis in object) {
  console.log(`${propertis}: ${object[propertis]}`);
}

// ⁡⁢⁣⁣For-Of Loop⁡
const array = [1,2,3,4,5];
for (let nilai of array){
  console.log(nilai);
}