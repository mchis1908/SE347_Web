import { createSlice } from '@reduxjs/toolkit';

const init = {
  user: '',
  role: '',
};
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: init,
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = init;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
