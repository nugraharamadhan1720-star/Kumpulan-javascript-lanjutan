// Destructuring

// function kalkulasi(a,b) {
//     return [a + b, a - b, a * b, a / b];
// }

// // const jumlah = penjumlahanPerkalian(2, 3);
// // const kali = penjumlahanPerkalian(2, 3) [1];

// // const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// // console.log(jumlah);
// // console.log(kali);

// const [tambah, kurang, kali ,bagi] = kalkulasi(2, 3);


// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }

// const {bagi, tambah, kali, kurang} = kalkulasi( 2, 3);
// console.log(kurang);

// Destructurin function arguments
const mhs1 = {
    nama: 'Nugraha',
    umur: 33,
    email: 'nugraha@gmail.com'
}

function cetakMhs() {
    return `Halo,nama saya ${nama}, saya berumur ${umur} tahun.`;
}

console.log(cetakMhs(mhs1.nama, mhs1.umur));