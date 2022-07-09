function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name} : {number}
          </p>
          <button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;

// if (contact.length < 0) {
//   return;
// } else {contacts.map(contact => (
//   <li key={contact.id}>
//     {contact.name} : {contact.number}
//   </li>
// ));}
