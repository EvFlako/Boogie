
  
  let newMovies = [];
  let movie1 = {
    id: 123,
    name: "Avatar",
    cat: "Acción",
    desc: "Ambientada más de una década después",
  };
  
  let movie2 = {
    id: 124,
    name: "Gato con botas",
    cat: "Infantil",
    desc: "El Gato con Botas descubre",
  };
  
  newMovies.push(movie1, movie2);
//localStorage.setItem("newMovie", JSON.stringify(newMovies))
  
  const cargaInicial = () => {
    newMovies = JSON.parse(localStorage.getItem("newMovie")) || [];
    if (newMovies.length > 0) {
      addMoviesLocal();
    }
  };

  class Movie {
    constructor(id, name, category, description) {
      this.id = id;
      this.name = name;
      this.cat = category;
      this.desc = description;
    }
  }
  
  function addMoviesLocal() {
    const addMovie = document.querySelector(".pelis");
  
    newMovies.forEach((newMovie) => {
      const tabla = document.createElement("tr");
      tabla.className = "nueva-peli";
      tabla.id = `peli-${newMovie.id}`;
  
      const tarjeta = `
        <td>${newMovie.id}</td>
        <td>${newMovie.name}</td>
        <td>${newMovie.cat}</td>
        <td>${newMovie.desc}</td>
        <td class="table-checkbox"><input type="checkbox" name="" id=""></td>
        <td>
          <button class="edit-btn" data-movie-id="${newMovie.id}">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button class="delete-btn" id="delete-btn">
            <i class="fa-solid fa-trash"></i>
          </button>
          <button class="highlight-btn">
            <i class="fa-solid fa-star"></i>
          </button>
        </td>
      `;
  
      tabla.innerHTML = tarjeta;
  
      addMovie.append(tabla);
    });
  }
  
  function addMovies() {
    document.getElementById("add-to-list").addEventListener("click", () => {
      const addMovie = document.querySelector(".pelis");
      addMovie.innerHTML = "";
  
      newMovies.forEach((newMovie) => {
        const tabla = document.createElement("tr");
        tabla.className = "nueva-peli";
        tabla.id = `${"peli" + newMovies.length++}`;
  
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
              <button class="delete-btn" id="delete-btn">
                    <i class="fa-solid fa-trash"></i>
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
    let id = document.getElementById("peli-codigo").value;
    let name = document.getElementById("peli-name").value;
    let cat = document.getElementById("peli-cat").value;
    let desc = document.getElementById("peli-desc").value;
    let newMovie = new Movie(id, name, cat, desc);
    //console.log(newMovie);
    newMovies.push(newMovie);
    localStorage.setItem("newMovie", JSON.stringify(newMovies));
  }
  
  
  function deleteMovie() {
    const deleteBtn = document.getElementById("delete-btn")
    deleteBtn = deleteBtn.addEventListener("click", () => {
        newMovies = newMovies.filter((movie) => movie.id !== tabla.id);
        localStorage.setItem("newMovie", JSON.stringify(newMovies));
    });
      };
  
  addMovies();
  
  cargaInicial();
  
