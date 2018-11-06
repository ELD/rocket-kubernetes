import * as React from 'react';
import {List} from "semantic-ui-react";
import {ITodo} from "../state/todos/types";

class Todo extends React.Component<ITodo, any> {
    constructor(props: ITodo) {
        super(props);

        this.render = this.render.bind(this);
    }

    public render() {
        return (
            <List.Item as="li"
                onClick={this.props.onClick}
                style={{
                    textDecoration: this.props.completed ? 'line-through' : 'none'
                }}
            >
                {this.props.description}
            </List.Item>
        );
    }
}

export default Todo;
