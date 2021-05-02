import React, { Component } from 'react';
/** Component displays a div with the task of the todo
 * For each Todo component, there will be a button with the text "X", when clicked, removed the todo.
 */
class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }
  // pass in removeTodo from the parent
  handleRemove() {
    this.props.removeTodo(this.props.id);
  }
  render() {
    return (
      <div className='todo-item'> {this.props.todoItem}
        <span className='todo-icons'><i className="fas fa-pen"></i> <i className="fas fa-trash" onClick={this.handleRemove}></i></span>
      </div>
    );
  }
}

export default Todo;
