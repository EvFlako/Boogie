const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const motivo = document.getElementById("motivo");
const mensaje = document.getElementById("mensaje");

console.log("nombre.value ", nombre.value);

function contactar(){
    console.log(validEmail());
    if(validEmail()=== true && validName()=== true){
        console.log(("ejecutar guardado"));
    }
}

function validEmail(){
    const emailRegex=
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    let valEmail = email.value;

    let validEmail = emailRegex.test(valEmail);

    if(!validEmail){
        alert("no ingreso email correctamente");
        email.style.background = "red";
        return false;
    }else return true;
    }
function validName(){
    let valNombre = nombre.value;
    if(valNombre.length >=10){
        nombre.style.background ="red";
        alert("el nombre lleva maximo 10 caracteres");
        return;
    }else{
        nombre.style.background = "#fff";
    }
}

nombre.addEventListener("input", function (event){
    console.log(event.target.value);
    let val = event.target.value;
    
    if (val.length >= 10){
        nombre.style.background = "red";
    }else{
        nombre.style.background = "#fff";
    }
    })
