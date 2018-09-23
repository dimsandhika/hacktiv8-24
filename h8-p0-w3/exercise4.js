function dataHandling2() { // Penggunaan Splice

    var arr = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
    arr.splice(1, 1, "Roman Alamsyah Elsharawy") // Menghapus 1 nilai dari index 1, dan menambah 1 nilai yaitu "Roman Alamsyah Elsharawy" pada index 1
    arr.splice(2, 1, "Provinsi Bandar Lampung") // Menghapus 1 nilai dari index 2, dan menambah 1 nilai yaitu "Provinsi Bandar Lampung" pada index 2
    arr.splice(4, 1, "Pria", "SMA Internasional Metro") // Menghapus 1 nilai dari index 4, dan menambah 2 nilai yaitu " Pria" dan "SMA Internasional Metro"
    console.log(arr)

    var bulan = arr[3].split("/")
    var arrBaru = [];
    for (var a = 0; a <= bulan.length - 1; a++) {
        arrBaru.push(Number(bulan[a]));
        arrBaru.sort()
    }
    console.log(arrBaru)

    var bulan = arr[3].split("/")
    var arrSpasi = [];
    for (var a = 0; a <= bulan.length - 1; a++) {
        arrSpasi.push(Number(bulan[a]));
    }
    console.log(arrSpasi.join("-"))

    var arrBaru = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
    var index = arrBaru.slice(0, 2)
    console.log(index[1])


    switch (bulan[1]) {
        case '01':
            console.log('Januari')
            break;
        case '02':
            console.log('Februari')
            break;
        case '03':
            console.log('Maret')
            break;
        case '04':
            console.log('April')
            break;
        case '05':
            console.log('Mei')
            break;
        case '06':
            console.log('Juni')
            break;
        case '07':
            console.log('Juli')
            break;
        case '08':
            console.log('Agustus')
            break;
        case '09':
            console.log('September')
            break;
        case '10':
            console.log('Oktober')
            break;
        case '11':
            console.log('November')
            break;
        case '12':
            console.log('Desember')
            break;

    }
}


console.log(dataHandling2(["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]))
console.log(dataHandling2('Mei'))


