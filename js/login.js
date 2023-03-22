
const email = document.getElementById("email");
const password = document.getElementById("password");

const local = localStorage.getItem("users");


const results = JSON.parse (local);


function login() {
    const emailValue = email.value;
    const passwordValue = password.value;

    
    const existUsuario = existUser(emailValue, passwordValue);
    

    if (!existUsuario){ 
        return alert ("email o contraseña son incorrectos");
} else {
       isAdmin(existUsuario)
};



function existUser(emailValue, passwordValue) {
    let resp = false;
    for (let i = 0; i < results.length; i++) {
        let localUser = results[i];

        if (localUser.email === emailValue && localUser.password === passwordValue) {
            resp = localUser;
        }
    };
    return resp;
};

};


function isAdmin(user) {
    if (user.admin === true) {
        console.log ("es admin")
        window.location = "http://127.0.0.1:5502/pages/admin.html"
        localStorage.setItem("isAdmin", true);
    } else {
        window.location = "http://127.0.0.1:5502/index.html"
        localStorage.setItem("isAdmin", false);
    };
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










