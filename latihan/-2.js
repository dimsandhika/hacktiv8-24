// [INSTRUKSI]
// Seorang perempuan sedang menggalaui apakah seseorang menyukai dia atau tidak.Ketimbang mencabut kelopak bunga untuk menghitung jika dia suka atau tidak, perempuan tersebut membuat sebuah program.
// Function loveMeNot akan menerima satu parameter berupa array yang berisikan boolean.
// Apabila jumlah true dalam array lebih besar dari jumlah false, maka function akan mereturn "HE LOVES ME!".Jika tidak, maka return "HE DOES NOT LOVE ME :(".
// Jika jumlah true dan false sama, maka function akan me -return "GALAU".
// Mudah bukan ? :)
// [RULE]
//   - Wajib menuliskan pseudocode.Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
// - Dilarang menggunakan Regex(.match, .test, dan sebagainya)
//   - Dilarang menggunakan method.filter, atau.reduce!
//     * /

// PSEUDOCODE :
// STORE 'apakahBenar' with value 0
// STORE 'apakahSalah' with value 0
//     ADD value by 1
// IF apakahBenar < apakahSalah
//     DISPLAY "HE DOES LOVE ME NOT" 
// IF apakahBenar > apakahSalah
//     DISPLAY "HE LOVES ME"
// IF apakahBenar = apakahSalah
//     DISPLAY "GALAU"



function loveMeNot(decisions) {
  var apakahBenar = 0
  var apakahSalah = 0

  for (var a = 0; a < decisions.length; a++) {
    if (decisions[a] === true) {
      apakahBenar = apakahBenar + 1
    } else if (decisions[a] === false) {
      apakahSalah = apakahSalah + 1
    }
  }
  if (apakahBenar < apakahSalah) {
    return "HE DOES NOT LOVE ME : ("
  } else if (apakahBenar > apakahSalah) {
    return "HE LOVES ME!"
  } else if (apakahBenar === apakahSalah) {
    return "GALAU"
  }
}

// TEST CASES
console.log(loveMeNot([true, false, false])); // "HE DOES NOT LOVE ME :("
console.log(loveMeNot([true, true, false, false, true])); // "HE LOVES ME!"
console.log(loveMeNot([true, false])); // "GALAU"
console.log(loveMeNot([])); // "GALAU"
console.log(loveMeNot([false])); // "HE DOES NOT LOVE ME :("