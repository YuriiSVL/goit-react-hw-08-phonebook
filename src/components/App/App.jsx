import React, { useEffect } from 'react';
import { ContactForm } from '../ContactFrom/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Felter/Filter';
import css from 'components/App/App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h2 className={css.container__title}>Phonebook</h2>
      <ContactForm />
      <h2 className={css.container__title}>Contacts</h2>
      <Filter />
      {isLoading && !error && (
        <b className={css.container__loading}> Loading your contacts...</b>
      )}
      <ContactList />
    </div>
  );
};
//
