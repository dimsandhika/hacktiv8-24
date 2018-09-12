function cariModus(arr) {
  var tampung = 0;
  var angka = 0;
  
  for (var a = 0; a < arr.length; a++) {
   for (var b = 0; b < arr.length; b++) {
     if (arr[a] === arr[b] && a !== b) {
       angka++
       tampung = arr[a]
     } else if (angka > tampung) {
       tampung = -1
     } else if (angka === 0) {
       tampung = -1
     }
   }
  }
  return tampung
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1