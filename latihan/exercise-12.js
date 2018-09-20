var user = []

function doRegister(login, password, repassword) {
var allowWord = 'abcdefghijklmnopqrstuvwxyz'
var allowWord += allowWord.toUpperCase() + '0123456789'
var cekLogin = ''
for (var i = 0; i < login.length; i++) {
  for (var j = 0; j < allowWord; j++) {
    if (login[i] === allowWord[j]) {
      cekLogin+=allowWord[j]
    }
      
    }
  }
}
  if (cekLogin !== login) {
     cekLogin = 'login hanya boleh alfanumerik'
     console.log(cekLogin)
    