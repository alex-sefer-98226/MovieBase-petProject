import {connect} from 'react-redux';
import FilmsList from "../components/FilmList";
import {getNowPlayingFilms} from "../redux/selectors/getNowPlaying";
import {getFilmsLoadingStatus} from "../redux/selectors/getFilmsLoadingStatus";
import {loadFilms} from "../redux/thunks/films";

const mapStateToProps = (state) => ({
    films: getNowPlayingFilms(state),
    loaded: getFilmsLoadingStatus(state, "now_playing")
});

const mapDispatchToProps = dispatch => ({
    loadFilms: (page) => dispatch(loadFilms(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(FilmsList);
