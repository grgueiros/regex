const texto = "ABC [abc] a-c 1234";

console.log(texto.match(/[a-c]/g));
console.log(texto.match(/[A-z]/g)); //traz também os colchetes, intervalos seguem a tabela UNICODE
