function shoppingTime(memberId, money) {
    var sisa = money
    var daftar = []
    var limit = 5;
    
    for (var i = 0; i < limit; i++) {
      if (sisa >= 1500000) {
        daftar.push('Sepatu brand Stacattu')
        sisa -= 1500000
      } else if (sisa >= 500000) {
        daftar.push('Baju brand Zoro')
        sisa -= 500000
      } else if (sisa >= 250000) {
        daftar.push('Baju brand H&N')
        sisa -= 250000
      } else if (sisa >= 175000) {
        daftar.push('Baju brand Uniklooh')
        sisa -= 175000
      } else if (sisa >= 50000) {
        daftar.push('Casing Handphone')
        sisa -= 50000
        break
      }
    }
    
    var objProduk = {}
      objProduk.memberId = memberId
      objProduk.money = money
      objProduk.listPurchased = daftar
      objProduk.changeMoney = sisa
    
    if (memberId === '' || memberId === undefined) {
    return "Mohon maaf, toko X hanya berlaku untuk member saja"
    } else if (money <= 50000) {
      return "Mohon maaf, uang tidak cukup"
    }
    return objProduk
    }
    
    // TEST CASES
    console.log(shoppingTime('1820RzKrnWn08', 2475000));
      //{ memberId: '1820RzKrnWn08',
      // money: 2475000,
      // listPurchased:
      //  [ 'Sepatu Stacattu',
      //    'Baju Zoro',
      //    'Baju H&N',
      //    'Sweater Uniklooh',
      //    'Casing Handphone' ],
      // changeMoney: 0 }
    console.log(shoppingTime('82Ku8Ma742', 170000));
    //{ memberId: '82Ku8Ma742',
    // money: 170000,
    // listPurchased:
    //  [ 'Casing Handphone' ],
    // changeMoney: 120000 }
    console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
    console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
    console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja