// Logic Challenge - Mengelompokan Hewan
// ALGORITHMA :
// 1. Mengosongkan dulu array
// 2. Melakukan looping pertama
// 3. Membuat array sesuai dengan susunan kata di awal kalimat
// 4. menghilangkan kancil

function groupAnimals(animals) {
    var hasilAkhir = [];

    for (var i = 0; i < animals.length; i++) {

        var animalA = []
        var animalC = []
        var animalK = []
        var animalU = []

        for (var i = 0; i < animals.length; i++) {
            if (animals[i][0] === 'u') {
                animalU.push(animals[i]);
            } else if (animals[i][0] === 'a') {
                animalA.push(animals[i]);
            } else if (animals[i][0] === 'c') {
                animalC.push(animals[i]);
            } else if (animals[i][0] === 'k' && animals[i][1] === 'u') {
                animalK.push(animals[i]);
            }
        }
    }

    hasilAkhir.push(animalA);
    hasilAkhir.push(animalC);
    hasilAkhir.push(animalK);
    hasilAkhir.push(animalU);
    return hasilAkhir
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]