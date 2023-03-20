
const email = document.getElementById("email");
const password = document.getElementById("password");

const local = localStorage.getItem("users");


const results = JSON.parse (local);
console.log("results", results)


function login() {
    const emailValue = email.value;
    const passwordValue = password.value;   
    
    const existUsuario = existUser(emailValue, passwordValue);
    

    if (!existUsuario) return alert ("no existe el usuario");
    else {
        if (existUser.admin === true) {
            console.log ("es admin")
            window.location = "/home/mfrascarolo/RollingCode/Boogie/pages/admin.html"
            localStorage.setItem("isAdmin", true);
        } else {
            window.location = "/home/mfrascarolo/RollingCode/Boogie/index.html"
            localStorage.setItem("isAdmin", false);
        }
    }
};



function existUser (emailValue) {
    let resp = false;
    for (let i = 0; i < results.length; i++) {
        let bbdUser = results[i];

        if (bbdUser.email === emailValue) {
            resp = bbdUser;
        }
    }
    return resp;
};

function userValido(emailValue, passwordValue) {
    let resp = false;
    results.map((result) => {
        if (result.email === emailValue && result.password === passwordValue) {
            resp = resubbdUser;
        }
    });
    return resp;
};




/*const users = [
    {
        id: 1,
        name: "Belen",
        email: "belen@gmail.com",
        password: "123AsdAsd",
        age: 32,
        admin: true,
    },

    {
        id: 2,
        name: "Juan",
        email: "juan@gmail.com",
        password: "123AsdAsd",
        age: 35,
        admin: false,
    },

    {
        id: 3,
        name: "Maria",
        email: "maria@gmail.com",
        password: "123AsdAsd",
        age: 22,
        admin: false,
    },

];

localStorage.setItem("users", JSON.stringify(users)); */










