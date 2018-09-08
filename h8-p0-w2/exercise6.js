// Tugas 1. Melakukan Looping Menggunakan While
console.log('LOPPING PERTAMA')
var a = 2
var limit = 20

while(a <= 20) {
  console.log(a + ' - I love coding') // Looping pertama
  a+=2
}

console.log('LOOPING KEDUA')
var b = 20
var limit = 2

while(b >= 2) {
  console.log(b + ' - I will become fullstack developer') // Looping kedua
  b-=2
}

//Tugas 2. Melakukan Looping Menggunakan For
console.log('LOOPING PERTAMA')
for(var a = 1; a <= 20; a++) {
  console.log(a + ' - I love coding'); // Looping Pertama
}

console.log('LOOPING KEDUA')
for(var a = 20; a >= 1; a--) {
  console.log(a + ' - I will become fullstack developer'); // Loooping Kedua
}

// Tugas 3. Angka ganjil genap
var a = 1
var limit = 100

while(a <= 100) {
  if(a % 2 == 0) {console.log('Genap')} //Ganjil - Genap
else {console.log('Ganjil')}
  a+=1
} 


for(var a = 1; a <= 100; a+=2) {
  if(a % 3 === 0) {
    console.log(a + " 3 KELIPATAN " + 3) // kelipatan 3 pertambahan 2
  } else {
    console.log(a + " - ")
  }
}

 
for(var a = 1; a <= 100; a+=5) {
  if(a % 6 === 0) {
    console.log(a + " 6 KELIPATAN " + 6) // kelipatan 6 pertambahan 5
  } else {
    console.log(a + " - ")
  }
}


for(var a = 1; a <= 100; a+=9) {
  if(a % 10 === 0) {
    console.log(a + " 10 KELIPATAN " + 10) // kelipatan 10 pertambahan 9
  } else {
    console.log(a + " - ")
  }
}