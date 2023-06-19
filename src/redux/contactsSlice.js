// import { nanoid } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './operations';

// axios.defaults.baseURL = 'https://648f72eb75a96b66444525b8.mockapi.io';

// export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
//   const response = await axios.get('/contacts');
//   return response.data;
// });

const initialContactsState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlise = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  // Об'єкт редюсерів
  // reducers: {
  //   addContact: {
  //     reducer(state, action) {
  //       state.contacts.push(action.payload);
  //     },
  //     prepare(name, number) {
  //       return {
  //         payload: {
  //           id: nanoid(),
  //           name,
  //           number,
  //         },
  //       };
  //     },
  //   },
  //   deleteContact(state, action) {
  //     const index = state.contacts.findIndex(
  //       contact => contact.id === action.payload
  //     );
  //     state.contacts.splice(index, 1);
  //   },
  // },

  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
    // [toggleCompleted.pending]: handlePending,
    // [toggleCompleted.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   const index = state.contacts.findIndex(
    //     task => task.id === action.payload.id
    //   );
    //   state.contacts.splice(index, 1, action.payload);
    // },
    // [toggleCompleted.rejected]: handleRejected,
  },
});

// Генератори екшенів
// export const { addContact, deleteContact } = contactsSlise.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlise.reducer;
