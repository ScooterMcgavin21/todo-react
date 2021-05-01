import React, { Component } from 'react';
/** Component displays a div with the task of the todo
 * For each Todo component, there will be a button with the text "X", when clicked, removed the todo.
 */
class Todo extends Component {
  render() {
    return (
      <div className='todo-item'> {this.props.todoItem}
        <span className='todo-icons'><i class="fas fa-pen"></i> <i class="fas fa-trash"></i></span>
      </div>
    );
  }
}

export default Todo;