// Rest parameter

// function myfunc() {
    // return `a= $(a), b= $(b), myArgs = $(myArgs)`;
    // return myArgs;
    //return Array.from(arguments);
// return arguments;
// }

// console.log(myfunc(1, 2, 3, 4, 5));


// function jumlahkan(...angka) {
// // let total = 0;
// // for(const a of angka) {
// //     total += a;
// // }

// // return total;
// return angka.reduce((a, b) => a + b);

// }

// console.log(jumlahkan(1, 2, 3, 4, 5));


// Array desructuring
// const kelompok1 = ['Nugraha', 'Aini', 'fajar', 'ahmad', 'anto'];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(anggota);


// object destructuring

const team = {
    pm: 'Nugraha',
    frontEnd1: 'sandika',
    frontEnd2: 'galih',
    backEnd: 'ramadhan',
    ux: 'manan',
    devOps: 'wahid'
}

const { pm, ...myTeam } = team;
console.log(pm);