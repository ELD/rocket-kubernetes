import {ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO} from "../constants/index";

let nextTodoId: number = 0;

export interface IAddTodo {
    id: number,
    type: ADD_TODO,
    text: string,
}

export interface IToggleTodo {
    id: number,
    type: TOGGLE_TODO,
}

export interface ISetVisibilityFilter {
    type: SET_VISIBILITY_FILTER,
    filter: VisibilityFilters,
}

export enum VisibilityFilters {
    SHOW_ACTIVE = 'SHOW_ACTIVE',
    SHOW_ALL = 'SHOW_ALL',
    SHOW_COMPLETED = 'SHOW_COMPLETED',
}

export type TodoAction = IAddTodo
    | IToggleTodo
    | ISetVisibilityFilter;

export function addTodo(text: string): IAddTodo {
    return {
        id: nextTodoId++,
        text,
        type: ADD_TODO
    };
}

export function toggleTodo(id: number): IToggleTodo {
    return {
        id,
        type: TOGGLE_TODO
    };
}

export function setVisibilityFilter(filter: VisibilityFilters): ISetVisibilityFilter {
    return {
        filter,
        type: SET_VISIBILITY_FILTER
    };
}
