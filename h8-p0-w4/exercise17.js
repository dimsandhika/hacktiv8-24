function totalDigitRekursif(angka) {
    var angkaBaru = String(angka)
    var ubah = Number(angkaBaru[0])
    if (angkaBaru.length === 1) {
      return Number(angka)
    } else {
      angkaBaru = angkaBaru.slice(1)
      return ubah + totalDigitRekursif(Number(angkaBaru))
    }
    
    }
    // TEST CASES
    console.log(totalDigitRekursif(512)); // 8
    console.log(totalDigitRekursif(1542)); // 12
    console.log(totalDigitRekursif(5)); // 5
    console.log(totalDigitRekursif(21)); // 3
    console.log(totalDigitRekursif(11111)); // 5