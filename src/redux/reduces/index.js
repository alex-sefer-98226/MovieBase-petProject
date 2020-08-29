import {combineReducers} from "redux";
import filmReducer from './films';
import filmLoadReducer from './filmLoadReducer';
import tvsReducer from './tvsReducer';
import tvsLoadReducer from "./tvsLoadReducer"

const subRootReducer = combineReducers({films:filmReducer,tvs:tvsReducer});
const loadReducer = combineReducers({films:filmLoadReducer,tvs:tvsLoadReducer})
const bigLoadReducer = combineReducers({isLoading:loadReducer});

export const rootReducer = combineReducers({
    domain: subRootReducer,
    app: bigLoadReducer,
})