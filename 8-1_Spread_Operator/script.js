// Spread Operator
// memecah iterables menjadi single Element

// const mhs = ['nugraha', 'sandhika', 'erik'];
// console.log(...mhs[0]);

// menggabungkan 2 array
// const mhs = ['nugraha', 'madan', 'manan'];
// const dosen = ['opat', 'noto', 'agus'];
// // const orang = [...mhs, ...dosen];
// const orang = mhs.concat(dosen);
// console.log(orang);

// meng-copy array
// const mhs = ['nugraha', 'madan', 'manan'];
// // const mhs1 = mhs;
// // mhs1[0] = 'udin';
// const mhs1 = [...mhs];
// mhs1[0] = 'udin';
// console.log(mhs1);

// const liMhs = document.querySelectorAll('li');
// // const mhs = [];
// // for(let i = 0; i < liMhs.length; i++) {
// //     mhs.push(liMhs[i].textContent);
// // }
// // console.log(mhs);
// const mhs = [...liMhs].map(m => m.textcontent);
// console.log(liMhs);


const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => '<span>${h}</span>').join('');
nama.innerHTML = huruf;