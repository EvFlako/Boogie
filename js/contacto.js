const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const motivo = document.getElementById("motivo");
const mensaje = document.getElementById("mensaje");

function contactar() {
    if(validEmail() === true){
        Email.send({
        Host : "smtp.elasticemail.com",
        Username : "fabriziobagnasco2001@gmail.com",
        Password : "CB6E452E131240BC57E990EBF6D60E984E0D",
        To : 'bagnascofabrizio2001@gmail.com',
        From : "fabriziobagnasco2001@gmail.com",
        Subject : "Gracias por contactarnos!",
        Body : "Estamos contentos con que te hayas podido contactar con nosotros, tu motivo sera revisado !!",
    })
     return alert("Se envio con exito!!");
    } else return alert("No se pudo enviar.");
    // validName();
    // validEmail();
    // validMotivo();
    // validMensaje();
}

function validEmail(){
    const emailRegex= /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    let valEmail = email.value;

    let validEmail = emailRegex.test(valEmail);

    if(!validEmail){
        alert("No ingreso el email correctamente");
        email.style.background = "red";
        return false;
    }else return true;
}
    
function validName(){
    let valNombre = nombre.value;
    if(valNombre.length >=20){
        alert("El nombre y apellido lleva maximo 20 caracteres");
        nombre.style.background ="red";
        return;
    }else{
        nombre.style.background = "#fff";
    }
}

function validMotivo(){
    let valMotivo = motivo.value;
    if(valMotivo.length >=30){
        alert("El motivo lleva maximo 30 caracteres");
        motivo.style.background ="red";
        return;
    }else{
        motivo.style.background = "#fff";
    }
}

function validMensaje(){
    let valMensaje = mensaje.value;
    if(valMensaje.length >=160){
        alert("El mensaje lleva maximo 160 caracteres");
        mensaje.style.background ="red";
        return;
    }else{
        mensaje.style.background = "#fff";
    }
}

nombre.addEventListener("input", function (event){
    console.log(event.target.value);
    let val = event.target.value;
    
    if (val.length >= 20){
        nombre.style.background = "red";
    }else{
        nombre.style.background = "#fff";
    }
    })
    
motivo.addEventListener("input", function (event){
 console.log(event.target.value);
 let val = event.target.value;
 
 if (val.length >= 30){
     motivo.style.background = "red";
}else{
    motivo.style.background = "#fff";
 }
  })

  mensaje.addEventListener("input", function (event){
    console.log(event.target.value);
    let val = event.target.value;
    
    if (val.length >= 160){
        mensaje.style.background = "red";
   }else{
       mensaje.style.background = "#fff";
    }
     })
 