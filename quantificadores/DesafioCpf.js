const texto = `
CPF dos aprovados:
  - 182.147.290-09
  - 770.934.930-76
  - 405.340.970-57
`;

const regex = /\d{3}\.\d{3}\.\d{3}-\d{2}/g;
console.log(texto.match(regex))
