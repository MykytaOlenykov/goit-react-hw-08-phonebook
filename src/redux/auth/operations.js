import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = () => {};

const clearAuthHeader = () => {};

export const register = createAsyncThunk('auth/register', async credentials => {
  const response = await axios.post('user/signup', credentials);
  console.log(response);
});

export const logIn = createAsyncThunk('auth/logIn');

export const logOut = createAsyncThunk('auth/logOut');

export const refreshUser = createAsyncThunk('auth/refresh');
