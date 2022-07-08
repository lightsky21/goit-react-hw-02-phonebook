import React, { Component } from 'react';
import { nanoid } from 'nanoid';


import ContactsForm from "./ContactsForm";
// import Filter from "./Filter";
import ContactList from "./ContactList";



export class App extends Component {

  state = {
  contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
  
  }
  
  addContact = ({name, number}) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    }

    this.setState(({contacts}) => ({
      contacts: [contact, ...contacts]
    }))
  }
  
  render() {
    const { contacts } = this.state;
    return (
      (<div>
  <h1>Phonebook</h1>
        <ContactsForm onSubmit={ this.addContact}/>

  <h2>Contacts</h2>
  {/* <Filter /> */}
        <ContactList contacts={contacts } />
</div>)
    )
  }
};
