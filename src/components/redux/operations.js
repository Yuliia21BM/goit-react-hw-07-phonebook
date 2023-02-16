import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { nanoid } from 'nanoid';

const instance = axios.create({
  baseURL: 'https://63ee9f6d5e9f1583bdc58f87.mockapi.io',
});

// axios.defaults.baseURL = 'https://63ee9f6d5e9f1583bdc58f87.mockapi.io/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await instance.post('/contacts', {
        // id: nanoid(4),
        name,
        number,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await instance.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
