const nombre =document.getElementById("nombre")
const email =document.getElementById("email")
const password1 =document.getElementById("password1")
const password2 =document.getElementById("password2")

console.log("nombre.value",nombre.value);

function registro(){
    console.log(validEmail());
    if(validEmail()=== true && validName()=== true){
        console.log(("ejecutar guardado"));
    }
    /*validEmail();
    validName();
    validPass();*/
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
 function validPass(){
    let valuePass1 = password1.value;
    let valuePass2 = password2.value;
    if (valuePass1=== valuePass2){
        password2.style.background = "green";
    }else {
     password2.style.background = "red";
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



password2.addEventListener("imput",(e)=>{
 let pass2= e.target.value;
 let pass1=password1.value;

  if (pass1===""){
    alert("falta completar el campo contraseña");
    password2.value="";
    return;
  }
  if (pass2===pass1){
    password2.style.background = "grenn";
 }else password2.style.background = "#fff";
})
