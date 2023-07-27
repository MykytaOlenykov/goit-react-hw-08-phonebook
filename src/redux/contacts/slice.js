import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './operations';
import { logOut } from 'redux/auth/operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  isAdding: false,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    clearError: state => {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isAdding = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.pending, state => {
        state.error = null;
        state.isAdding = true;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isAdding = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const idx = state.items.findIndex(
          contact => contact.id === action.payload
        );
        state.items.splice(idx, 1);
      })
      .addCase(deleteContact.pending, state => {
        state.error = null;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        const idx = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(idx, 1, action.payload);
      })
      .addCase(updateContact.pending, state => {
        state.error = null;
      })
      .addCase(updateContact.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(logOut.fulfilled, state => {
        state.items = [];
      });
  },
});

export const { clearError } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
