import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetAdminProfile } from "../client/grbc";
import { ADMINS } from "../proto/auth/gen/GoAuth_pb";

export interface userState {
  admin: ADMINS.AsObject;
  error?: string;
}

export const getAdminProfile = createAsyncThunk("adminProfile", async () => {
  const response = await GetAdminProfile();
  return response;
});
const initialState: userState = {
  admin: {} as ADMINS.AsObject,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAdminProfile.fulfilled, (state, { payload }) => {
      state.admin = payload;
    });
    builder.addCase(getAdminProfile.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});
// Other code such as selectors can use the imported `RootState` type
// export const isLogged = (state: RootState) => state.login.user.succssed;
export default adminSlice.reducer;
