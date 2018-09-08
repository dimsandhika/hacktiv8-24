function konversiMenit(menit) {
    var seconds = menit % 60;
    var minutes = (menit - seconds)/60;
    if (String(seconds).length === 1){
       return minutes+':'+'0'+seconds;
    } else {
    return minutes+':'+seconds;
    }
    
  }
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00