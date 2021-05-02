import React, { Component } from 'react';
/** Component displays a div with the task of the todo
 * For each Todo component, there will be a button with the text "X", when clicked, removed the todo.
 */
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editTodo: false,
      todoItem: this.props.todoItem
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  // pass in removeTodo from the parent
  handleRemove() {
    this.props.removeTodo(this.props.id);
  }
  // toggles the form when clicking ont he edit
  toggleForm() {
    this.setState({ editTodo: !this.state.editTodo });
  }
  // submits the edit form
  handleUpdate(evt) {
    evt.preventDefault();
    // take new todoItem data and pass up to the the parent
    this.props.updateTodos(this.props.id, this.state.todoItem);
    this.setState({ editTodo: false });
  }
  handleChange(evt) {
    // runs on every keystroke event
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  render() {

    let displayItem;
    if (this.state.editTodo) {
      displayItem = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input
              type="text"
              value={this.state.todoItem}
              name="todoItem"
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      )
    } else {
      displayItem = (
        <div className='todo-item'> {this.props.todoItem}
          <span className='todo-icons'><i className="fas fa-pen" onClick={this.toggleForm}></i> <i className="fas fa-trash" onClick={this.handleRemove}></i></span>
        </div>
      );
    }
    return displayItem;
  }
}

export default Todo;
