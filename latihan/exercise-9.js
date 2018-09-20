function changePassword(password) {
    var result = ''
    for (var i = 0; i < password.length; i++) {
      if (i % 4 == 0 && password[i+3] !== undefined) {
        result += password[i+3] + password[i+1] + password[i+2] + password[i]
        i=i+3
    } 
    else {
      result += password[i]
    }
    }
    return result
    }
    console.log(changePassword('0123456789'))