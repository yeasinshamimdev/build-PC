import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    open: false,
    signUp: false,
  },

  reducers: {
    setOpen: (state) => {
      state.open = !state.open
    },
    setSignUp: (state, payload) => {
      state.signUp = payload
    },
  }
})

export const { setOpen, setSignUp } = modalSlice.actions

export default modalSlice.reducer;