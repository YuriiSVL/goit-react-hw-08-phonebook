import { ContactForm } from 'components/ContactFrom/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import css from 'components/App/App.module.css';

const Contacts = () => {
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

export default Contacts;
