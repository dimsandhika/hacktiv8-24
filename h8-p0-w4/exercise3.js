function cariMedian(arr) {
  var medianBaru = 0;
  
  if(arr.length % 2 === 0) {
    medianBaru = (arr[arr.length/2 - 1] + arr[arr.length/2])/2
  } else {
    medianBaru = arr[(arr.length - 1)/2]
  }
  return medianBaru
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5