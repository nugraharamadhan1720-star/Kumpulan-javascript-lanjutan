// for..of
// const mhs = ['sandhika', 'dody', 'nugraha'];

// for(let i = 0; i < mhs.length; i++) {
//     console.log(mhs[i]);
// } 

// mhs.forEach(m => console.log(m));

// for( const m of mhs ) {
//     console.log(m);
// }

// string
// const nama = 'nugraha';
// for (const n of nama) {
//     console.log(n);
// }



// const mhs = ['sandhika', 'dody', 'nugraha'];
// // mhs.forEach((m, i) => {
// //     console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// // });

// for (const [i, m] of mhs.entries()) {
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// }


// node list
// const liNama =document.querySelectorAll('.nama');

// // liNama.forEach(n => console.log(n.textContent));
// for (n of liNama) {
//     console.log(n.innerHTML);
// }

// arguments
// function jumlahkanAngka() {
// //  return arguments.reduce((arguments. i) => a + i);
// // arguments.forEach(a => jumlah += a);
// let jumlah = 0;
// for( a of arguments ) {
//     jumlah += a;
// }
// return jumlah;
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// for..in
const mhs = {
    nama: 'nugraha',
    umur: 22,
    email: 'nugraha@gmail.com'
}


for (m in mhs) {
    console.log(m);
}