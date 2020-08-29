export const getTvShowsPopular = (state) => {
    if (state.domain.tvs.popular === undefined) {
        return null;
    }
    return state.domain.tvs.popular;
};