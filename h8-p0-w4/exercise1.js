function angkaPrima(angka) { 
    var prima = true
    
        for (var a = 2; a < angka; a++) {
          if (angka % a === 0) {
          prima = false
          }
        }
        return prima
    }
        
        // TEST CASES
        console.log(angkaPrima(3)); // true
        console.log(angkaPrima(7)); // true
        console.log(angkaPrima(6)); // false
        console.log(angkaPrima(23)); // true
        console.log(angkaPrima(33)); // false