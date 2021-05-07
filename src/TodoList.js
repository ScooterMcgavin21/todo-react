import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';

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
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
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
  // updates Todo, take the id and change the todo to whats passed
  update(id, updateTodo) {
    const updatedTodo = this.state.list.map(item => {
      if (item.id === id) {
        return { ...item, todoItem: updateTodo }
      }
      return item;
    });
    this.setState({ list: updatedTodo });
  }
  // Toggles completion
  toggleCompletion(id) {
    const updatedTodo = this.state.list.map(item => {
      if (item.id === id) {
        return { ...item, complete: !item.complete }
      }
      return item;
    });
    this.setState({ list: updatedTodo });
  }
  render() {
    // Iterates over each Todo item in the state.list array and builds each Todo item to render below  
    const list = this.state.list.map(item => {
      return (
        <Todo
          key={item.id}
          id={item.id}
          todoItem={item.todoItem}
          complete={item.complete}
          removeTodo={this.remove}
          updateTodos={this.update}
          toggleTodo={this.toggleCompletion}
        />
      );
    });
    return (
      <div className='TodoList'>
        <h1>
          Todo List <span>Todo List App with React</span>
        </h1>
        <ul>{list}</ul>
        <NewTodoForm createTodo={this.create} />
      </div>
    );
  }

}

export default TodoList;


