import React from 'react';

export default class ContactForm extends React.Component {
  state = {
    contactName: '',
  };

  handleInputChange = event => {
    this.setState({ contactName: event.currentTarget.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.contactName);
    this.reset();
  };

  reset = () => {
    this.setState({
      contactName: '',
    });
  };

  render() {
    return (
      <form className="ContactForm" onSubmit={this.handleFormSubmit}>
        <label>
          Name{' '}
          <input
            value={this.state.contactName}
            onChange={this.handleInputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}
