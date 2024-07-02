"use strict";
// function declaration 
function sapa(nama) {
    console.log("Halo, aku" + nama);
}
sapa("Salwa!");
function calculate(a, b, c) {
    return a + b + c;
}
let hasil = calculate(3, 5, 1);
console.log("Hasil Penjumlahan: " + hasil);
// Arrow Function
let multiplication = (x, y) => {
    return x * y;
};
let result = multiplication(5, 8);
console.log("Hasil perkalian: " + result);
//Challange funct expression
const cube = function (num) {
    return num ** 3;
};
console.log(cube(3));
function greet(nama) {
    console.log("Hallo aku" + nama);
}
greet("Salwa!");
// Object
let pers;
pers = {
    name: "Salwa Eka",
    age: 18,
    address: "Tegal"
};
console.log(pers);
