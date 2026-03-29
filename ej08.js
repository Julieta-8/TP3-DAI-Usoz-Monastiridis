function analizarTexto(texto) {

const caractrer= texto.lenght
const palabras= split(" ").length;
 let vocales = 0;
  let consonantes = 0;
  for (let letra of texto) {
    if ("aeiouAEIOU".includes(letra)) {
      vocales++;
    } else if ("bcdfghjklmnñpqrstvwxyz".includes(letra)) {
      consonantes++;
    }}
    
  return { caracteres, palabras,vocales,consonantes };
}

console.log(analizarTexto("Hola mundo"));