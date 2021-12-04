const API_TOKEN = "6d80a112f2099f8e4689146eff28563a"

export function getFilmsByTitle(text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=en&query=' + text
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error))
}

export function getFilmImage(name) {
    return 'https://image.tmdb.org/t/p/w300' + name
}