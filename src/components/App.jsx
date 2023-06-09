import React from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactFrom/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Felter/Filter';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { addContact, deleteContact, setFilter } from 'store/contacts/actions';
import { addContact, deleteContact, setFilter } from 'store';

export const App = () => {
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  //   console.log(contacts);
  // }, [contacts]);

  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);

  const addContact1 = (name, number) => {
    // const contact = {
    //   id: nanoid(),
    //   name,
    //   number,
    // };

    const alreadyAddedContact = contacts.find(contact => name === contact.name);
    if (alreadyAddedContact) {
      alert(`${alreadyAddedContact.name} is already in contacts`);
      return;
    }
    // setContacts(prevState => [contact, ...prevState]);

    dispatch(addContact(name, number));
  };

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
    // setFilter(e.currentTarget.value);
  };

  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   const visibleContacts = contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  //   return visibleContacts;
  // };

  const deleteContact1 = contactId => {
    // setContacts(prevState =>
    //   prevState.filter(contact => contact.id !== contactId)
    // );
    dispatch(deleteContact(contactId));
  };

  // const visibleContacts = getVisibleContacts();
  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm onSubmit={addContact1} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        // contacts={visibleContacts}
        onDeleteContact={deleteContact1}
      />
    </div>
  );
};
