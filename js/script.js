const resultsContainer = document.querySelector(".results");

async function getMovies() {
    try {
        const response = await fetch("https://imdb8.p.rapidapi.com/title/auto-complete?q=game%20of%20thr", {
            method: "GET",
            headers: {
                "x-rapidapi-host": "imdb8.p.rapidapi.com",
                "x-rapidapi-key": "9482154633msh5290708fecc6665p19f1a4jsnbcced8e0757d",
            },
        });

        const json = await response.json();
        const movies = json.d;

        resultsContainer.innerHTML = "";

        movies.forEach(function (movie) {
            resultsContainer.innerHTML += `<a href="details.html?movieId=${movie.id}">
                                            <h3>${movie.l}</h3>
                                            <p>Rank: ${movie.rank}</p>
                                            <p>Year: ${movie.y}</p>
                                            </a>`
        });

        console.log(json);
    }
    catch (error) {
        console.log("An error occured");
        resultsContainer.innerHTML = "An error occured";
    }
}

getMovies();
