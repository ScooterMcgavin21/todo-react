import React, { Component } from 'react';
/** This component renders a form with one text input for the task to be created.
 *  When submitted, a new Todo component should be created.
 */

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    // deffaukt todo is an empty string
    this.state = { newTodoItem: "" };
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
    this.props.createTodo(this.state.newTodoItem);
    this.setState({ newTodoItem: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='newTodo'></label>
        <input
          type='text'
          placeholder='New Todo'
          id='newTodo'
          name='newTodoItem'
          value={this.state.newTodoItem}
          onChange={this.handleChange}
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default NewTodoForm;