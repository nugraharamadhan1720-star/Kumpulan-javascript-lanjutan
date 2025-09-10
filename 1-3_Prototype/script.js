// cara untuk membuatobject pada javascript
// 1. object Literal
// PROBLEM : tidak efektif untuk object yg banyak
// let mahasiswa1 = {
//     nama: ' Nugraha',
//     energy: 10,
//     makan: function(porsi) {
//         this.energin = this.energi + porsi ;
//         console.log('Halo ${this.nama} selamat makan!');
//     }
// } 


// let mahasiswa2 = {
//     nama: 'Dody',
//     energy: 20,
//     makan: function(porsi) {
//         this.energin = this.energi + porsi ;
//         console.log('Halo ${this.nama} selamat makan!');
//     }
// }




// 2. function declaration

// const methodMahasiswa = {
//      makan: function (porsi) {
//         this.energi  += porsi;
//         console.log('Halo ${this.nama}, selamat makan!');
//     },
//      main: function (jam) {
//         this.energi -= jam;
//         console.log('Halo ${this.nama}, selamat bermain1!');
//      },

//      tidur: function (jam) {
//         this.energi += jam * 2;
//         console.log('Halo ${this.nama}, selamat tidur!');
//      }
    
// }; 

// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
    


//     return mahasiswa;
// }

// let Nugraha = Mahasiswa('Nugraha', 10);
// let doddy = Mahasiswa('Doddy', 20);


// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan = function(porsi) {
//    this.energi += porsi;
//    return 'Halo ${this.nama}, selamat makan!';
// }

// Mahasiswa.prototype.main = function(jam) {
//    this.energi -= jam;
//    return 'Halo ${this.nama}, selamat bermain!';
// }

// Mahasiswa.prototype.tidur = function(jam) {
//    this.energi += jam *2;
//    return 'Halo ${this.nama}, selamat tidur!';
// }

// let nugraha = new Mahasiswa('nugraha', 10);



// versi class
// class Mahasiswa {
//    constructor(nama,energi) {
//       this.nama = nama;
//       this.energi = energi;
//    }

// makan(porsi) {
//    this.energi += porsi;
//    return 'Halo ${this.nama}, selamat makan!';
// }

// main (jam) {
//    this.energi -= jam;
//    return 'Halo ${this.nama}, selamat bermain!';
// }

// tidur (jam) {
//    this.energi += jam *2;
//    return 'Halo ${this.nama}, selamat tidur!';
//  }
// }
// let nugraha = new Mahasiswa('nugraha', 10);




// let angka = [];
let angka = new Array();

function Array() {
   let this = Object.create(Array.prototype); 
}



// 3. constructor function

// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function (porsi) {
//         this.energi  += porsi;
//         console.log('Halo ${this.nama}, selamat makan!');
//     }

//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log('Halo ${this.nama}, selamat bermain!');
//     }
// }

// let nugraha = new Mahasiswa('nugraha',10);


// 4. object.create
