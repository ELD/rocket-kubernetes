export interface ITodo extends ApiResponse {
    id?: number,
    description: string,
    completed: boolean
}

export type ApiResponse = Record<string, any>;

export interface ITodoState {
    readonly loading: boolean,
    readonly data: ITodo[],
    readonly error?: string
}

export const enum TodoActionTypes {
    POST_TODO_REQUEST = "@@todos/POST_TODO_REQUEST",
    POST_TODO_SUCCESS = "@@todos/POST_TODO_SUCCESS",
    POST_TODO_ERROR = "@@todos/POST_TODO_ERROR",
    TOGGLE_TODO_REQUEST = "@@todos/COMPLETE_TODO_REQUEST",
    TOGGLE_TODO_SUCCESS = "@@todos/COMPLETE_TODO_SUCCESS",
    TOGGLE_TODO_ERROR = "@@todos/COMPLETE_TODO_ERROR",
    FETCH_TODO_REQUEST = "@@todos/FETCH_TODO_REQUEST",
    FETCH_TODO_SUCCESS = "@@todos/FETCH_TODO_SUCCESS",
    FETCH_TODO_ERROR = "@@todos/FETCH_TODO_ERROR",
}
