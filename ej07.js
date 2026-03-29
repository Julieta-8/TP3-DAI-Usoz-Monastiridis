
let contador = 1;
const intervalo= setInterval(() => {
  console.log(contador);
    if(contador == 10){
        console.log("fin del contador");
        clearInterval(intervalo);
    }
    contador++;
}, 1000);
    

