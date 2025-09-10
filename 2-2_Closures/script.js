// function init() {
//     // let nama = 'nugraha';
//     return function(nama) {
//         console.log(nama);
//     }

// }
// let panggilNama = init;
// panggilNama('ramadhan');
// panggilNama('nugraha');


function ucapkanSalam(waktu) {
    return function(nama) {
        console.log('Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!');
    }
}

let selamatPagi = ucapkanSalam('pagi');
let selamatSiang = ucapkanSalam('siang');
let selamatMalam = ucapkanSalam('malam');

selamatPagi('nugraha');
    
