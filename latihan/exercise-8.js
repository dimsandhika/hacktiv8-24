var input = [
    {
        nama: 'Alfa',
        match: 'indonesia vs philipin',
        area: 'tribun barat'
    },
    {
        nama: 'Beta',
        match: 'indonesia vs malaysia',
        area: 'tribun barat'
    },
    {
        nama: 'Charlie',
        match: 'indonesia vs malaysia',
        area: 'tribun timur'
    },
    {
        nama: 'Delta',
        match: 'indonesia vs philipin',
        area: 'tribun timur'
    },
    {
        nama: 'Enigma',
        match: 'indonesia vs philipin',
        area: 'tribun barat'
    },
]

var obj = {}
for (var i = 0; i < input.length; i++) {
obj[input[i].match] = {
  match: input[i].match,
  area: {}
}
}
// looping unik area
for (var i = 0; i < input.length; i++) {
    obj[input[i].match].area[[input[i].area]] = ''
}

// looping untuk tribun
for (var i = 0; i < input.length; i++) {
    obj[input[i].match].area[[input[i].area]] += input[i].nama + ' | '
}

console.log(obj)


