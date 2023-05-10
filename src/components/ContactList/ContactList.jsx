const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <p>{contact.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
