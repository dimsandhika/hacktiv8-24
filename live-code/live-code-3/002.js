/**
Array Merge
-----------
Mishima Zaibatsu mempunyai 2 mata-mata untuk mencari nama orang yang berpotensi untuk mengalahkan
Heihachi Mishima dan mengambil alih perusahaan miliknya. 2 mata-mata ini mengerjakan tugasnya
dengan baik, tetapi ada saatnya kedua data yang diberikan memiliki duplikat (nama yang sama).
Implementasikan function arrayMerge untuk menggabungkan 2 data yang diberikan kepada
Mishima Zaibatsu dan jangan sampai terdapat nama yang sama di data yang sudah tergabung tadi.

Contoh:
- input: ['kazuya', 'jin', 'lee'], ['kazuya', 'feng']
  output: ['kazuya', 'jin', 'lee', 'feng']

- input: ['lee', 'jin'], ['kazuya', 'panda']
  output: ['lee', 'jin', 'kazuya', 'panda']
  
Aturan coding:
  DILARANG menggunakan built-in function:
  - .map()
  - .filter()
  - .reduce()
  - .concat()
  - .indexOf() / .lastIndexOf() / .includes()
  - .copyWithin()
*/

// PSEUDOCODE :
// STORE 'namaking' with value 0
// STORE 'namaDevilJin' with value 0
// STORE 'namaAkuma' with value 0
// STORE 'namaEddie' with value 0
// STORE 'namaSteve' with value 0
// STORE 'namaGeese' with value 0
// STORE 'namaSergei' with value 0
// STORE 'namaJin' with value 0
// STORE 'namaAlisa' with value 0
// STORE 'namaYoshimitsu' with value 0
// STORE 'namaLaw' with value 0
// STORE 'namaHwoarang' with value 0
//      ADD value by 1
// IF 'namaKing' equal 1
//      DISPLAY 'namaKing'


function arrayMerge(firstData, secondData) {
  var namaKing = 0
  var namaDevilJin = 0
  var namaAkuma = 0
  var namaEddie = 0
  var namaSteve = 0
  var namaGeese = 0
  var namaSergei = 0
  var namaJin = 0
  var namaAlisa = 0
  var namaYoshimitsu = 0
  var namaLaw = 0
  var namaHwoarang = 0
  var namaBryan = 0

  for (var i = 0; i < limit; i++) {
    if (firstData[i] === 'king' && secondData[i] === 'king') {
      namaKing = namaKing + 1
    } else if (firstData[i] === 'devil jin' && secondData[i] === 'devil jin') {
      namaDevilJin = namaDevilJin + 1
    } else if (firstData[i] === 'akuma' && secondData[i] === 'akuma') {
      namaAkuma = namaAkuma + 1
    } else if (firstData[i] === 'eddie' && secondData[i] === 'eddie') {
      namaEddie = namaEddie + 1
    } else if (firstData[i] === 'steve' && secondData[i] === 'steve') {
      namaSteve = namaSteve + 1
    } else if (firstData[i] === 'geese' && secondData[i] === 'geese') {
      namaGeese = namaGeese + 1
    } else if (firstData[i] === 'sergei' && secondData[i] === 'sergei') {
      namaSergei = namaSergei + 1
    } else if (firstData[i] === 'jin' && secondData[i] === 'jin') {
      namaJin = namaJin + 1
    } else if (firstData[i] === 'alisa' && secondData[i] === 'alisa') {
      namaAlisa = namaAlisa + 1
    } else if (firstData[i] === 'yoshimitsu' && secondData[i] === 'yoshimitsu') {
      namaYoshimitsu = namaYoshimitsu + 1
    } else if (firstData[i] === 'law' && secondData[i] === 'law') {
      namaLaw = namaLaw + 1
    } else if (firstData[i] === 'hwoarang' && secondData[i] === 'hwoarang') {
      namaHwoarang = namaHwoarang + 1
    } else if (firstData[i] === 'bryan' && secondData[i] === 'bryan') {
      namaBryan = namaBryan + 1
    }
  }
  if (namaKing === 1 && namaDevilJin === 1 && namaakuma === 1 && namaEddie === 1 && namaSteve === 1 && namaGeese === 1) {
    return 1
  } else if (namaSergei === 1 && namaJin === 1 && namaSteve === 1 && namaBryan === 1) {
    return 1
  } else if (namaAlisa === 1 && namaYoshimitsu === 1 && namaDevilJin === 1 && namaLaw === 1) {
    return 1
  } else if (namaDevilJin === 1 && namaSergei === 1) {
    return 1
  } else if (namaHwoarang === 1) {
  } else {
    return ''
  }
  } 


  // Test cases

  console.log(arrayMerge(['king', 'devil jin', 'akuma'], ['eddie', 'steve', 'geese']));
  // ['king', 'devil jin', 'akuma', 'eddie', 'steve', 'geese']

  console.log(arrayMerge(['sergei', 'jin'], ['jin', 'steve', 'bryan']));
  // ['sergei', 'jin', 'steve', 'bryan']

  console.log(arrayMerge(['alisa', 'yoshimitsu'], ['devil jin', 'yoshimitsu', 'alisa', 'law']));
  // ['alisa', 'yoshimitsu', 'devil jin', 'law']

  console.log(arrayMerge([], ['devil jin', 'sergei']));
  // ['devil jin', 'sergei']

  console.log(arrayMerge(['hwoarang'], []));
  // ['hwoarang']

  console.log(arrayMerge([], []));
// []
