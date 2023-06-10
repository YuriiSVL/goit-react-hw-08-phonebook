import { nanoid } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialContactsState = { contacts: [] };

const contactsSlise = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: initialContactsState,
  // Об'єкт редюсерів
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
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
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

// Генератори екшенів
export const { addContact, deleteContact } = contactsSlise.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlise.reducer;
