import fs from 'fs';

function LeerObj(Obj){
          let contenido = fs.readFileSync(Obj, 'utf-8')
             const contenido = fs.readFileSync('./productos.json', 'utf-8');
             const productos = JSON.parse(contenido);
    
}

//EJericio 7

let contador = 1;
const intervalo= setInterval(() => {
  console.log(contador);
    if(contador == 10){
        console.log("fin del contador");
        clearInterval(intervalo);
    }
    contador++;
}, 1000);
    

