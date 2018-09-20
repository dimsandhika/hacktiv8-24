function hitungAB(kata) {
    if (kata.length === 0) {
    return 0
    } else {
      if (kata[0]+kata[1] === 'ab') {
      return 1 + hitungAB(kata.slice(2))
    } else {
      return 0 + hitungAB(kata.slice(1))
  }
  }
  }
  console.log('abcdefgabcdefg') // 2
  console.log('abcdabcdabcd') // 3