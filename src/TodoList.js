import React, { Component } from 'react';
import Todo from './Todo'
/** renders NewTodoForm component and the list of todo components */
// state containing all todos in this component thereffor add constructor 
class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Todo todoItem='Getter Done' />
      </div>
    );
  }

}

export default TodoList;