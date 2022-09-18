const texto1 = "<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>";

console.log(texto1.match(/<(\w+)>[\S\s]*<\/\1>/gi));
const { groups } = /(?<tag><(?<tagContent>\w+)>)[\S\s]*(?<closing>(<\/\k<tagContent>>))/gi.exec(texto1);

console.log(groups);
