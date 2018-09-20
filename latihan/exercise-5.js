function array(datas) {
  var tampung = []

  for (var i = 0; i < datas.length; i++) {
    var cek = true
    for (var j = 0; j < tampung.length; j++) {
      if (datas[i] === tampung[j]) {
        cek = false
      }
    }
    if (cek === true) {
      tampung.push(datas[i])
    }
  }
  return tampung
}
console.log(array([1, 2, 3, 4, 6, 7, 2, 3, 4, 2, 3, 5, 1]))