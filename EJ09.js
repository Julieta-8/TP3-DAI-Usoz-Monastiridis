console.log(ValidarContraseña("NoMeBaño08"))
function ValidarContraseña(password){
    let Validacion ="";
    if(password.length == 8 && /\d/.test(password ) && /A-Z/.test(password)){
        Validacion = "Constraseña valida";
    }
    else{
        Validacion = "Constraseña invalida";
    }
   return Validacion;
}
