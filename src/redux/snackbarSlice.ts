import { AlertProps } from "@mui/material/Alert";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface notificationsState {
  message?: string;
  type?: AlertProps["severity"];
  count: number;
}

const initialState: notificationsState = {
  count: 0,
};

const snackbarSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    showSnackbar: (state, action: PayloadAction<notificationsState>) => {
      state.message = action.payload.message;
      state.count = state.count + 1;
      state.type = action.payload.type;
    },
    closeSnackbar: (state) => {
      state.count = 0;
      state.message = "";
    },
  },
});
export const { showSnackbar, closeSnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;
