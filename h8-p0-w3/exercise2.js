function balikString(arr) {
    var kataBaru = ''; // buat "variable output dengan nilai"
  
    for(var a = arr.length-1; a >= 0; a--) { // hitung panjang dari kalimat
      kataBaru+=arr[a] // cek apakah "variable output" sama dengan "variable input"
    }
    return kataBaru // lakukan pemanggilan kembali terhadap kalimat
  }
  
  console.log(balikString("hello world!"))

