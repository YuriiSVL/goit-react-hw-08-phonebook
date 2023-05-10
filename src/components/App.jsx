import React from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactFrom/ContactFrom';
import ContactList from './ContactList/ContactList';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = contactName => {
    const contact = {
      id: nanoid(),
      name: contactName,
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}
