const newTitle = document.querySelector("title");


const detailContainer = document.querySelector(".movie-details")

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://movie-database-imdb-alternative.p.rapidapi.com/?i=" + id + "&rapidapi-key=6ed2b385eamshac952e82992bbf9p1097c1jsn77623da00193"

async function getMovie() {
    
    try {
        const response = await fetch(url);
        const results = await response.json()
        const movie = results

        console.log(movie);

        createHtml(movie);
    }
    catch(error) {
        console.log(error);
        detailContainer.innerHTML = createErrorMsg("error", "An error occured!");
    }
}

getMovie();

function createHtml(movie) {
    newTitle.innerHTML = `${movie.Title};`
    detailContainer.innerHTML = `<h1 class="title">${movie.Title}</h1>
                                <div class="detailsContainer">
                                <div class="detailsImage"><img src="${movie.Poster}" alt="${movie.Title}"/></div>                    
                                <div class="movieDetails">
                                <div class="rated"><p>Rated: ${movie.Rated}</p></div>
                                <div class="runtime"><p>Runtime: ${movie.Runtime}</p></div>
                                <div class="genre"><p>Genre: ${movie.Genre}</p></div>
                                <div class="director"><p>Director: ${movie.Director}</p></div>
                                <div class="writer"><p>Writer: ${movie.Writer}</p></div>
                                <div class="actors"><p>Actors: ${movie.Actors}</p></div>
                                <div class="language"><p>Language: ${movie.Language}</p></div>
                                <div class="country"><p>Country: ${movie.Country}</p></div>
                                <div class="awards"><p>Awards: ${movie.Awards}</p></div>
                                <div class="metacritic"><p>Metacritic: ${movie.Metacritic}</p></div>
                                <div class="rating"><p>IMDb Rating: ${movie.imdbRating}</p></div>
                                <div class="boxOffice"><p>Box Office: ${movie.BoxOffice}</p></div>
                                <time class="released">Released: ${movie.Released}</time>
                                </div>
                                </div>
                            
                            <div class="plot"><p>Plot: : ${movie.Plot}</p></div>
                            `
}