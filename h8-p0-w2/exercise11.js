//Logic Challenge - Balik Kata
function balikKata(kata) {
    var kataBaru = '';
    
    for (var a = kata.length -1; a >= 0; a --){
      
      kataBaru += kata[a];
    
    }
    
    return kataBaru;
    
  }
    
    // TEST CASES
    console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
    console.log(balikKata('John Doe')); // eoD nhoJ
    console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
    console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
    console.log(balikKata('Super')); // repuS
  