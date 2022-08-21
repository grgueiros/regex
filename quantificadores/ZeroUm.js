const texto1 = "De longe eu avistei o fogo e uma pessoa gritava: FOGOOOOOO!";
const texto2 = "There is a big fog in NYC";

// ? -> opcional (ocorre 0 ou uma vez)
const regex = /fogo?/gi;
console.log(texto1.match(regex));
console.log(texto2.match(regex));
