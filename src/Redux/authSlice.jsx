import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  role: 'student',
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  dob: '',
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state) => {
      state.isLoggedIn = true;
    },
    logoutSuccess: (state) => {
      state.isLoggedIn = false;
    },
    isStudent: (state) => {
    state.role = 'student';
    },
    isTeacher: (state) => {
      state.role = 'Teacher';
    },
    setName: (state,{payload}) => {
      state.firstName = payload;
    },

  }
});

export const { loginSuccess, logoutSuccess , isStudent ,isTeacher, setName } = authSlice.actions;
export default authSlice.reducer;
