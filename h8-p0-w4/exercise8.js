function urutkanAbjad(str) {
    var tampung = []
    
    for (var a = str.length-1; a >= 0; a--) {
      tampung.push(str[a])
      }
      for (var b = 0; b < str.length; b++) {
        tampung.sort()
      }
    return tampung
    }
    
    // TEST CASES
    console.log(urutkanAbjad('hello')); // 'ehllo'
    console.log(urutkanAbjad('truncate')); // 'acenrttu'
    console.log(urutkanAbjad('developer')); // 'deeeloprv'
    console.log(urutkanAbjad('software')); // 'aeforstw'
    console.log(urutkanAbjad('aegis')); // 'aegis'
    
    
    