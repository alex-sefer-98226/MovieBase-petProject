export const getTopRatedFilms = (state) => {
    if (state.domain.films.top_rated === undefined) {
        return null;
    }
    return state.domain.films.top_rated;
};