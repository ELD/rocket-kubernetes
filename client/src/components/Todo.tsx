import * as React from 'react';

interface IProps {
    onClick: () => void,
    completed: boolean,
    text: string,
}

class Todo extends React.Component<IProps, any> {
    constructor(props: IProps) {
        super(props);

        this.render = this.render.bind(this);
    }

    public render() {
        return (
            <li
                onClick={this.props.onClick}
                style={{
                    textDecoration: this.props.completed ? 'line-through' : 'none'
                }}
            >
                {this.props.text}
            </li>
        );
    }
}

export default Todo;
