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

// total = 0
//   103
//  i = 0 => i+1 => ketika looping increment i+=2
//  i = 2 => i+1 

//    - kalo str[i+1] !== undefined || ada nilainya, maka saya ambil 
//       20 => ini genap atau bukan ya? kalo genap maka saya akan 
//       jumlahkan total dengan nilai genap ini => total = 20
//    - kalo ngga ada maka dipasangkan dengan index ke 0
//       42 => ini genap atau bukan ya? kalo genap maka saya akan jumlahkan
//       total dengan nilai genap ini => total 62;
//    end if
//   lakukan lagi sampai i-nya selesai

//   return total

function evenPairsSum(str) {
  var angka = 0
  var total = 0

  for (var i = 0; i < str.length; i += 2) {
    if (str[i + 1] !== undefined) {
      angka = Number(str[i] + str[i + 1]);
      if (angka % 2 == 0) {
        total = total + angka
      }
    } else {
      angka = Number(str[i] + str[0])
        total = total + angka
    }
  }
  return total
}

console.log(evenPairsSum('2044101211')); // 86
console.log(evenPairsSum('33791363')); // 0
console.log(evenPairsSum('23426766201')); // 140
console.log(evenPairsSum('2478201')); // 134
