import {connect} from "react-redux";
import {Dispatch} from "redux";
import TodoList from "../components/TodoList";
import {IApplicationState} from "../state";
import {fetchTodoRequest, toggleTodoRequest} from "../state/todos/actions";
import {ITodo} from "../state/todos/types";
import {VisibilityFilters} from "../state/visibility/types";

const getVisibleTodos = (todos: ITodo[], filter: VisibilityFilters) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        default:
            throw new Error(`Unknown filter: ${filter}`);
    }
};

const mapStateToProps = (state: IApplicationState) => ({
    todos: getVisibleTodos(state.todos.data, state.visibility.filter)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    fetchTodos: () => dispatch(fetchTodoRequest()),
    toggleTodo: (todo: ITodo) => dispatch(toggleTodoRequest(todo)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoList);
