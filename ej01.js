import fs from 'fs';

function LeerObj(){

             const contenido = fs.readFileSync('./productos.json', 'utf-8');
             const productos = JSON.parse(contenido);
    console.log(productos);
}
LeerObj();
