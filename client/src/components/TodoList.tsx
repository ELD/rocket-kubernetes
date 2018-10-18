import * as React from 'react';
import {ITodo} from "../types/AppState";
import Todo from "./Todo";

interface IProps {
    todos: ITodo[],
    toggleTodo: (id: number) => void,
}

class TodoList extends React.Component<IProps, any> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        return(
            <ul>
                {this.props.todos.map((todo: ITodo) =>
                    <Todo
                        key={todo.id}
                        onClick={this.handleOnClick(todo)}
                        {...todo}
                    />
                )}
            </ul>
        );
    }

    private handleOnClick(todo: ITodo) {
        return (() => this.props.toggleTodo(todo.id));
    }
}

export default TodoList;
