import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APP_DATASOURCE_RELATED } from "../proto/mobileservice/ts/mobileService_pb";
import { GET_DATASOURCES_STRUCTURE } from "../client/grbc";

export interface DatasourceStructure {
  dataSourcsesSt: Array<APP_DATASOURCE_RELATED.AsObject>;
  errors: any;
}

export const getDataSourcesStructure = createAsyncThunk(
  "get_datasourcesSt",
  async () => {
    const response = await GET_DATASOURCES_STRUCTURE();
    return response;
  }
);

const initialState: DatasourceStructure = {
  dataSourcsesSt: [],
  errors: "",
};

const datasourceStructureSlice = createSlice({
  name: "dataSourcesStructure",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDataSourcesStructure.fulfilled, (state, { payload }) => {
      state.dataSourcsesSt = payload;
    });
    builder.addCase(getDataSourcesStructure.rejected, (state, action) => {
      state.errors = action.payload;
    });
  },
});

export default datasourceStructureSlice.reducer;
