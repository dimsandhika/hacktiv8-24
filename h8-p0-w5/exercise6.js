function meleeRangedGrouping(str) {
  str = str + ","
  var kataBaru = ''
  var kataBaru2 = ''
  var arrHero = []
  var arrTipe = []
  var arrHasil = [[],[]]

  for (var i = 0; i < str.length; i++) {
    if (str[i] !== ",") {
      kataBaru += str[i]
    } else {
      arrHero.push(kataBaru)
      kataBaru = ''
    }
  }

  for (var j = 0; j < arrHero.length; j++) {
    arrTipe.push([])
    for (var k = 0; k < arrHero[j].length; k++) {
      if (arrHero[j][k] === "-") {
        arrTipe[j].push(kataBaru2)
        kataBaru2 = ''
      } else if (k === arrHero[j].length - 1) {
        arrTipe[j].push(kataBaru2)
        kataBaru2 = ''
      } else {
        kataBaru2+= arrHero[j][k]
      }
    }
  }
  for (var l = 0; l < arrTipe.length; l++) {
    for (var m = 0; m < arrTipe[l].length; m++) {
      if (arrTipe[l][m] === "Range") {
        arrHasil[0].push(arrTipe[l][0])
      } if (arrTipe[l][m] === "Mele") {
        arrHasil[1].push(arrTipe[l][0])
      }
      }
      if (str.length === 1) {
        return []
      }
  }
  return arrHasil
}

// TEST CASE
console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []