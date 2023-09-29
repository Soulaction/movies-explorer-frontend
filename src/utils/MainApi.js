class MainApi {
    constructor() {
    }

    _fetch() {
        return fetch().then(res => {
            if (res.ok) {
                return res.json();
            } else {

            }
        })
    }
}
