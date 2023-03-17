
const newMovies = [];

/* function removeMovie() {
const removeBtn = document.getElementById("delete-btn")
    removeBtn.addEventListener("click", () => {
        newMovies = newMovies.filter(("addMovie") => addMovie.id !== tabla.id)
    }); }*/ 

class Movie {
    constructor (id, name, category, description) {
        this.id = id;
        this.name = name;
        this.cat = category;
        this.desc = description;
    }
}
let string = JSON.stringify(Movie)


function addMovies () {
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
                  <i class="fa-solid fa-trash" onclick="removeMovie()"></i>
            </button>
            <button id="highlight-btn">
              <i class="fa-solid fa-star"></i>
            </button>
        </td>
    </tr>
        `;

        tabla.innerHTML = tarjeta;

        addMovie.append(tabla);

        console.log(addMovie)

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
    localStorage.setItem("newMovie", JSON.stringify(newMovie));
    console.log(newMovies);

    

}
;




addMovies()
