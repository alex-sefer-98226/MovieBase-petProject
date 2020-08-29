import {SET_TVS} from "../constants/tv";

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_TVS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

