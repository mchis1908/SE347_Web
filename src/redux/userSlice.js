import { createSlice } from '@reduxjs/toolkit';

const init = {
  user: '',
  role: '',
  sdt: '',
  tennv: ''
};
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: init,
    pathHome: null,
    pathInvoice: null,
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = init;
    },
    setPathHome: (state, action) => {
      state.pathHome = action.payload;
    },
    setPathInvoice: (state, action) => {
      state.pathInvoice = action.payload;
    },
  },
});

export const { login, logout, setPathHome, setPathInvoice  } = userSlice.actions;
export default userSlice.reducer;
