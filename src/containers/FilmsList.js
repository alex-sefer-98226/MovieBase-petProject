import {connect} from 'react-redux';
import FilmsList from "../components/FilmList";
import {getFilms} from "../redux/selectors/getPopularFilms";
import {getFilmsLoadingStatus} from "../redux/selectors/getFilmsLoadingStatus";
import {loadFilms} from "../redux/thunks/films";

const mapStateToProps = (state) => ({
    films: getFilms(state),
    loaded: getFilmsLoadingStatus(state, "popular")
});

const mapDispatchToProps = dispatch => ({
    loadFilms: (page) => dispatch(loadFilms(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(FilmsList);
