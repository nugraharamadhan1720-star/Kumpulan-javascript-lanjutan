// ambil semua elemen vidio
const vidieos = Array.from(document.querySelectorAll('[data- duration]'));

// pilih hanya yyg "JAVASCRIPT LANJUTAN"
let jsLanjut = VideoColorSpace.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// ambil durasi masing2  vidio
.map(item => item.dataset.duration)

// ubah durasi menjadi float, ubah menit menjadi detik
.map(waktu => {
    //  10:30 -> [10, 30] split
    const parts = waktu.split(':').map(part => parseFloat(part));
    return (parts[0] * 60) + parts[1];
})

// jumalahkan semua detiknya
.reduce((total, detik) => total + detik);

//  ubah formatnya jadi jam menit detik
const jam = Math.florr(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.flor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// simPan di DOM
const durasi = documen.querySelector('.total-durasi');
pDurasi.textContent = '${jam} Jam, ${menit} Menit, ${detik} Detik.';
const jmlVideo = VideoColorSpace.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pjmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = '${jmlVideo} Video.';




console.log(jsLanjut);