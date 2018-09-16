/**

Buatlah sebuah ALGORITMA/PSEUDOCODE untuk kasus berikut:

Seorang anak memiliki uang sejumlah Rp.X (jumlah uang fleksibel)
Dia akan mengunjungi sebuah toko mainan dan akan membeli mainan yang diinginkannya.
Anak ini hanya akan membeli satu mainan saja dan akan membeli harga mainan paling mahal dari uang yang dimilikinya.

Berikut beberapa mainan dan harga yang ada pada daftar anak tersebut:
 - Rubik 3x3 => Rp35.000
 - Tamiya Mini 4wd => Rp185.000
 - Robot Star Wars => Rp350.000

Tampilkan mainan apa yang bisa dibeli oleh anak tersebut dan berapa jumlah kembaliannya.
Jika uang anak tidak mencukupi satupun dari permainan tersebut, maka tampilkan "Nabung lagi ya, dek!"

**/

// ALGORITHMA :
// 1. Buat variable "sisa" equal variable "money"
// 2. Buat variable "mainanRubik" with value 0
// 3. Buat variable "mainanTamiya" with value 0
// 4. Buat variable "mainanRobot" with value 0
// 5. Lakukan perulangan untuk mengetahui "jumlahMainan" yang akan dibeli

var sisa = money;
var daftar = [];
var limit = 3;
var i = 0
var mainanRubik = 0
var mainanTamiya = 0
var mainanRobot = 0
var beli = ''
while (var i = 0; i < limit; i++) {
    if (mainanRubik >= 35000) {
        daftar.push('Rubik 3x3')
        sisa -= 35000
    } else if (mainanTamiya >= 185000) {
        daftar.push('Tamiya Mini 4wd')
        sisa -= 185000
    } else if (mainanRobot >= 350000) {
        daftar.push('Robot Star Wars')
        sisa -= 350000
        break;
    }
}

if (mainanRubik) {
    console.log ('Rubik 3x3')
} else if (mainanTamiya) {
    console.log ('Tamiya Mini 4wd')
} else if (mainanRobot) {
    console.log ('Robot Star Wars')
} else {
    console.log ('Nabung lagi ya dek!') 
}
}

