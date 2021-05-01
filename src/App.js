import React, { Component } from 'react';
import TodoList from './TodoList';
import './App.css';
/** Component renders TodoList componemt */
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>To-Do App</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
