const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const motivo = document.getElementById("motivo");
const mensaje = document.getElementById("mensaje");

console.log("nombre.value ", nombre.value);

function contactar() {
    if(nombre.value === ""){
        console.log("vacio");
    } else{
        console.log("no vacio");
    }
}

nombre.addEventListener("input", function(event){
    console.log(event.target.value);
});

motivo.addEventListener("input",(event)=>{
    console.log(event.target.value);
})
