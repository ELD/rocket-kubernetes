import {TodoAction} from "../actions";
import {ADD_TODO, TOGGLE_TODO} from "../constants";
import {DefaultState, ITodo} from "../types/AppState";

function todos(state: ITodo[] = DefaultState.todos, action: TodoAction): ITodo[] {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    completed: false,
                    id: action.id,
                    text: action.text
                }
            ];
        case TOGGLE_TODO:
            return state.map((todo: ITodo) => {
                return (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo;
            });
        default:
            return state;
    }
}

export default todos;