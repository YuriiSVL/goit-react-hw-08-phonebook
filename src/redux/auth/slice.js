// import {
//   handleAuthFullfiled,
//   handleAuthPending,
//   handleAuthRejected,
// } from './authHandlers';
import { logIn, logOut, refreshUser, register } from './operations';
const { createSlice, isAnyOf } = require('@reduxjs/toolkit');

const initialState = {
  user: { name: null, email: null },
  error: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isFetching: false,
};

export const handleAuthPending = state => {
  state.isFetching = true;
};
export const handleAuthFullfiled = (state, { payload }) => {
  state.isFetching = false;
  state.isLoggedIn = true;
  state.user = payload.user;
  state.token = payload.token;
};

export const handleAuthRejected = (state, { payload }) => {
  state.isFetching = false;
  state.error = payload;
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logOut.fulfilled, state => {
        state.isFetching = false;
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
      })
      .addMatcher(
        isAnyOf(register.pending, logIn.pending, logOut.pending),
        handleAuthPending
      )
      .addMatcher(
        isAnyOf(register.fulfilled, logIn.fulfilled),
        handleAuthFullfiled
      )
      .addMatcher(
        isAnyOf(register.rejected, logIn.rejected, logOut.rejected),
        handleAuthRejected
      );
  },
});

export const authReducer = authSlice.reducer;
