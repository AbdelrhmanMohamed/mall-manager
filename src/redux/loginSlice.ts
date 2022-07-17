import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";
import { Login, setCookie, LoginAdmin } from "../client/grbc";
import {
  AdminSignInRequest,
  LoginRequest,
  LoginResponse,
} from "../proto/auth/gen/GoAuth_pb";

export interface LoginState {
  user: LoginResponse.AsObject;
}

export const signin = createAsyncThunk(
  "signin",
  async (loginReq: LoginRequest.AsObject) => {
    const response = await Login(loginReq);
    return response;
  }
);
export const signinAdmin = createAsyncThunk(
  "signinAdmin",
  async (loginReq: AdminSignInRequest.AsObject) => {
    const response = await LoginAdmin(loginReq);
    return response;
  }
);
const initialState: LoginState = {
  user: {},
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = {};
      setCookie("pToken", null, true); //clear token from cookies
      localStorage.removeItem("profile");
      localStorage.removeItem("withCustkey");
      localStorage.removeItem("active");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signin.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
    builder.addCase(signin.rejected, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(signinAdmin.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
    builder.addCase(signinAdmin.rejected, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const { logout } = loginSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const isLogged = (state: RootState) => state.login.user.succssed;

export default loginSlice.reducer;
