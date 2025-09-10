// // Tagged Templates
// const nama = 'Nugraha';
// const umur = 22;
 
// function coba (strings, ...values) {
//     // let resault = '';
//     // strings.forEach((str, i) => {
//     //     resault += `${str}${values[i] ||''}`;
//     // });
//     // return resault;

//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }

// const str = coba`Halo,nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);

// Highlight
// Tagged Templates
const nama = 'Nugraha';
const umur = 22;
 
function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl"${values[i] || ''}</span>`, '');
}

const str = highlight`Halo,nama saya ${nama}, saya ${umur} tahun.`;
document.body.innerHTML = str;