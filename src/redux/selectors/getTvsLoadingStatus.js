export const getTvsLoadingStatus = (state, category) => {
    if (state.app.isLoading === undefined) {
        return true;
    }
    return state.app.isLoading.tvs[category];
};