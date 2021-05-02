import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
/** This component renders a form with one text input for the task to be created.
 *  When submitted, a new Todo component should be created.
 */

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    // deffaukt todo is an empty string
    this.state = { todoItem: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    // runs on every keystroke event
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createTodo({ ...this.state, id: uuidv4() });
    this.setState({ todoItem: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='todoItem'>New Todo</label>
        <input
          type='text'
          placeholder='New Todo'
          id='todoItem'
          name='todoItem'
          value={this.state.todoItem}
          onChange={this.handleChange}
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default NewTodoForm;
