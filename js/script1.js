const url = "https://movie-database-imdb-alternative.p.rapidapi.com/?s=star%20wars&page=1&r=json&rapidapi-key=6ed2b385eamshac952e82992bbf9p1097c1jsn77623da00193";
const resultsContainer = document.querySelector(".results");

async function getMovies() {
    try {
        const response = await fetch(url);
        const results = await response.json()
        const movies = results.Search
        
        console.log(movies);
        
        resultsContainer.innerHTML = "";

        movies.forEach(function(movie) {
            
            resultsContainer.innerHTML += `<a href="details.html?id=${movie.imdbID}" class="movies">
            <img class="moviesImage" src="${movie.Poster}" alt="${movie.Title}"/>
            <h1>${movie.Title}</h1>
            <p>Year released: ${movie.Released}</p>
            </a>`
        });

    } catch (error) {
        console.log("An error has occured.", error);
        resultsContainer.innerHTML = createErrorMsg("error", "An error occured!");
      }
    
}

getMovies()

