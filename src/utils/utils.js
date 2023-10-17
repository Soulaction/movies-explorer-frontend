export const getInitMovies = (widthWindow) => {
    if(widthWindow > 1020) {
        return {
            initialCount: 12,
        }
    } else if ( 480 < widthWindow <= 1020) {
        return {
            initialCount: 8,
        }
    } else {
        return {
            initialCount: 5,
        }
    }
}

export const getLoadMovies = (widthWindow) => {
    if(widthWindow > 1020) {
        return {
            loadCount: 3
        }
    } else if ( 480 < widthWindow <= 1020) {
        return {
            loadCount: 2
        }
    } else {
        return {
            loadCount: 2
        }
    }
}
