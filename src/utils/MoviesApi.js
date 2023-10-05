class MoviesApi {
    constructor() {
        this.url = 'https://api.nomoreparties.co/beatfilm-movies';
    }

    getAllFilms() {
        return fetch(this.url, {
            method: 'GET'
        }).then(res => {
            if(res.ok) {
                return res.json();
            } else {
                return res.json().then(err => {
                    throw err.message;
                })
            }
        })
    }
}
