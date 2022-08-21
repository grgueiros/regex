// . ? * + - ^ $ | [ ] { } ( ) \ :
const texto = '1,2,3,4,5,6,a.b c!d?e'
const regexPonto = /\./

console.log(texto.match(regexPonto))
console.log(texto.split(/,|\.| |!|\?/))