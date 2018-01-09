import React from 'react';
import PropTypes from 'prop-types';

export default class AddUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: 'Pasha',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.saveUserNameInput = this.saveUserNameInput.bind(this);
  }

  handleFormSubmit(e) {
    const { addUser } = this.props;
    const { userName } = this.state;

    addUser(userName);
    e.preventDefault();
  }

  handleChange(e) {
    if (e.target.value.includes('r')) {
      return;
    }

    this.setState({
      userName: e.target.value,
    })
  }

  saveUserNameInput(input) {
    this.input = input;

    this.input.focus();
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input ref={this.saveUserNameInput} onChange={this.handleChange} value={this.state.userName} type="text" style={{border: '1px green solid'}} />
      </form>
    );
  }
}
