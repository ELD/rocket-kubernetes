import * as React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {Container, Form} from "semantic-ui-react";
import {postTodoRequest} from "../state/todos/actions";

interface IProps {
    dispatch: Dispatch;
}

interface IState {
    inputValue: string,
}

class AddTodo extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.updateInputValueState = this.updateInputValueState.bind(this);
        this.onTodoSubmit = this.onTodoSubmit.bind(this);

        this.state = {
            inputValue: "",
        }
    }

    public render() {
        return (
            <Container>
                <Form onSubmit={this.onTodoSubmit}>
                    <Form.Input
                        onChange={this.updateInputValueState}
                        value={this.state.inputValue}
                        type="text"
                        action="Add Todo"
                        placeholder="Add new todo..."
                    />
                </Form>
            </Container>
        );
    }

    private updateInputValueState(e: React.FormEvent<HTMLInputElement>) {
        this.setState({
            inputValue: e.currentTarget.value
        });
    }

    private onTodoSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!this.state.inputValue.trim()) {
            return;
        }
        this.props.dispatch(postTodoRequest(this.state.inputValue));
        this.setState({inputValue: ""});
    }
}

export default connect()(AddTodo);