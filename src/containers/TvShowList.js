import {connect} from 'react-redux';
import FilmsList from "../components/FilmList";
import {getTvShowsPopular} from "../redux/selectors/getTvShow";
import {getTvsLoadingStatus} from "../redux/selectors/getTvsLoadingStatus";
import {loadTvs} from "../redux/thunks/tvs";

const mapStateToProps = (state) => ({
    films: getTvShowsPopular(state),
    loaded: getTvsLoadingStatus(state, "popular")
});

const mapDispatchToProps = dispatch => ({
    loadFilms: (page) => dispatch(loadTvs(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(FilmsList);
