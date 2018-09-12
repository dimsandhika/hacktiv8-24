function ubahHuruf(kata) {

    var tampung = '';
      
    for(var a = 0; a < kata.length; a++){
    var index = kata.charCodeAt(a);
    tampung += String.fromCharCode(index + 1); 
    }
    return tampung; 
    }
    
    // TEST CASES
    console.log(ubahHuruf('wow')); // xpx
    console.log(ubahHuruf('developer')); // efwfmpqfs
    console.log(ubahHuruf('javascript')); // kbwbtdsjqu
    console.log(ubahHuruf('keren')); // lfsfo
    console.log(ubahHuruf('semangat')); // tfnbohbu