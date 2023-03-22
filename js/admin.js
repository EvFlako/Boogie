
let movie1 = {
    id:123,
    name: "avatar",
    cat: "acción",
    desc: ""
}

let movie2 = {
    id:124,
    name: "Gato con botas",
    cat: "infantil",
    desc: ""
}  


let newMovies = [];
//newMovies.push(movie1,movie2)
//localStorage.setItem("newMovie", JSON.stringify(newMovies));

let localMovies = window.localStorage.getItem("newMovie");
if (localMovies) {
    newMovies.push(JSON.parse(localMovies))
    addMoviesLocal()
}

const cargaInicial = () => {
    newMovies=JSON.parse(localStorage.getItem("newMovie")) || []
    if (newMovies.length>0) {
        newMovies.forEach(newMovie => {
            addMoviesLocal()
        })
    }
}


class Movie {
    constructor (id, name, category, description) {
        this.id = id;
        this.name = name;
        this.cat = category;
        this.desc = description;
    }
}

function addMoviesLocal() {
    const addMovie = document.querySelector(".pelis")
    addMovie.innerHTML = "";

    newMovies.forEach ((newMovie) => {
        const tabla = document.createElement("tr");
        tabla.className = "nueva-peli";
        tabla.id = `${"peli" + newMovies.length ++}`

        const tarjeta = `
        <td>${newMovie.id}</td>
        <td>${newMovie.name}</td>
        <td>${newMovie.cat}</td>
        <td>${newMovie.desc}</td>
        <td class="table-checkbox"><input type="checkbox" name="" id=""></td>
        <td>
            <button id="edit-btn">
                  <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button id="delete-btn">
                  <i class="fa-solid fa-trash" onclick="deleteMovie()"></i>
            </button>
            <button id="highlight-btn">
              <i class="fa-solid fa-star"></i>
            </button>
        </td>
    </tr>
        `;

        tabla.innerHTML = tarjeta;

        addMovie.append(tabla);

    });
}

function addMovies() {
document.getElementById("add-to-list").addEventListener("click", () => {
    const addMovie = document.querySelector(".pelis")
    addMovie.innerHTML = "";

    newMovies.forEach ((newMovie) => {
        const tabla = document.createElement("tr");
        tabla.className = "nueva-peli";
        tabla.id = `${"peli" + newMovies.length ++}`

        const tarjeta = `
        <td>${newMovie.id}</td>
        <td>${newMovie.name}</td>
        <td>${newMovie.cat}</td>
        <td>${newMovie.desc}</td>
        <td class="table-checkbox"><input type="checkbox" name="" id=""></td>
        <td>
            <button id="edit-btn">
                  <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button id="delete-btn">
                  <i class="fa-solid fa-trash" onclick="deleteMovie()"></i>
            </button>
            <button id="highlight-btn">
              <i class="fa-solid fa-star"></i>
            </button>
        </td>
    </tr>
        `;

        tabla.innerHTML = tarjeta;

        addMovie.append(tabla);

    });



});
}

function saveMovie() {

    let id = document.getElementById("peli-codigo").value
    let name = document.getElementById("peli-name").value
    let cat = document.getElementById("peli-cat").value
    let desc = document.getElementById("peli-desc").value
    let newMovie = new Movie (id, name, cat, desc)
    //console.log(newMovie);
    newMovies.push(newMovie);
    localStorage.setItem("newMovie", JSON.stringify(newMovies));
    
}
;


/*function deleteMovie() {
    let removeBtn = document.getElementById("delete-btn")
     removeBtn.addEventListener("click", () => {
         newMovies = newMovies.filter("")
     }); } */

     addMovies()

cargaInicial()



