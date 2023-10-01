class MainApi {
    constructor(url) {
        this.url = url;
    }

    _fetch(contextPath, option) {
        return fetch(this.url + contextPath, option).then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return res.json().then(err => {
                    throw err.message;
                })
            }
        })
    }

    getUserInfo() {
        return this._fetch('/users/me', {
            method: 'GET'
        })
    }

    login(user) {
        return this._fetch('/signin', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(user),
            credentials: 'include'
        })
    }

    login(user) {
        return this._fetch('/signin', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(user),
            credentials: 'include'
        })
    }

    updateUser(user) {
        this._fetch('/users/me', {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(user),
            credentials: 'include'
        })
    }

    getMovies() {
        this._fetch('/movies', {
            method: 'GET',
            credentials: 'include'
        })
    }

    createMovies(movie) {
        this._fetch('/movies', {
            method: 'POST',
            header: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(movie),
            credentials: 'include'
        });
    }

    deleteMovies(movieId) {
        this._fetch('/movies/' + movieId, {
            method: 'DELETE'
        });
    }

    logout() {
        this._fetch('/signout', {
            method: 'GET'
        });
    }
}

export const mainApi = new MainApi('https://api.film.nomoredomainsicu.ru')
