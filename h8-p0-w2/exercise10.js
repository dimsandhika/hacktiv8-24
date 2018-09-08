// Logic Challenge - Bandingkan Angka
var kataBaru = '';

function palindrome(kata) {
  for(var a = kata.length; a >= 0; a--) {
    kataBaru+=kata[a]
  }
  return kataBaru
}

// TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false
