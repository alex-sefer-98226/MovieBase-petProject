import {setTvs} from "../actions/tv";
import {getTvs} from "../../constants";
import {HIDE_LOADER_TV, SHOW_LOADER_TV} from "../constants/tv";

export const loadTvs = (category, page = 1) => {
    return (dispatch) => {

        dispatch({type: SHOW_LOADER_TV, payload: category});

        fetch(getTvs(category, page))
            .then(res => res.json())
            .then(res => {
                dispatch(setTvs({
                    [category]:
                        {
                            byId: res.results,
                            allIds: res.results.map((item) => item.id)
                        }
                }));
                dispatch({type: HIDE_LOADER_TV, payload: category});
            })


    }
}
