import * as React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {addTodo} from "../actions";

interface IProps {
    dispatch: Dispatch;
}

class AddTodo extends React.Component<IProps, any> {
    private todoInputRef = React.createRef<HTMLInputElement>();

    constructor(props: IProps) {
        super(props);
        this.onTodoSubmit = this.onTodoSubmit.bind(this);
    }

    public render() {
        return (
            <div>
                <form onSubmit={this.onTodoSubmit}>
                    <input ref={this.todoInputRef} type="text" />
                    <button type="submit">
                        Add Todo
                    </button>
                </form>
            </div>
        );
    }

    private onTodoSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!this.todoInputRef.current!.value.trim()) {
            return;
        }
        this.props.dispatch(addTodo(this.todoInputRef.current!.value));
        this.todoInputRef.current!.value = '';
    }
}

export default connect()(AddTodo);