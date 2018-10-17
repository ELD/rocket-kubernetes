import {connect} from "react-redux";
import {Dispatch} from "redux";
import {toggleTodo, VisibilityFilters} from "../actions";
import TodoList from "../components/TodoList";
import {IAppState, ITodo} from "../types/AppState";

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

const mapStateToProps = (state: IAppState) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    toggleTodo: (id: number) => dispatch(toggleTodo(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoList);
