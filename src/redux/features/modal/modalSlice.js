import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    open: false
  },

  reducers: {
    setOpen: (state) => {
      state.open = !state.open
    }
  }
})

export const { setOpen } = modalSlice.actions

export default modalSlice.reducer;