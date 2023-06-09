import { createAction, nanoid } from '@reduxjs/toolkit';
export const addContact = createAction('tasks/addContact', (name, number) => {
  return {
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
});

// export const addContact = (name, number) => {
//   return {
//     type: 'contacts/addContact',
//     payload: {
//       id: nanoid(),
//       name,
//       number,
//     },
//   };
// };

export const deleteContact = createAction('contacts/deleteContact');

// export const deleteContact = contactId => {
//   return {
//     type: 'contacts/deleteContact',
//     payload: contactId,
//   };
// };

export const setFilter = createAction('filter/setFilter');

// export const setFilter = filterValue => {
//   return {
//     type: 'filter/setFilter',
//     payload: filterValue,
//   };
// };
