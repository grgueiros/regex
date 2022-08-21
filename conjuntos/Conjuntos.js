const texto = '1,2,3,4,5,6,a.b c!d?e[f'

const regexPares = /[02468]/g
console.log(texto.match(regexPares))

const texto2 = 'João não vai passear na casa da avó'
console.log(texto2.match(/n[aã]/g))
