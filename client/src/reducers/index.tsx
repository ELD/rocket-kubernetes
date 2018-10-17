import {combineReducers} from "redux";
import todos from "./todo";
import visibilityFilter from "./visibilityFilter";

export const rootReducer = combineReducers({
    todos,
    visibilityFilter,
});
