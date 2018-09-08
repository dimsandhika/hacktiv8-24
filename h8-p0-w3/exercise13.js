// Logic Challenge - Target Terdekat
function targetTerdekat(arr) {
    // you can only write your code here!
    var a = 0;
    var b = 0;
    var tampung = 0;
    var arrX = [];
    
    if(arr.indexOf('x') === -1){
      return 0;
    }
    else{
      for(var i = 0; i < arr.length; i++){
        if(arr[i] === 'x'){
          a = i;
          arrX.push(a);
        }
        else if(arr[i] === 'o'){
          b = i;
        }
        var hasil = [];
        for(var j = 0; j < arr.length; j++){
          tampung = Math.abs(b - arrX[j]);
          hasil.push(tampung);
          hasil.sort();
        }
      }
      return hasil[0]; 
    }
  }
  
  // TEST CASES
  console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
  console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
  console.log(targetTerdekat(['', '', 'o', ''])); // 0
  console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2