// Tugas 1. Menyusun Barisan Bintang
var stars = ''
var rows1 = 1
var limit = 5

while(rows1 <= limit) {
  console.log('*')
  rows1++
}


//Tugas 2. Menyusun Barisan Bintang Dengan Nested Looping
var stars = ''
var rows2 = 1
var limit = 5
while(rows2++ <= limit) {
  stars = stars + '*'
}
console.log(stars)

var i = 1
while(i < limit) {
  console.log(stars)
  i++
}

//Tugas 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var stars = ''
var rows3 = 1
var limit = 5
var a = 1
while(rows3++ <= limit) {
  while(a++ <= limit) {
  stars = stars + '*'
  console.log(stars)
  }
 }

