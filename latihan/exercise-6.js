function array(data) {
    var objKata = {}
    var huruf = null
    var max = 1

    for (var i = 0; i < data.length; i++) {
        // ? key du obj udah ada belum
        if (objKata[data[i]] === undefined) {
            objKata[data[i]] = 1
        } else {
            // ! key sudah ada
            objKata[data[i]] += 1
        }
    }
    return objKata
}
// test
console.log(array('hachacktiiv88888'))