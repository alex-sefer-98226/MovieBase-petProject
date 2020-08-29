
export const getNowPlayingFilms = (state) => {
    if (state.domain.films.now_playing === undefined) {
        return null;
    }
    return state.domain.films.now_playing;
};