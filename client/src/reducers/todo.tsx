import {TodoAction} from "../actions";
import {ADD_TODO, TOGGLE_TODO} from "../constants";
import {DefaultState, ITodo} from "../types/AppState";

function todos(state: ITodo[] = DefaultState.todos, action: TodoAction): ITodo[] {
    console.log('app state: ', state);
    switch (action.type) {
        case ADD_TODO:
            state.push({
                completed: false,
                id: action.id,
                text: action.text
            });
            return state;
        case TOGGLE_TODO:
            state = state.map((todo: ITodo) => {
                return (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo;
            });
            return state;
        default:
            return state;
    }
}

export default todos;