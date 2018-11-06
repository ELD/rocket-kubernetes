import {Reducer} from "redux";
import {ITodo, ITodoState, TodoActionTypes} from "./types";

const initialState: ITodoState = {
    data: [],
    error: undefined,
    loading: false,
};

const reducer: Reducer<ITodoState> = (state = initialState, action) => {
    switch (action.type) {
        case TodoActionTypes.POST_TODO_REQUEST:
            return {...state};
        case TodoActionTypes.POST_TODO_SUCCESS:
            return {...state, data: [...state.data, action.payload]};
        case TodoActionTypes.POST_TODO_ERROR:
            return {...state, error: action.payload};
        case TodoActionTypes.TOGGLE_TODO_REQUEST:
            return {...state};
        case TodoActionTypes.TOGGLE_TODO_SUCCESS:
            return {
                ...state, data: state.data.map((todo: ITodo) => {
                    return (todo.id === action.payload.id)
                        ? {id: todo.id, description: todo.description, completed: !todo.completed}
                        : todo;
                })
            };
        case TodoActionTypes.TOGGLE_TODO_ERROR:
            return {...state, error: action.payload};
        case TodoActionTypes.FETCH_TODO_REQUEST:
            return {...state, loading: true};
        case TodoActionTypes.FETCH_TODO_SUCCESS:
            return {...state, loading: false, data: action.payload};
        case TodoActionTypes.FETCH_TODO_ERROR:
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
};

export {reducer as todoReducer};
