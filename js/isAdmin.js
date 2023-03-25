const isAdmn = localStorage.getItem("isAdmin");
const navBar = document.getElementById("navbar-nav");
if (isAdmn === true) {
   navBar.innerHTML = "";
   const li = document.createElement("li");
   const a = document.createElement("a");  
   li.className= "nav-item"
   a.className = "nav-link"
   a.innerText = "Administrador";
   a.href = "./admin.html"

   li.appendChild(a);
   isAdmn.appendChild(li)
}




