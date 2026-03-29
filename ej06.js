const fs = require("fs");
const cont = fs.readFileSync("productos.json", "utf-8");
const productos = JSON.parse(cont);

let csv = 'nombre,precio';
productos.forEach(p => {
  csv += `${p.nombre},${p.precio}`;
});
fs.writeFileSync('./productos.csv', csv);

console.log("CSV creado");