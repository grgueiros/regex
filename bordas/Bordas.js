const texto =
  "Romario era um excelente jogador\n mas agora é um político questionador";

console.log(texto.match(/r/gi));
console.log(texto.match(/^r/gi));
console.log(texto.match(/r$/gi));
console.log(texto.match(/^r.*r$/gi)) //problema do dotall
