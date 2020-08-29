export const getFilmsLoadingStatus = (state, category) => {
    if (state.app.isLoading === undefined) {
        return true;
    }
    return state.app.isLoading.films[category];
};