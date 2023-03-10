const nombre = document.getElementByid("nombre");
const email = document.getElementByid("email");
const motivo = document.getElementByid("motivo");
const mensaje = document.getElementByid("mensaje");

console.log("nombre.value ", nombre.value);

function contactar() {
    if(nombre.value === ""){
        console.log("vacio");
    } else{
        console.log("no vacio");
    }
}

nombre.addeventlistener("input", function(event){
    console.log(event.target.value);
});

motivo.addeventlistener("input",(event)=>{
    console.log(event.target.value);
})
