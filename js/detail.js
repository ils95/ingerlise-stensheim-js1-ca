const qs = document.location.search;
const parameters = new URLSearchParams(qs);
const movieId = parameters.get("movieId");

if (movieId === null) {
    document.location.href = "index.html";
}

async function detailMovie() {
    const detailContainer = document.querySelector(".detail");

    try {
        const response = await fetch("https://imdb8.p.rapidapi.com/title/auto-complete?q=" + movieId, {
            method: "GET",
            headers: {
                "x-rapidapi-host": "imdb8.p.rapidapi.com",
                "x-rapidapi-key": "9482154633msh5290708fecc6665p19f1a4jsnbcced8e0757d",
            },
        });

        const json = await response.json();
        const movies = json.d;

        detailContainer.innerHTML = "";

        movies.forEach(function (movie) {
            detailContainer.innerHTML += `<h3>${movie.l}</h3>
                                        <img src="${movie.i.imageUrl}" alt="${movie.i}" width="300px" />
                                        <p>Genre: ${movie.q}</p>
                                        <p>Actors: ${movie.s}</p>`
            document.title = `${movie.l}`
        });

        console.log(json)
    }
    catch (error) {
        console.log(error);
        detailContainer.innerHTML = "An error occured";
    }
}

detailMovie();

console.log(movieId);
