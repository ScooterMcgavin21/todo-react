import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo'
/** renders NewTodoForm component and the list of todo components */
// state containing all todos in this component thereffor add constructor 
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{ todo: "Get a jerb" }, { todo: "Get a hairscut" }]
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
    const todoList = this.state.list.map(item => {
      return <Todo todoItem={item.todo} />;
    });
    return (
      <div>
        <NewTodoForm createTodo={this.create} />
        {todoList}

      </div>
    );
  }

}

export default TodoList;

