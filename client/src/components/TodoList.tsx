import * as React from 'react';
import {List} from "semantic-ui-react";
import {ITodo} from "../state/todos/types";
import Todo from "./Todo";

interface IProps {
    todos: ITodo[],
    fetchTodos: () => void,
    toggleTodo: (todo: ITodo) => void,
}

class TodoList extends React.Component<IProps, any> {
    constructor(props: IProps) {
        super(props);
    }

    public componentDidMount() {
        if (this.props.todos.length !== 0) {
            return;
        }

        this.props.fetchTodos();
    }

    public render() {
        return(
            <List as="ul">
                {this.props.todos.map((todo: ITodo) =>
                    <Todo
                        key={todo.id}
                        onClick={this.handleOnClick(todo)}
                        {...todo}
                    />
                )}
            </List>
        );
    }

    private handleOnClick(todo: ITodo) {
        return (() => this.props.toggleTodo(todo));
    }
}

export default TodoList;
