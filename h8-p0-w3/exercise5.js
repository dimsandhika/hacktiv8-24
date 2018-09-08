// Logic Challenge - Palindrome
function palindrome(kata) {
    var kataBaru = '';

    for (var a = kata.length-1; a >= 0; a--) {
        kataBaru += kata[a]
    }
    if ((kataBaru) === kata) {
        return true
    } else {
        return false
    }
}





// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false