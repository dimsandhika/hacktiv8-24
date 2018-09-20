function mendaliAsianGames(array) {
    var obj = {}
    var max = 1

    for (var i = 0; i < array.length; i++) {
        var negara = array[i][0]
        var medali = array[i][1]
        // ? cek apakah negara udah ada atau belum
        if (obj.Indonesia === undefined) {
            obj.Indonesia = {
                negara: negara,
                emas: 0,
                perak: 0,
                perunggu: 0,
            }
        } 
        obj[[negara][medali]] += 1
    }
    return Object.values(obj)
}

console.log(mendaliAsianGames([
    ['Indonesia', 'emas'],
    ['India', 'perak'],
    ['Korea Selatan', 'emas'],
    ['India', 'perak'],
    ['India', 'emas'],
    ['Indonesia', 'perak'],
    ['Indonesia', 'emas'],
]));
/*
[ { negara: 'Indonesia', emas: 2, perak: 1, perunggu = 0 },
  { negara: 'India', emas: 1, perak: 2, perunggu = 0 },
  { negara: 'Korea Selatan', emas: 1, perak: 0, perunggu = 0 } ]
  */

