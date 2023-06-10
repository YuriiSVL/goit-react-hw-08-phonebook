import { nanoid } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialContactsState = [];

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
