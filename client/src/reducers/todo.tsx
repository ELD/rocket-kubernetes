import {TodoAction} from "../actions";
import {ADD_TODO, TOGGLE_TODO} from "../constants";
import {DefaultState, IAppState, ITodo} from "../types/AppState";

function todos(state: IAppState = DefaultState, action: TodoAction): IAppState {
    console.log('app state: ', state);
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: state.todos.push({
                    completed: false,
                    id: action.id,
                    text: action.text,
                }),
                ...state
            };
        case TOGGLE_TODO:
            return {
                todos: state.todos.map((todo: ITodo) => {
                    return (todo.id === action.id)
                        ? {...todo, completed: !todo.completed}
                        : todo;
                }),
                ...state
            };
        default:
            return state;
    }
}

export default todos;