const aplicarCor = (txt, reg, cor) =>
  txt.replace(
    reg,
    `<span style="color: #${cor}"><b>$<highlightText></b></span>`
  );

const files = require("./files");
const texto = files.read("codigofonte.html");

const codeRegex = /<code>[\S\s]*<\/code>/i;
let codigo = texto.match(codeRegex)[0];

codigo = aplicarCor(codigo, /(?<highlightText>".*")/g, "ce9178");

// palavras reservadas
codigo = aplicarCor(
  codigo,
  /\b(?<highlightText>package|if|else|static|public|class)\b/g,
  "d857cf"
);

// tipos
codigo = aplicarCor(codigo, /\b(?<highlightText>void|int)\b/g, "1385e2");

// comentários de múltiplas linhas
codigo = aplicarCor(codigo, /(?<highlightText>\/\*[\S\s]*\*\/)/g, "267703");

codigo = aplicarCor(codigo, /(?<highlightText>\/\/.*)/g, "267703");

const conteudoFinal = texto.replace(codeRegex, codigo);

files.write("codigofonte.html", conteudoFinal);
