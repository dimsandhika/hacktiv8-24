function balikString(input) {
    var output = '';
  
    for(var a = input.length-1; a >= 0; a--) {
      output+=input[a]
    }
    return output
  }
  
  console.log(balikString("hello world!"))

