import React from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactFrom/ContactFrom';
import ContactList from './ContactList/ContactList';
import Filter from './Felter/Felter';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = data => {
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };
    const alreadyAddedContact = this.state.contacts.find(
      contact => data.name === contact.name
    );
    if (alreadyAddedContact) {
      alert(`${alreadyAddedContact.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return visibleContacts;
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleContacts} />
      </div>
    );
  }
}
