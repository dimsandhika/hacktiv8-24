    function changePassword(password) {
        var result = ''
        for (var i = 0; i < password.length; i++) {
          if (i % 2 !== 0 && password[i+2] !== undefined) {
            result += password[i+2] + password[i+1] + password[i]
            i=i+2
          } 
          else {
            result += password[i]
          }
        }
        return result
        }
        console.log(changePassword('password2'))
        console.log(changePassword('0123456'))