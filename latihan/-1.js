// PSEUDOCODE :
// IF 'kuda' 
//       DISPLAY 'hewan berkaki empat'
// ELSE IF 'kambing'
//       DISPLAY 'hewan berkaki empat'
// ELSE IF 'ayam'
//       DISPLAY 'hewan berkaki dua'
// ELSE IF 'bebek'
//       DISPLAY 'hewan berkaki dua'
// ELSE IF 'ular'
//       DISPLAY 'hewan tidak berkaki'
// ELSE
//       DISPLAY 'silahkan isi nama hewan'


var namaHewan = 'kuda'
function kelompokHewan(hewan) {
    if (namaHewan === '') {
    console.log('silahkan isi nama hewan');
} else if (namaHewan === 'kuda'  || namaHewan === 'kambing') {
    console.log('hewan berkaki empat');
} else if (namaHewan === 'ayam' || namaHewan !== 'bebek') {
    console.log('hewan berkaki dua');
} else if (namaHewan === 'ular') {
    console.log('hewan tidak berkaki');
 }
 return namaHewan
}

console.log(kelompokHewan('kuda')) // 'hewan berkaki empat'
console.log(kelompokHewan('kambing')) // 'hewan berkaki empat'
console.log(kelompokHewan('ayam')) // 'hewan berkaki dua'
console.log(kelompokHewan('bebek')) // 'hewan berkaki dua'
console.log(kelompokHewan('ular')) // 'hewan tak berkaki'
console.log(kelompokHewan('')) // 'silahkan isi nama hewan'