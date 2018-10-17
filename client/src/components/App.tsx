import * as React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from "../containers/VisibleTodoList";
import './App.css';
import Footer from "./Footer";

class App extends React.Component {
  public render() {
    return (
        <div>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </div>
    );
  }
}

export default App;
