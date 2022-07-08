function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name} : {contact.number}
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
