import React from 'react';
// import PropTypes from 'prop-types';
import css from 'components/ContactFrom/ContactForm.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const onSubmit = (name, number) => {
    const alreadyAddedContact = contacts.find(contact => name === contact.name);
    if (alreadyAddedContact) {
      alert(`${alreadyAddedContact.name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number }));
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    console.log(name, number);
    onSubmit(name, number);
    reset();
  };

  return (
    <form className={css.contactForm} onSubmit={handleFormSubmit}>
      <label>
        Name{' '}
        <input
          className={css.contactFormInput}
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label>
        Number{' '}
        <input
          className={css.contactFormInput}
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          placeholder="Phone number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit" className={css.contactFormBtn}>
        Add contact
      </button>
    </form>
  );
};

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func,
// };
