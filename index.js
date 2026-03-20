import fs from 'fs';
const Persona = [
    {nombre: "computador", precio: 5000},
    {nombre: "teclado", precio: 1500}
]
function LeerObj(Obj){
    let contenido = "";
    for(let i = 0; i < Obj.lenght; i++){
             contenido = fs.readFileSync(Obj[i], 'utf-8')
           fs.writeFileSync(Obj[i] , contenido);
    }
}