import {TodoAction} from "../actions";
import {SET_VISIBILITY_FILTER} from "../constants";
import {DefaultState} from "../types/AppState";

const visibilityFilter = (state = DefaultState.visibilityFilter, action: TodoAction) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
};

export default visibilityFilter;