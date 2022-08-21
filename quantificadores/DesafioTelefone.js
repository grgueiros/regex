const texto = `
Lista Telefônica:
  - (21) 97984-8294
  - 98121-6146
  - (42) 3522-7959
  - (32) 9 7984-8294
`;

const regex = /(?<ddd>\(\d{2}\))*\s*(?<phone>(\d{1})?\d{4}-\d{4})/g;
console.log(texto.match(regex));
