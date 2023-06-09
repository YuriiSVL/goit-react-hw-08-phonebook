import PropTypes from 'prop-types';
import css from 'components/ContactList/ContactList.module.css';
import { useSelector } from 'react-redux';

const ContactList = ({ onDeleteContact }) => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const getVisibleContacts = contacts => {
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return visibleContacts;
  };

  const visibleContacts = getVisibleContacts(contacts);

  return (
    <ul className={css.contactList}>
      {visibleContacts.map(contact => (
        <li className={css.contactListItem} key={contact.id}>
          <p>
            {contact.name}: {contact.number}
          </p>
          <button
            className={css.contactListBtn}
            type="button"
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};

export default ContactList;
