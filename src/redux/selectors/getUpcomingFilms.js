
export const getFilms = (state) => {
    if (state.domain.films === undefined) {
        return null;
    }
    return state.domain.films.upcoming;
};