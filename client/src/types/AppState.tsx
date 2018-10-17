import {VisibilityFilters} from "../actions";

export interface IAppState {
    todos: ITodo[],
    visibilityFilter: VisibilityFilters,
}

export interface ITodo {
    id: number,
    text: string,
    completed: boolean,
}

export const DefaultState = {
    todos: [],
    visibilityFilter: VisibilityFilters.SHOW_ALL,
};
