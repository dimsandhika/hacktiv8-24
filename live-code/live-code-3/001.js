/**
Even Pairs Sum
--------------
Implementasikan function `evenPairsSum` yang akan menjumlahkan pasangan-pasangan angka genap yang
ada di dalam `str`.
Contoh
- input: '34102180'
  pasangan: 34, 10, 21, 80
  output: 124
  Karena ada pasangan genap (34, 10, 80) maka akan dijumlahkan
- input: '31913791'
  pasangan: 31, 91, 37, 91
  output: 0
  Karena tidak ada pasangan genap
- input: '2130113'
  pasangan: 21, 30, 11, 32
  output: 62

NOTE: Jika angka terakhir tidak memiliki pasangan, maka pasangkan dengan angka pertama seperti
      pada contoh terakhir

RULE:
  - WAJIB menyertakan algoritma / pseudocode
  - Dilarang menggunakan .filter, .map, .reduce
  
*/
// ALGORITMA :
// 1. Buat variable 'angkaBaru' dengan nilai 'string'
// 2. Buat variable 'ubah' dengan nilai 'angkaBaru index 0'
// 3. Kondisikan dimana panjang 'angkaBaru' perhitungannya di mulai dari angka 1
// 4. lakukan penjumlahan terhadap angka pada setiap string

function evenPairsSum (str) {
var angkaBaru = String(str)
var ubah = Number(angkaBaru[0])
if (angkaBaru.length === 1) {
  return Number(str)
} else {
  angkaBaru = angkaBaru.slice(1)
  return ubah + evenPairsSum(Number(angkaBaru))
}
}

console.log(evenPairsSum('2044101211')); // 86
console.log(evenPairsSum('33791363')); // 0
console.log(evenPairsSum('23426766201')); // 140
console.log(evenPairsSum('2478201')); // 134
