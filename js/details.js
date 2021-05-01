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
    detailContainer.innerHTML = `<h1>${movie.Title}</h1>
                            <div class="detailsImage"><img src="${movie.Poster}" alt="${movie.Title}"/></div>
                            <div class="movieDetails">
                                <div class="rated"><p>Rated: ${movie.Rated}</p>
                                <div class="runtime"><p>Runtime: ${movie.Runtime}</p>
                                <div class="genre"><p>Genre: ${movie.Genre}</p>
                                <div class="director"><p>Director: ${movie.Director}</p>
                                <div class="writer"><p>Writer: ${movie.Writer}</p>
                                <div class="actors"><p>Actors: ${movie.Actors}</p>
                                <div class="language"><p>Language: ${movie.Language}</p>
                                <div class="country"><p>Country: ${movie.Country}</p>
                                <div class="awards"><p>Awards: ${movie.Awards}</p>
                                <div class="metacritic"><p>Metacritic: ${movie.Metacritic}</p>
                                <div class="rating"><p>IMDb Rating: ${movie.imdbRating}</p>
                                <div class="boxOffice"><p>Box Office: ${movie.boxOffice}</p>
                                

                            </div>
                            <time class="released">Released: ${movie.Released}</time>
                            <div class="plot"><p>Plot: : ${movie.Plot}</p>
                            `
}