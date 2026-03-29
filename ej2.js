import fs from 'fs';
function agregarProducto(nombre, precio) {
        const contenido = fs.readFileSync('./productos.json', 'utf-8');
        const productos = JSON.parse(contenido);
  const nuevoProducto = { nombre, precio };
  productos.push(nuevoProducto);
  fs.writeFileSync('./productos.json', "utf-8");
  console.log("Producto agregado");
}

agregarProducto("Monitor", 120000);