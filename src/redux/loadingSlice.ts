import { createSlice } from "@reduxjs/toolkit";

export interface loadingState {
  show?: boolean;
}

const initialState: loadingState = {
  show: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    show: (state) => {
      state.show = true;
    },
    hide: (state) => {
      state.show = false;
    },
  },
});
export const { show, hide } = loadingSlice.actions;

export default loadingSlice.reducer;
