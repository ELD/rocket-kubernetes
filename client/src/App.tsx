import * as React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';

class App extends React.Component {
  public render() {
    return (
        <div>
            <AddTodo />
            {/*<VisibleTodoList />*/}
            {/*<Footer />*/}
        </div>
    );
  }
}

export default App;
