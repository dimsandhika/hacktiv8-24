//contoh input
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]


var kalimatSamping = '';

function dataHandling(data) {
    for (var a = 0; a <= data.length - 1; a++) { // untuk menghitung panjang kalimat
        for (var i = 0; i <= a; i++) { // untuk melakukan looping 
        }

console.log("Nomor ID: " + data[a][0]);
console.log("Nama Lengkap: " + data[a][1]);
console.log("TTL: " + data[a][2] + " " + data[a][3]);
console.log("Hobi: " + data[a][4]);
console.log("");
 }
 return kalimatSamping
}

console.log(dataHandling([
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]));

