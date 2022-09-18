const texto = `
Bianca é casada com Habib
Leo é muito legal
Emanuel foi jogar em Sergipe
`;

console.log(texto.match(/^(\w).+\1$/gi)); //problema do \n
console.log(texto.match(/^(\w).+\1$/gim)); //multiline resolve
