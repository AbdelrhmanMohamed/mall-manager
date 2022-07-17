import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { showNotification } from "app/store";
import { GetApplicationTypes } from "../client/grbc";
import {
  APPLICATION_TYPE_REQUEST,
  APP_APPLICATION_TYPE,
} from "../proto/mobileservice/ts/mobileService_pb";
// import { show, hide } from "./loadingSlice";

export interface SitesState {
  apptypes: Array<APP_APPLICATION_TYPE.AsObject>;
  error: null | string;
  loading: "idle" | "pending" | "succeeded" | "failed";
  currentRequestId?: string;
}

export const getAppTypes = createAsyncThunk(
  "getAppTypes",
  async (
    obj: APPLICATION_TYPE_REQUEST.AsObject,
    { dispatch, rejectWithValue }
  ) => {
    const apptypes = localStorage.getItem("apptypes");
    let response: Array<APP_APPLICATION_TYPE.AsObject> = [];
    try {
      if (apptypes !== null) {
        response = JSON.parse(apptypes);
        return response;
      } else {
        response = await GetApplicationTypes(obj);
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

const initialState: SitesState = {
  apptypes: [],
  error: null,
  loading: "idle",
};

const apptypesSlice = createSlice({
  name: "apptypes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAppTypes.pending, (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
        state.currentRequestId = action.meta.requestId;
      }
    });
    builder.addCase(getAppTypes.fulfilled, (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === "pending" && state.currentRequestId === requestId) {
        state.loading = "idle";
        state.apptypes.push(...action.payload);
        state.currentRequestId = undefined;
      }
    });
    builder.addCase(getAppTypes.rejected, (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === "pending" && state.currentRequestId === requestId) {
        state.loading = "idle";
        state.error = action.error.message;
        state.currentRequestId = undefined;
      }
    });
  },
});

export default apptypesSlice.reducer;
