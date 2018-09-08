/**

Buatlah sebuah ALGORITMA/PSEUDOCODE untuk kasus berikut:

Seorang anak memiliki uang sejumlah Rp.X (jumlah uang fleksibel)
Dia akan mengunjungi sebuah toko mainan dan akan membeli mainan yang diinginkannya.
Anak ini hanya akan membeli satu mainan saja dan akan membeli harga mainan paling mahal dari uang yang dimilikinya.

Berikut beberapa mainan dan harga yang ada pada daftar anak tersebut:
 - Rubik 3x3 => Rp35.000
 - Tamiya Mini 4wd => Rp185.000
 - Robot Star Wars => Rp350.000

Tampilkan mainan apa yang bisa dibeli oleh anak tersebut dan berapa jumlah kembaliannya.
Jika uang anak tidak mencukupi satupun dari permainan tersebut, maka tampilkan "Nabung lagi ya, dek!"

**/

Algorithma :
1. Simpan mainan "Rubik 3x3" dengan nilai 35.000
2. Simpan mainan "Tamiya Mini 4wd" dengan nilai 185.000
3. Simpan mainan "Robot Star Wars" dengan nilai 350.000
4. Jika "Rubix 3x3" habis di bagi 35.000 sehingga modulus 0, jika "Tamiya Mini 4wd" habis di bagi 185.000 sehingga modulus 0 dan jika "Robot Star Wars" habis di bagi 350.000 sehingga modulus 0
5. Jika uang mencukupi maka "Mainan bisa di beli"
6. Jika uang tidak mencukupi maka "Nabung lagi ya, dek!"


Pseudocode :
IF "Rubik 3x3" mod 35.000 equal to 0 THEN 
   IF "Tamiya Mini 4wd" mod 185.000 equal to 0 THEN
   IF "Robot Star Wars" mod 350.000 equal to 0
      DISPLAY "mainan bisa di beli"
   ELSE 
      DISPLAY "Nabung lagi ya, dek!"
