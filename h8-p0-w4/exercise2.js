function fpb(angka1, angka2) {
  var tampung = '';
  
  for (var a = 0; a < angka1; a++) {
    for (var b = 0; b < angka2; b++) {
      if (angka1 < angka2) {
        tampung = angka2 -= angka1
      } else if (angka1 > angka2) {
        tampung =  angka1 -= angka2
      }
      }
      return tampung
    }
  }
  
  
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1