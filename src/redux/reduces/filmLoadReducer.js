import {HIDE_LOADER, SHOW_LOADER} from '../constants/films';

const initialState = {
}

export default function filmLoadReducer(state = initialState, action) {

    switch (action.type) {
        case SHOW_LOADER:
            return ({
                ...state,
                [action.payload]:true
            });
        case HIDE_LOADER:
            return ({
                ...state,
                [action.payload]:false

            });
        default:
            return state;
    }
}




