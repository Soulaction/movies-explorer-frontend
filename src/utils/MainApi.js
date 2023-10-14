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
                    throw err;
                })
            }
        })
    }

    getUserInfo() {
        return this._fetch('/users/me', {
            method: 'GET',
            credentials: 'include'
        })
    }

    registration(user) {
        return this._fetch('/signup', {
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
        return this._fetch('/users/me', {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(user),
            credentials: 'include'
        })
    }

    getMovies() {
        return this._fetch('/movies', {
            method: 'GET',
            credentials: 'include'
        })
    }

    createMovies(movie) {
        return this._fetch('/movies', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(movie),
            credentials: 'include'
        });
    }

    deleteMovies(movieId) {
        return this._fetch('/movies/' + movieId, {
            method: 'DELETE',
            credentials: 'include'
        });
    }

    logout() {
        return this._fetch('/signout', {
            method: 'GET',
            credentials: 'include'

        });
    }
}

export const mainApi = new MainApi('https:api.film.nomoredomainsicu.ru')
