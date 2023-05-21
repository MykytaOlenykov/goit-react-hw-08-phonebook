import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authApi = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase('fulfield', () => {});
  },
});
