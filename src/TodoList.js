import React, { Component } from 'react';
import Todo from './Todo'
/** renders NewTodoForm component and the list of todo components */
// state containing all todos in this component thereffor add constructor 
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{ todo: "Get a jerb" }, { todo: "Get a hairscut" }]
    };
  }

  render() {
    const list = this.state.list.map(item => (
      <Todo todoItem={item.todo} />
    ));
    return (
      <div>
        {list}
      </div>
    );
  }

}

export default TodoList;

