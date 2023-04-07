import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm';
import { GlobalStyle } from 'components/GlobalStyle';
import {
  Container,
  PrimaryTitle,
  SecondaryTitle,
  SearchInput,
  List,
  Item,
} from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = e => {
    const { value } = e.target;

    this.setState({ filter: value });
  };

  addContact = ({ name, number }) => {
    const newContact = { id: nanoid(), name, number };

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  getFilterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilterContacts();

    return (
      <Container>
        <GlobalStyle />
        <PrimaryTitle>Phonebook</PrimaryTitle>

        <ContactForm onSubmit={this.addContact} />

        <SecondaryTitle>Contacts</SecondaryTitle>

        <p>Find contacts by name</p>
        <SearchInput
          onChange={this.handleChange}
          value={filter}
          name="filter"
          type="text"
        />

        <List>
          {filteredContacts.map(({ id, name, number }) => (
            <Item key={id}>
              <p>
                {name}: {number}
              </p>
            </Item>
          ))}
        </List>
      </Container>
    );
  }
}
