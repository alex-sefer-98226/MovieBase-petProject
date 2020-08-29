import {setFilms} from "../actions/films";
import {getFilms} from "../../constants";
import {HIDE_LOADER, SHOW_LOADER} from "../constants/films";

export const loadFilms = (category, page = 1) => {
    return (dispatch) => {

        dispatch({type: SHOW_LOADER, payload: category});

        fetch(getFilms(category, page))
            .then(res => res.json())
            .then(res => {
                dispatch(setFilms({
                    [category]:
                        {
                            byId: res.results,
                            allIds: res.results.map((item) => item.id)
                        }
                }));
                dispatch({type: HIDE_LOADER, payload: category});
            })
        

    }
}
