function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var hasilPerkalian= 0;
  var faktorAngka;
  var arr = [];
  var arrSlice= [];
  var minimum = '';
  
  for (var i = 0; i <= angka; i ++) {
    for (var j = 0; j <= angka; j ++) {
      var tes = i + '-' + j;
      hasilPerkalian= i*j;
      if (hasilPerkalian === angka) {
        faktorAngka = String(i) + String(j);
        arr.push(faktorAngka);
        arrSlice = arr.slice(Math.round(arr.length/2-1),Math.round(arr.length/2));
        minimum = arrSlice[0];
      }
    }
  }
  return minimum.length;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2