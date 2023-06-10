import React from 'react';
import { ContactForm } from './ContactFrom/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Felter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from 'redux/contactsSlice';

export const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts);

  const addContact1 = (name, number) => {
    const alreadyAddedContact = contacts.find(contact => name === contact.name);
    if (alreadyAddedContact) {
      alert(`${alreadyAddedContact.name} is already in contacts`);
      return;
    }

    dispatch(addContact(name, number));
  };

  const deleteContact1 = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm onSubmit={addContact1} />
      <h2>Contacts</h2>
      <Filter />
      <ContactList onDeleteContact={deleteContact1} />
    </div>
  );
};
