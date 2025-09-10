// $.ajax( {
//     url:'https://www.omdbapi.com/?apikey=dca61bcc&s=avengers',
//     success: movies => console.log(movies),
    // });
 
    // const xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = function () {
    //     if (xhr.status === 200) {
    //         if (xhr.readyState === 4) {
    //             console.log(JSON.parse(xhr.response));
    //         }
    //     } else {
    //         console.log(xhr.responseText);
    //     }
    // }
    // xhr.open('get', 'https://www.omdbapi.com/?apikey=dca61bcc&s=avengers',);
    // xhr.send();

// fetch('https://www.omdbapi.com/?apikey=dca61bcc&s=avengers',)
//   .then(Response => Response.json())
//   .then(Response => console.log(Response));

// promise
// object yg merepresentasikan keberhasilan / kegagalan sebuah event yg asynchronous dimasa yg akan datang
// janji (terpenuhi/ingkar janji)
// state (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then/catch)


// contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//     if(ditepati ) {
//         resolve('janji telah ditepati!');
//     }else {
//         reject('ingkar janji..');
//     }
// });

// janji1
//     .then(Response => console.log('OK! : ' + Response))
//     .catch(Response => console.log('NOT OK! : ' + Response));

// contoh 2
// let ditepati = true;
// const janji2  = new Promise((resolve, reject) => {
//     if (ditepati) {
//         setTimeout(() => {
//             resolve('Ditepati setelah beberapa waktu!');
//         }, 2000);
//     }else {
//         setTimeout(() => {
//             resolve('Tidak ditepati setelah beberapa waktu!');
//         }, 2000);
//     }
// }) ;

// console.log('mulali');
// // console.log(janji2.then(() => console.log(janji2)));
// janji2
//      .finally(() => console.log('Selamat menunggu!'))
//      .then(Response => console.log('OK! : ' + Response))
//      .catch(Response => console.log('NOT OK! : ' + Response));
// console.log('selesai');

// promise.all()

const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'avengers',
            sutradara: 'sandhika',
            pemeran: 'galih'
        }])
    }, 1000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'Bandung',
            temp: 26,
            kondisi: 'cerah berawan'
        }])
    }, 500);
});

// film.then(Response => console.log(Response));
// cuaca.then(Response => console.log(Response));

Promise.all([film,cuaca])
//   .then(Response => console.log(Response));
.then(response => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
})