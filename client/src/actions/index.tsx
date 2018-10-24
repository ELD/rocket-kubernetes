import {
    ADD_TODO,
    FETCH_TODOS,
    FETCH_TODOS_SUCCESS,
    SET_VISIBILITY_FILTER,
    TOGGLE_TODO
} from "../constants";
import {ITodo} from "../types/AppState";

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

export interface IFetchTodos {
    type: FETCH_TODOS
}

export interface IFetchTodosSuccess {
    receivedAt: Date,
    todos: ITodo[],
    type: FETCH_TODOS_SUCCESS
}

export enum VisibilityFilters {
    SHOW_ACTIVE = 'SHOW_ACTIVE',
    SHOW_ALL = 'SHOW_ALL',
    SHOW_COMPLETED = 'SHOW_COMPLETED',
}

export type TodoAction = IAddTodo
    | IToggleTodo
    | ISetVisibilityFilter
    | IFetchTodos
    | IFetchTodosSuccess;

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

export function fetchTodos(): IFetchTodos {
    return {
        type: FETCH_TODOS
    };
}
