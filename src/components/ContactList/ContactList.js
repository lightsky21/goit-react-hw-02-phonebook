// import { Btn } from 'components/Components.styled';

import { ListItem, ListItemText, ListItemBtn } from './ContactList.styled';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <ListItemText>
            {name} : {number}
          </ListItemText>
          <ListItemBtn type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </ListItemBtn>
        </ListItem>
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
