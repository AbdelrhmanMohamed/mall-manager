import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GET_DATASOURCES_LIST } from "../client/grbc";
import { APP_DATASOURCE_RELATED } from "../proto/mobileservice/ts/mobileService_pb";
import { show, hide } from "./loadingSlice";

export interface DataSourcsesState {
  dataSourcsesList: Array<APP_DATASOURCE_RELATED.AsObject>;
  errors: any;
}

export const getDataSources = createAsyncThunk(
  "get_datasources",
  async (_, { dispatch }) => {
    dispatch(show());
    try {
      const response = await GET_DATASOURCES_LIST();
      dispatch(hide());
      return response;
    } catch {
      dispatch(hide());
    }
  }
);

const initialState: DataSourcsesState = {
  dataSourcsesList: [],
  errors: "",
};

const dataSourcesSlice = createSlice({
  name: "dataSources",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDataSources.fulfilled, (state, { payload }) => {
      state.dataSourcsesList = payload;
    });
    builder.addCase(getDataSources.rejected, (state, action) => {
      state.errors = action.payload;
    });
  },
});

export default dataSourcesSlice.reducer;
