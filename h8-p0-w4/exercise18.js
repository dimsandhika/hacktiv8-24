function kaliTerusRekursif(angka) {
  var angkaArr = String(angka)
  var angkaBaru = 1
  

  for (var i = 0; i < angkaArr.length; i++) {
    if (angka < 10) {
      return angka
    }
    angkaBaru = angkaBaru * Number(angkaArr[i])
  }
  return kaliTerusRekursif(angkaBaru)
}
// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6