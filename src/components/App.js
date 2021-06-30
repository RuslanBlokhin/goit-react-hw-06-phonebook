import React from 'react';
import Form from './form/Form.js';
import Filter from './filter/Filter';
import Container from './container/Container';
import ContactsList from './contactList/ContactList';
import ContactsListItem from './contactList/contactListItem/ContactListItem';

class App extends React.Component {
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Endy Rhoads', number: '454-67-34' },
  //     { id: 'id-2', name: 'Cliff Burton', number: '778-45-34' },
  //     { id: 'id-3', name: 'Eddie Van Halen', number: '787-23-77' },
  //     { id: 'id-4', name: 'Chuck Schuldiner', number: '366-45-20' },
  //   ],
  //   filter: '',
  // };

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  // handleChange = event => {
  //   const { name, value } = event.currentTarget;
  //   this.setState({ [name]: value });
  // };

  // addContact = contact => {
  //   if (!this.hasContacts(contact.name)) {
  //     this.setState(({ contacts }) => ({
  //       contacts: [contact, ...contacts],
  //     }));
  //   } else {
  //     alert(`${contact.name} is already in contacts`);
  //   }
  // };

  // hasContacts = name => {
  //   return this.state.contacts.find(contact => {
  //     return contact.name.toLocaleLowerCase() === name.toLocaleLowerCase();
  //   });
  // };

  // findContact = () => {
  //   const { filter, contacts } = this.state;
  //   const normalizedFilter = filter.toLocaleLowerCase();

  //   if (filter.length) {
  //     return contacts.filter(contact =>
  //       contact.name.toLowerCase().includes(normalizedFilter),
  //     );
  //   } else {
  //     return contacts;
  //   }
  // };

  // deleteContact = contactId => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  //   }));
  // };

  render() {
    return (
      <Container>
        <h1>PhoneBook</h1>
        <Form />

        <div>
          <h2>Contacts</h2>
          <Filter />
          <ContactsList>
            <ContactsListItem />
          </ContactsList>
        </div>
      </Container>
    );
  }
}

export default App;

// const mapStateToProps = (state) => {
//   return {
//     value: state.value,
//   };
// };
