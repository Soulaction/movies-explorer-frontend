class MoviesApi {
    constructor() {
        this.url = 'https://api.nomoreparties.co/beatfilm-movies';
    }

    getAllFilms() {
        return fetch(this.url, {
            method: 'GET'
        })
    }
}
