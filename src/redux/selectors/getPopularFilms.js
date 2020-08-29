export const getFilms = (state) => {
    if (state.domain.films.popular === undefined) {
        return null;
    }
    return state.domain.films.popular;
};
