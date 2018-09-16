/**

Reverse All

Implementasikan function reverseAll untuk membalikkan `arr` DAN setiap elemen string yang ada di
dalamnya.

Contoh:
- input: ['devil jin', 'geese', 'akuma']
  output: ['amuka', 'eseeg', 'nij lived']

- input: ['alisa', 'xiaoyu', 'nina', 'lili']
  output: ['ilil', 'anin', 'uyoaix', 'asila']

- input: []
  output: []

Aturan coding:
Dilarang menggunakan built-in function:
- .map()
- .filter()
- .reduce()
- .reverse()
- .split()
- .join()

*/
// ALGORITHMA :
// 1. Buat variable "tampung" dalam bentuk array
// 2. Lakukan perhitungan di sepanjang kalimat dalam array
// 3. Buat variable "words"
// 4. Buat pernyataan bahwa "words" equal "arr[i][j]"
// 5. Lakukan penekanan pada "arr[i][j]" ke dalam array baru
// 6. Panggil kembali "tampung"

function reverseAll(arr) {
  var tampung = [];

  for (var i = arr.length-1; i >= 0; i--) {
    var words = ''
    for (var j = arr[i].length-1; j >= 0; j--) {
      words+=arr[i][j]
    }
    tampung.push(words)
  }
  return tampung
}
console.log(reverseAll(['dimitri', 'sergei', 'alexei']));
// ['iexela', 'iegres', 'irtimid']

console.log(reverseAll(['kira', 'lawliet', 'near', 'mello']));
// [ 'ollem', 'raen', 'teilwal', 'arik' ]

console.log(reverseAll([]));
// []
