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

var hewan = 'kuda'

function kelompokHewan(hewan) {
    switch (hewan) {
        case 'kuda':
        case 'kambing':
            output = "hewan berkaki empat"
            break;
        case 'ayam':
        case 'bebek':
            output = "hewan berkaki dua"
            break;
        case 'ular':
            output = "hewan tak berkaki"
            break;
        case '':
            output = "silahkan isi nama hewan"
    }
    return output
}

console.log(kelompokHewan('kuda')) // 'hewan berkaki empat'
console.log(kelompokHewan('kambing')) // 'hewan berkaki empat'
console.log(kelompokHewan('ayam')) // 'hewan berkaki dua'
console.log(kelompokHewan('bebek')) // 'hewan berkaki dua'
console.log(kelompokHewan('ular')) // 'hewan tak berkaki'
console.log(kelompokHewan('')) // 'silahkan isi nama hewan'