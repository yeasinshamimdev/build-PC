import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  processor: null,
  motherboard: null,
  ram: null,
  gpu: null,
  powerSupply: null,
  ssd: null,
  monitor: null,
  keyboard: null,
  mouse: null,
  casing: null
}

export const buildPCSlice = createSlice({
  name: 'buildPC',
  initialState,

  reducers: {
    setComponent: (state, action) => {
      const { componentType, payload } = action.payload;
      state[componentType] = payload;
    },
    removeComponent: (state, action) => {
      const componentType = action.payload;
      state[componentType] = null;
    },
  }
})

export const { setComponent, removeComponent } = buildPCSlice.actions

export default buildPCSlice.reducer;
