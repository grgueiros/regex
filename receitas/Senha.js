const texto = `
123456
cod3r
QUASE123!
#OpA1
Foi123a
#essaSenhaEGrannde1234

#OpA1?
Foi123!
`;

console.log(texto.match(/^.{6,20}$/gm));
console.log(texto.match(/^(?=.*[A-z]).{6,20}$/gm));
console.log(texto.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$%!^&*]).{6,20}$/gm));
