// Оголоси наступні операції:

// fetchContacts - одержання масиву контактів (метод GET) запитом. Базовий тип екшену "contacts/fetchAll".
// addContact - додавання контакту (метод POST). Базовий тип екшену "contacts/addContact".
// deleteContact - видалення контакту (метод DELETE). Базовий тип екшену "contacts/deleteContact"

import axios from 'axios';
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
  addContactInStore,
  deleteContactInStore,
} from './contactsSlice';

axios.defaults.baseURL = 'https://646778682ea3cae8dc2ff5ca.mockapi.io';

export const fetchContacts = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.get('/contacts');
    dispatch(fetchingSuccess(response.data));
  } catch (error) {
    dispatch(fetchingError(error.message));
  }
};

export const addContact =
  ({ name, number }) =>
  async dispatch => {
    try {
      dispatch(fetchingInProgress());
      const response = await axios.post('/contacts', {
        name,
        number,
      });
      dispatch(addContactInStore(response.data));
    } catch (error) {
      dispatch(fetchingError(error.message));
    }
  };

export const deleteContact = contactId => async dispatch => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.delete(`/contacts/${contactId}`);
    dispatch(deleteContactInStore(response.data.id));
  } catch (error) {
    dispatch(fetchingError(error.message));
  }
};
