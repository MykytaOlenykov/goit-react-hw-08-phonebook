import { createSlice } from '@reduxjs/toolkit';

// fetchContacts - одержання масиву контактів (метод GET) запитом. Базовий тип екшену "contacts/fetchAll".
// addContact - додавання контакту (метод POST). Базовий тип екшену "contacts/addContact".
// deleteContact - видалення контакту (метод DELETE). Базовий тип екшену "contacts/deleteContact"

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleGetContacts = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const handleAddContact = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
};

const handleDeleteContact = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const idx = state.items.findIndex(contact => contact.id === action.payload);
  state.items.splice(idx, 1);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  reducers: {
    fetchingInProgress: handlePending,
    fetchingSuccess: handleGetContacts,
    fetchingError: handleRejected,
    addContactInStore: handleAddContact,
    deleteContactInStore: handleDeleteContact,
  },
});

export const {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
  addContactInStore,
  deleteContactInStore,
} = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
