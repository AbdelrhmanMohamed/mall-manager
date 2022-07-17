import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { showNotification } from "app/store";
import { APP_CATEGORY_TYPE } from "proto/mobileservice/ts/mobileService_pb";
import { GetGategoryTypes } from "../client/grbc";

export interface GategoryState {
  gategoryTypes: Array<APP_CATEGORY_TYPE.AsObject>;
  error: null | string;
}

export const getAppTypesGategory = createAsyncThunk(
  "GetGategoryTypes",
  async (_, { rejectWithValue }) => {
    const categoryTypes = localStorage.getItem("categoryTypes");
    let response: Array<APP_CATEGORY_TYPE.AsObject> = [];
    try {
      if (categoryTypes !== null) {
        response = JSON.parse(categoryTypes);
        return response;
      } else {
        let items = await GetGategoryTypes();
        response = items.itemsList;
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

const initialState: GategoryState = {
  gategoryTypes: [],
  error: null,
};

const gategoryTypesSlice = createSlice({
  name: "gategoryTypes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAppTypesGategory.fulfilled, (state, { payload }) => {
      state.gategoryTypes = payload;
    });
    builder.addCase(getAppTypesGategory.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export default gategoryTypesSlice.reducer;
