const texto1 = 'O José Simão é muito engraçado.... hehehehe'

const texto2 = 'http://www.site.info www.escola.ninja.br google.com.ag'

console.log(texto1.match(/(he)+/gi))
console.log(texto2.match(/(http(s)?:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/gi))