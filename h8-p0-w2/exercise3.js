var nama = 'Dimas'
var peran = 'Penyihir'

if (nama === '') {
  console.log("Nama tidak boleh kosong. Pilih peranmu untuk memulai game.");
} else if (peran === '') {
  console.log("Peran tidak boleh kosong");
} else if (peran === 'Ksatria') {
  console.log("Selamat datang di Dunia Proxytia, " + nama + "." + " Halo " + peran + " " + nama + "," + " kamu dapat menyerang dengan senjatamu!")
} else if (peran === 'Tabib') {
  console.log("Selamat datang di Dunia Proxytia, " + nama + "." + " Halo " + peran + " " + nama + "," + " kamu akan membantu temanmu yang terluka.")
} else if (peran === 'Penyihir') {
  console.log("Selamat datang di Dunia Proxytia, " + nama + "." + " Halo " + peran + " " + nama + "," + " ciptakan keajaiban yang membantu kemenanganmu!")
}

