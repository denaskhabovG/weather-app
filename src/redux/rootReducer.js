import {combineReducers} from "redux";
import {weatherReducer} from "./weatherReducer";
import {loaderReducer} from "./loaderReducer";

export const rootReducer = combineReducers({
    weatherReducer,
    loaderReducer,
})
