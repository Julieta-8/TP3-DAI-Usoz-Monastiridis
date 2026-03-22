import fs from 'fs';

function buscarProducto(nombre) {
    const contenido = fs.readFileSync('./productos.json', 'utf-8');
    const productos = JSON.parse(contenido);

    const producto = productos.find(p => p.nombre === nombre);

    if (producto) {
        console.log(producto);
    } else {
        console.log("Producto no encontrado");
    }
}

buscarProducto("Mouse");
