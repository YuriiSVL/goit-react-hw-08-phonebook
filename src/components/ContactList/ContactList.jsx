import PropTypes from 'prop-types';
import css from 'components/ContactList/ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
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
