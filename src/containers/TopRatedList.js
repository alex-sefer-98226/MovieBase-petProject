import {connect} from 'react-redux';
import FilmsList from "../components/FilmList";
import {getTopRatedFilms} from "../redux/selectors/getTopRatedFilms";
import {getFilmsLoadingStatus} from "../redux/selectors/getFilmsLoadingStatus";
import {loadFilms} from "../redux/thunks/films";

const mapStateToProps = (state) => ({
    films: getTopRatedFilms(state),
    loaded: getFilmsLoadingStatus(state, "top_rated")
});

const mapDispatchToProps = dispatch => ({
    loadFilms: (page) => dispatch(loadFilms(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(FilmsList);
