import {action} from "typesafe-actions";
import {ITodo, TodoActionTypes} from "./types";

export const postTodoRequest = (newTodoName: string) => action(TodoActionTypes.POST_TODO_REQUEST, {
    completed: false,
    description: newTodoName,
    id: undefined,
} as ITodo);
export const postTodoSuccess = (newTodo: ITodo) => action(TodoActionTypes.POST_TODO_SUCCESS, newTodo);
export const postTodoError = (message: string) => action(TodoActionTypes.POST_TODO_ERROR, message);

export const toggleTodoRequest = (todo: ITodo) => action(TodoActionTypes.TOGGLE_TODO_REQUEST, todo);
export const toggleTodoSuccess = (editedTodo: ITodo) => action(TodoActionTypes.TOGGLE_TODO_SUCCESS, editedTodo);
export const toggleTodoError = (message: string) => action(TodoActionTypes.TOGGLE_TODO_ERROR, message);

export const fetchTodoRequest = () => action(TodoActionTypes.FETCH_TODO_REQUEST);
export const fetchTodoSuccess = (data: ITodo[]) => action(TodoActionTypes.FETCH_TODO_SUCCESS, data);
export const fetchTodoError = (message: string) => action(TodoActionTypes.FETCH_TODO_ERROR, message);
