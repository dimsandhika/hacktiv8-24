function changeVocals (str) {
    str = str.split('a').join('b')
    str = str.split('i').join('j')
    str = str.split('u').join('v')
    str = str.split('e').join('f')
    str = str.split('o').join('p')
    str = str.split('A').join('B')
    str = str.split('I').join('J')
    str = str.split('U').join('V')
    str = str.split('E').join('F')
    str = str.split('O').join('P')
    return str
    }
  
  function reverseWord (str) {
  var kataString = str.split("")
  var arrayBaru = kataString.reverse()
  var arrayJoin = arrayBaru.join("")
  return arrayJoin
  }
  
  function setLowerUpperCase (str) {
  var kata = ''
  
  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      kata+=str[i].toLowerCase()
    } else {
      kata+=str[i].toUpperCase()
    }
  }
  return kata
  }
  
  function removeSpaces (str) {
  return str.replace(/\s/g,'')
  }
  
  function passwordGenerator (name) {
  if (name.length < 5 || name === undefined) {
    return "Minimal karakter yang diinputkan adalah 5 karakter"
  } else {
    var gantiHuruf = changeVocals(name)
    var balikKata = reverseWord(gantiHuruf)
    var hurufKecil = setLowerUpperCase(balikKata)
    var menghilangkanSpasi = removeSpaces(hurufKecil)
    return menghilangkanSpasi
  }
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'