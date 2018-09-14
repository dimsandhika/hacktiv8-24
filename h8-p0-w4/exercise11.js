function changeMe(arr) {

    var myObj = {}
    var fullName = '';
    var no = 0;

    for (var a = 0; a < arr.length; a++) {
        no++
        fullName = arr[a][0] + ' ' + arr[a][1]
        myObj.firstName = arr[a][0]
        myObj.lastName = arr[a][1]
        myObj.gender = arr[a][2]
        if (arr[a][3] === undefined) {
            myObj.age = 'Invalid Birth Year'
        } else {
            myObj.age = 2018 - arr[a][3]
    }
    console.log(no + '. ' + fullName + ':')    
    console.log(myObj)
    }
}

console.log(changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]))



