/*
Absolute Winner!

Pada sebuah turnamen ada 3 orang yang berkompetisi untuk menjadi juara utama.
Apabila jumlah 'Bakugo' dalam array lebih besar dari jumlah 'Midoriya' dan 'Todoroki', maka function akan mereturn "Bakugo won the tournament!".
Apabila jumlah 'Midoriya' dalam array lebih besar dari jumlah 'Bakugo' dan 'Todoroki', maka function akan mereturn "Midoriya won the tournament!".
Apabila jumlah 'Todoroki' dalam array lebih besar dari jumlah 'Bakugo' dan 'Midoriya', maka function akan mereturn "Todoroki won the tournament!".
Apabila ada jumlah yang sama dan jumlah tersebut merupakan jumlah terbesar, tampilkan "There are no clear winner!";


[RULE]
- Wajib menuliskan algoritma/pseudocode. Tidak ada algoritma / algoritma tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .filter, atau .reduce!
*/

// ALGORITHMA :
// 1. buat variable pemenang
// 2. hitung panjang dari setiap kalimat
// 3. lakukan kondisi untuk mengetahui pemenang

// PSEUDOCODE :
// STORE "jumlahBakugo" with value 0
// STORE "jumlahMidoriya" with value 0
// STORE "jumlahTodoroki" with value 0
//    ADD "jumlahBakugo" by 1
//    ADD "jumlahMidoriya" by 1
//    ADD "jumlahTodoroki" by 1
// IF "jumlahBakugo" > "jumlahBakugo" > "jumlahBakugo"
//    DISPLAY "Bakugo won the tournament!"
// ELSE IF "jumlahTodorki" > "jumlahTodoroki" > "jumlahBakugo" > "jumlahMidoriya"
//    DISPLAY "Todoroki won the tournament!"
// ELSE IF "jumlahMidoriya"
//    DISPLAY "Midoriya won the tournament"
// ELSE
//    DISPLAY "there are no clear winners!"


function absoluteWinner(winners) {

  var jumlahBakugo = 0;
  var jumlahMidoriya = 0;
  var jumlahTodoroki = 0;

  for (var i = 0; i < winners.length; i++) {
    if (winners[i] === 'Bakugo') {
      jumlahBakugo = jumlahBakugo + 1
    } else if (winners[i] === 'Midoriya') {
      jumlahMidoriya = jumlahMidoriya + 1
    } else if (winners[i] === 'Todoroki') {
      jumlahTodoroki = jumlahTodoroki + 1
    }
  }
  if (jumlahBakugo > jumlahBakugo > jumlahMidoriya) {
    return "Bakugo won the tournament!"
  } else if (jumlah Todoroki > jumlahTodoroki > jumlahBakugo > jumlahMidoriya) {
    return "Todoroki won the tournament!"
  } else if (jumlahMidoriya) {
    return "Midoriya won the tournament!"
  } else {
    return "There are no clear winners!"
  }
  }
console.log(absoluteWinner(['Bakugo', 'Bakugo', 'Midoriya'])); // "Bakugo won the tournament!"
console.log(absoluteWinner(['Todoroki', 'Bakugo', 'Midoriya', 'Todoroki'])); // "Todoroki won the tournament!"
console.log(absoluteWinner(['Midoriya', 'Midoriya', 'Midoriya'])); // "Midoriya won the tournament!"
console.log(absoluteWinner(['Bakugo'])); // "Bakugo won the tournament!"
console.log(absoluteWinner([])); // "There are no clear winner!"
