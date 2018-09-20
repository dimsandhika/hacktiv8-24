function array(data) {
  var objKata = {}

  for (var i = 0; i < data.length; i++) {
    if (objKata[data[i]] === undefined) {
      objKata[data[i]] = 1
    } else {
      objKata[data[i]] += 1
    }
  }
  return objKata
}
console.log(array([1, 2, 3, 4, 6, 7, 2, 3, 4, 2, 3, 5, 1]))
// console.log(array(['david', 'edward', 'eddire']))