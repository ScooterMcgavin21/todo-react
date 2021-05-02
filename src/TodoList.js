import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo'

/** renders NewTodoForm component and the list of todo components */
// state containing all todos in this component thereffor add constructor 
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //list: [{ todoItem: "Get a jerb" }, { todoItem: "Get a hairscut" }]
      list: []
    };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
  }
  // Takes newTodo object and adds into todos state
  create(newTodo) {
    this.setState({
      list: [...this.state.list, newTodo]
    });
  }
  // Removes a Todo given the ID
  remove(id) {
    this.setState({
      list: this.state.list.filter(item => item.id !== id)
    });
  }

  render() {
    // Iterates over each Todo item in the state.list array and builds each Todo item to render below  
    const list = this.state.list.map(item => {
      return <Todo
        key={item.id}
        id={item.id}
        todoItem={item.todoItem}
        removeTodo={this.remove}
      />;
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


