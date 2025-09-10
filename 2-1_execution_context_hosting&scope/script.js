// 2.1 EXECUTION CONTENT, HOISTING & SCOPE

// console.log(nama);
// var nama = 'nugraha';

// creation phase pada global context
// nama var = undefined
// nama Function = fn()
// hoisting 
//  window = global object
//  this = window

//  execution phase


// var nama = 'nugraha';
// var umur = 22;

// console.log(sayHello());

// function sayHello() {
//     return('Hallo, nama saya ${nama}, saya ${umur} tahun.');
// }

// // function membuat local execution context
// y didalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting





function satu() {
    var nama = 'nugraha';
    console.log(nama);
}

function dua() {
    console.log(nama);
}

console.log(nama);
var nama = 'erik';
satu();
dua('doddy');
console.log(nama);

