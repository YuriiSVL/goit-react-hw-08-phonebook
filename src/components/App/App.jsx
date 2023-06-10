import React from 'react';
import { ContactForm } from '../ContactFrom/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Felter/Filter';
import css from 'components/App/App.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <h2 className={css.container__title}>Phonebook</h2>
      <ContactForm />
      <h2 className={css.container__title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
//
