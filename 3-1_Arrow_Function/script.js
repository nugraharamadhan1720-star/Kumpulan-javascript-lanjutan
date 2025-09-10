// function Expression
// const tampilanNama = function (nama) [
//     return 'Halo, ${nama}';
// ]
// console.log(tampilNama('nugraha));

// const tampilanNama = (nama) => { return 'Halo, ${nama}';}
// console.log('nugraha ramadhan');

// const tampilanNama = (nama,waktu) => {
//     return 'selamat ${malam}';
// }
// console.log(tampilanNama('nugraha', 'malam'));

// implisit
// const tampilanNama = nama => return 'Halo, ${nama}';
// console.log('nugraha ramadhan');


let mahasiswa =['nugraha', 'wahid', 'ramadhan'];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf);

let jumlahHuruf = mahasiswa.map(nama => ({nama: nama, jmlHuruf: nama.length}));
console.table(jumlahHuruf);