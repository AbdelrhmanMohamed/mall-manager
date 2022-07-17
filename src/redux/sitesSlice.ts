import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { showNotification } from "app/store";
import { GetSites } from "../client/grbc";
import { SITES } from "../proto/auth/gen/GoAuth_pb";

export interface SitesState {
  sites: Array<SITES.AsObject>;
  error: null | string;
}

export const getSites = createAsyncThunk(
  "getSites",
  async (_, { rejectWithValue }) => {
    const sites = localStorage.getItem("sites");
    let response: Array<SITES.AsObject> = [];
    try {
      if (sites !== null) {
        response = JSON.parse(sites);
        return response;
      } else {
        response = await GetSites();
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
  sites: [],
  error: null,
};

const sitesSlice = createSlice({
  name: "sites",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSites.fulfilled, (state, { payload }) => {
      let sitesWithoutHead = payload.filter((a) => a.code !== 0);
      state.sites = sitesWithoutHead;
    });
    builder.addCase(getSites.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export default sitesSlice.reducer;
