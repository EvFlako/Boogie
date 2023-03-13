
const newMovies = [];

class Movie {
    constructor (id, name, category, description) {
        this.id = id;
        this.name = name;
        this.cat = category;
        this.desc = description;
    }
}
let string = JSON.stringify(Movie)
function saveMovie() {

    let id = document.getElementById("peli-codigo").value
    let name = document.getElementById("peli-name").value
    let cat = document.getElementById("peli-cat").value
    let desc = document.getElementById("peli-desc").value
    let newMovie = new Movie (id, name, cat, desc)
    console.log(newMovie);
    newMovies.push(newMovie);
    localStorage.setItem("newMovie", JSON.stringify(newMovie));
    console.log(newMovies);

    
    document.querySelector("#add-to-list").addEventListener("click", () => {
        const addMovie = document.querySelector(".pelis")
        addMovie.innerHTML = "";
    
        newMovies.forEach ((newMovie) => {
            const tabla = document.createElement("tr");
            tabla.className = "nueva-peli";
    
            const tarjeta = `
            <td class="table-checkbox"><input type="checkbox" name="" id=""></td>
            <td>${newMovie.id}</td>
            <td>${newMovie.name}</td>
            <td>${newMovie.cat}</td>
            <td>${newMovie.desc}</td>
            <td class="table-checkbox"><input type="checkbox" name="" id=""></td>
            <td>
                <button>
                      <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button>
                      <i class="fa-solid fa-trash" onclick=""></i>
                </button>
                <button>
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
;


