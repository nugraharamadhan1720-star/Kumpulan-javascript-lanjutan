// HTML Fragments
// const mhs = {
//     nama:'Nugraha',
//     umur:22,
//     nrp: '19220226',
//     email: 'nugraha.ramadhan1720@gmail.com'
// };
// const el =` <div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="nrp">${mhs.nrp}</span>
// </div>`;

// 2. looping
// const mhs = [
//     {
//         nama: 'Nugraha',
//         email: 'nugraha.ramadhan1720@gmail.com'
//     },
//     {
//         nama: 'dody',
//         email: 'dody.ramadhan1720@gmail.com'
//     },
//     {
//         nama: 'erik',
//         email: 'erik.ramadhan1720@gmail.com'
//     }
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`)}
// </div>`;


// 3. condtionals
// ternary
// const lagu = {
//     judul: 'Kau Adalah',
//     penyanyi: 'Isyana Saraswati',
//     feat: 'Rayi Putra'
// }

// const el = <div class="lagu">
// <ul>
//     <li>${lagu.penyanyi}</li>
//     <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
// </ul>
// </div>;

// Nested
// HTML Fragments bersarang

const mhs = {
    nama: 'Nugraha',
    semester: 5,
    matakuliah: [
        'Rekayasa Web',
        'Analisis dan perancangan Sistem Informasi',
        'Pemrograman Sistem Informasi',
        'Perancanngan Sistem Berotientasi Object'
    ]
};

function cetakMataKuliah(mataKuliah) {
    return`
    <ol>
        ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>
    `;
}

const el =`<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="semester">Semester : ${mhs.semester}</span>
<h4>Mata Kuliah :</h4>
${cetakMataKuliah(mhs.mataKuliah)}
</div>`;





document.body.innerHTML = el;

    