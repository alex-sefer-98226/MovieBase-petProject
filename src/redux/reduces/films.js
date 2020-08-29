import {SET_FILMS} from "../constants/films";

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_FILMS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}


