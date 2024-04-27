import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isQuizzies: true, 
};

const quizziesSlice = createSlice({
  name: 'quizzies',
  initialState,
  reducers: {
    setQuizzies: (state, action) => {
      state.isQuizzies = action.payload; 
    }
  }
});

export const { setQuizzies } = quizziesSlice.actions;
export default quizziesSlice.reducer;
