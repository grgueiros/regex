// DENTRO DE UM CONJUNTO, METACARACTERES NÃO PRECISAM SER ESCAPADOS (JÁ SÃO INTERPRETADOS COMO LITERAIS)

const texto = ".$+*?-";

console.log(texto.match(/[.]/g));
console.log(texto.match(/[$-?]/g));
