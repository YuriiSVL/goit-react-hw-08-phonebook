import { nanoid } from 'nanoid';
import { configureStore, createReducer } from '@reduxjs/toolkit';
// import { addContact, deleteContact } from './contacts/actions';
// import { setFilter } from './contacts/actions';
import { createSlice } from '@reduxjs/toolkit';

const initialContactsState = [];
const initialFilterState = '';

const contactsSlise = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: initialContactsState,
  // Об'єкт редюсерів
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

// Генератори екшенів
export const { addContact, deleteContact } = contactsSlise.actions;
// Редюсер слайсу
export const contactsReduser = contactsSlise.reducer;

const filterSlise = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    setFilter(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const { setFilter } = filterSlise.actions;
export const filterReduser = filterSlise.reducer;

// const contactsReduser = createReducer(initialContactsState, {
//   [addContact]: (state, action) => {
//     state.push(action.payload);
//   },
//   [deleteContact]: (state, action) => {
// const index = state.findIndex(contact => contact.id === action.payload);
// state.splice(index, 1);
//   },
// });

// const filterReduser = createReducer(initialFilterState, {
//   [setFilter]: (state, action) => {
//     state = action.payload;
//     return state;
//   },
// });

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filter: filterReduser,
  },
});
