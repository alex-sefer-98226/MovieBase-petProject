import {HIDE_LOADER_TV, SHOW_LOADER_TV} from '../constants/tv';

const initialState = {}

export default function tvsLoadReducer(state = initialState, action) {

    switch (action.type) {
        case SHOW_LOADER_TV:
            console.log("Action in loadReducers", action);
            return ({
                ...state,
                [action.payload]: true
            });
        case HIDE_LOADER_TV:
            return ({
                ...state,
                [action.payload]: false
            });
        default:
            return state;
    }
}




