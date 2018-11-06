import {action} from "typesafe-actions";
import {IVisibilityFilters, VisibilityFilterActionTypes} from "./types";

export const changeFilter = (filter: IVisibilityFilters) => action(VisibilityFilterActionTypes.CHANGE_FILTER, filter);