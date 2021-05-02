import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo'
/** renders NewTodoForm component and the list of todo components */
// state containing all todos in this component thereffor add constructor 
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{ todoItem: "Get a jerb" }, { todoItem: "Get a hairscut" }]
    };
    this.create = this.create.bind(this);
  }
  // Takes newTodo object and adds into todos state
  create(newTodo) {
    this.setState({
      list: [...this.state.list, newTodo]
    });
  }

  render() {
    const list = this.state.list.map(item => {
      return <Todo todoItem={item.todoItem} />;
    });
    return (
      <div>
        <NewTodoForm createTodo={this.create} />
        <ul>{list}</ul>

      </div>
    );
  }

}

export default TodoList;

