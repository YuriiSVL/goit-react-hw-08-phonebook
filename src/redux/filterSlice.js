import { createSlice } from '@reduxjs/toolkit';

const initialFilterState = '';

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
