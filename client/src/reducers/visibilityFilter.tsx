import {TodoAction, VisibilityFilters} from "../actions";
import {SET_VISIBILITY_FILTER} from "../constants";

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action: TodoAction) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
};

export default visibilityFilter;