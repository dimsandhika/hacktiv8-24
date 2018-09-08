//  Logic Challenge - Number Palindrome
function angkaPalindrome(num) {
    for (var a = 0; a < num; a++) {
         num++

         var numString = String(num);
         var len = numString.length;
         var string = '';
         for(var i = numString.length - 1; i >= 0; i--) {
         string+=numString[i]
    }
    if(numString === string) {
        return num
    }
}
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001