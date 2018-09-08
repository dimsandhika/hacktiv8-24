// Logic Challenge - Mengelompokkan Angka
function mengelompokkanAngka(arr) {
    var hasil = [];

    for (var a = 0; a < 3; a++) {
        hasil.push([])
    }

    for (var b = 0; b < arr.length; b++) { 
        if(arr[b] % 2 === 0) {
            hasil[0].push(arr[b])
        } else if(arr[b] % 3 === 0) {
            hasil[1].push(arr[b])
        } else {
            hasil[2].push(arr[b])
        }
    }
    return hasil
}
 

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]