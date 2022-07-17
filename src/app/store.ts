import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import snackbarSlice, { showSnackbar } from "../redux/snackbarSlice";
import { AlertProps } from "@mui/material/Alert";

export const store = configureStore({
  reducer: {
    notification: snackbarSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const showNotification = (
  msg: string,
  severity?: AlertProps["severity"]
) => {
  store.dispatch(showSnackbar({ message: msg, type: severity, count: 0 }));
};
