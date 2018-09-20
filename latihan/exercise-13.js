    /**
Graduates Count
Implementasikan function graduatesCount untuk menampilkan berapa orang yang lulus berdasarkan
data nilai yang diberikan (`scores`) dengan aturan jika nilai lebih besar atau sama dengan 75
maka orang itu dinyatakan lulus.
Contoh:
- input: [70, 85, 65, 90]
  output: 2 orang lulus

  output no 2:
  [
    [85, 90],
    [70, 65]
  ]

  output no 3
  {
    lulus: '2 orang',
    tidakLulus: '2 orang'
  }
  
- input: [0, 65, 30, 74]
  output: Tidak ada yang lulus

  [
    [],
    [0, 65, 30, 74]
  ]

  {
    lulus: 'tidak ada yang lulus',
    tidakLulus: '4 orang'
  }
  
- input: [90, 100, 76, 85]
  output: Semua lulus

  [
    [90, 100, 76, 85],
    []
  ]

  {
    lulus: '4 orang',
    tidakLulus: 'Semua lulus'
  }
  
- input: []
  output: Data kosong
Aturan coding:
Dilarang menggunakan built-in function:
- .map()
- .filter()
- .reduce()
*/

function graduatesCount (scores) {
    var output = []
    
    
    for (var i = 0; i < 2; i++) {
        output.push([])
      }
      for (var i = 0; < scores.length; i++) {
        if (scores[i] >= 70)
        ouput[0].push(scores[i])
        output[1].push(scores[i])
      } else {
        output[0].push(scores[i])
      }
    }
    return output
    }
     
    console.log(graduatesCount([70, 85, 65, 90])) // 2 orang lulus
    console.log(graduatesCount([0, 65, 30, 74])) // Tidak ada yang lulus
    console.log(graduatesCount([90, 100, 76, 85])) // Semua lulus
    console.log(graduatesCount([]))


// case 1
function graduatesCount (scores) {
    var angka = 75
    var jumlahLulus = 0
    
    if (scores.length == 0) {
      return 'Data kosong'
    }
    for (var i = 0; i < scores.length; i++) {
      if (scores[i] >= 75) {
        jumlahLulus++
      }
    }
    if (jumlahLulus == 0) {
      return 'Tidak ada yang lulus'
    } else if (jumlahLulus == scores.length) {
      return 'Semua lulus'
    } else {
      return jumlahLulus + ' orang lulus'
    }
    return jumlahLulus
    }
    
    console.log(graduatesCount([70, 85, 65, 90])) // 2 orang lulus
    console.log(graduatesCount([0, 65, 30, 74])) // Tidak ada yang lulus
    console.log(graduatesCount([90, 100, 76, 85])) // Semua lulus
    console.log(graduatesCount([]))



    function namaOrang(words) {
  
        var kata = '';
        var katas = [];
        var jumlahKata = 0;
        
        for (var i = 0; i < words.length; i++) {
          if (words[i] === '' || i === words.length -1) {
            if (i === words.length -1) {
              kata += words[i]
            }
            jumlahKata++
            katas.push(kata); ['yosephine']
            kata = ''
          } else {
            kata += words[i]
          }
        }
        return katas
        }
        console.log(namaOrang('katak dalam tempurung sedang berada di makam'))