const nombre =document.getElementById("nombre")
const email =document.getElementById("email")
const password1 =document.getElementById("password1")
const password2 =document.getElementById("password2")

console.log("nombre.value",nombre.value);

function registro(){
    if(nombre.value === ""){
    console.log("vacio");
    } else {
        console.log("esta vacio")
}
}

function registro(){
    console.log("en la funcion");

    let valuepass1 =password1.value;
    let valuepass2 =password2.value;

    console.log("valuepass1",valuepass1);
    console.log("valuepass2".valuepass2);

    if(valuepass1 === valuepass2) {
localStorage.setItem("password1" , valuepass1);
    }
    else{
        password1.style.background="red";
        password2.style.background="red";
    };

    if(nombre.value === ""){
        alert("debe completar este campo");
        nombre.focus();
    }
}

password2.addEventListener("imput",(e)=>{
 let pass2= e.target.value;
 let pass1=password1.value;

  if (pass1===""){
    alert("falta completar el campo contraseña");
    password2.value="";
    return;
  }
});