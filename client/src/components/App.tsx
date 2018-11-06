import * as React from 'react';
import {Container, Header} from "semantic-ui-react";
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from "../containers/VisibleTodoList";
import './App.css';
import Footer from "./Footer";

class App extends React.Component {
  public render() {
    return (
        <Container style={{
            paddingTop: "40px",
        }}>
            <Header as="h1" textAlign="center">React Todo App</Header>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </Container>
    );
  }
}

export default App;
