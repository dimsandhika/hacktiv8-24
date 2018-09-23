function hapusSimbol(str) {
  var kamus = 'abcdefghijklmnopqrstuvwxyz0123456789'
  var hasil = ''
  
  if (str.length === 0) {
    return hasil
  } else {
  for (var i = 0; i < kamus.length; i++) {
    if (str[0] === kamus[i]) {
      hasil+=kamus[i]
      return str[0] + hapusSimbol(str.slice(1))
    }
    }
  }
  return hapusSimbol(str.slice(1))
  }
  
  // TEST CASES
  console.log(hapusSimbol('test%$4aa')); // test4aa
  console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
  console.log(hapusSimbol('ma@#k!an~')); // makan
  console.log(hapusSimbol('coding')); // coding
  console.log(hapusSimbol('1+3-5*2=100')); // 1352100