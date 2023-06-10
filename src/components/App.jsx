import React from 'react';
import { ContactForm } from './ContactFrom/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Felter/Filter';

export const App = () => {
  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
