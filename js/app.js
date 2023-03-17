// clave = "5b197352180c9d801b6d9d654b40a762";
//https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5b197352180c9d801b6d9d654b40a762&language=es

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5b197352180c9d801b6d9d654b40a762&language=es&?page=1";
const IMAGE_PATH = "https://image.tmdb.org/t/p/w500/";
const SEARCH_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=5b197352180c9d801b6d9d654b40a762&language=es&include_adult=false&query='";

let card = document.getElementById("card-template");

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  displayMovies(data.results);
  console.log(data.results);
}

function displayMovies(movies) {
  movies.forEach((movie) => {
    const { title, poster_path, overview } = movie;

        card.innerHTML+=

        `
        <div class="col col-xxl-3 col-xl-4 col-lg-6 col-md-6 p-4">
          <div class="card h-100">
              <img src="${IMAGE_PATH +poster_path}" alt="${title}" class="card-img-top img-fluid h-50"/>
          
            <div class="card-body h-50">
              <h5 class="card-title h-10">${title}</h5>
              <p class="card-text" id="api-text">${overview}</p>
            </div>
            <div class="d-grid gap-2">
              <button class="btn btn-secondary" type="button" onclick="window.location.href='./pages/error404.html';">Ver Mas</button>
            </div>
          </div>
        </div>
        <div class="d-grid gap-2">
                <button class="btn btn-secondary" type="button" onclick="window.location.href='./pages/error404.html';">Ver Mas</button>
        </div>
      </div>
    </div>
        `;
  });
}

getMovies(API_URL);
