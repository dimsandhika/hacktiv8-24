function hitungHuruf(kata) {
    var tampung = []

    for (var a = 0; a < kata.length; a++) {
        tampung.push(kata[a])
    }
    return tampung
}
  
  // TEST CASES
  console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
  console.log(hitungHuruf('I am a passionate developer')); // passionate
  console.log(hitungHuruf('aku adalah anak gembala')); // adalah
  console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
  console.log(hitungHuruf('mengayuh perahu di danau')); // danau