import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsInitialState = {
  contacts: [
    // { id: 'id-1', name: 'Rosie Simpson', number: '4591256' },
    // { id: 'id-2', name: 'Hermione Kline', number: '4438912' },
    // { id: 'id-3', name: 'Eden Clements', number: '6451779' },
    // { id: 'id-4', name: 'Annie Copeland', number: '2279126' },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      const { name, number } = action.payload;
      state.contacts.push({ id: nanoid(4), name, number });
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;
