import {Reducer} from "redux";
import {IVisibilityFiltersState, VisibilityFilterActionTypes, VisibilityFilters} from "./types";

const initialState: IVisibilityFiltersState = {
    filter: VisibilityFilters.SHOW_ALL
};

const reducer: Reducer<IVisibilityFiltersState> = (state = initialState, action) => {
    switch (action.type) {
        case VisibilityFilterActionTypes.CHANGE_FILTER:
            return action.payload;
        default:
            return state;
    }
};

export {reducer as visibilityReducer};
