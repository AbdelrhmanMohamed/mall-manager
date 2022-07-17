import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ClientProfile } from "../client/grbc";
import { CLIENTS, RELATED_CUSTKEY } from "../proto/auth/gen/GoAuth_pb";
import { showNotification } from "app/store";

export interface userState {
  user: CLIENTS.AsObject;
  selectedUser: RELATED_CUSTKEY.AsObject;
  error?: string;
}
const profile = localStorage.getItem("profile");
// console.log(profile,'po')
let response: CLIENTS.AsObject;
export const getUserData = createAsyncThunk(
  "customerProfile",
  async (_, { rejectWithValue }) => {
    try {
      if (profile !== null) {
        response = JSON.parse(profile);
        // console.log(response, "response");
        return response;
      } else {
        response = await ClientProfile();
        return response;
      }
    } catch (err) {
      if (!err) {
        throw err;
      }
      showNotification(err.message, "error");
      return rejectWithValue(err.message);
    }
  }
);
let _p: CLIENTS.AsObject = JSON.parse(profile);
let selectedUser: RELATED_CUSTKEY.AsObject;
if ((_p?.relatedCustkeyList || []).length > 0) {
  selectedUser = _p.relatedCustkeyList[0];
}
const initialState: userState = {
  user: {} as CLIENTS.AsObject,
  selectedUser: selectedUser,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeUser(state, action) {
      state.selectedUser = action.payload.selectedUser;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserData.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
    builder.addCase(getUserData.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});
// Other code such as selectors can use the imported `RootState` type
// export const isLogged = (state: RootState) => state.login.user.succssed;
export const { changeUser } = userSlice.actions;
export default userSlice.reducer;
