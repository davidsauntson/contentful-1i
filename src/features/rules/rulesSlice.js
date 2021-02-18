import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import processContentfulRules from "./processContentfulRules";

export const fetchRules = createAsyncThunk(
  "rules/fetchRules",
  async (sdk, thunkAPI) => {
    return sdk.space.getEntries({ content_type: "styleRule" }).then((res) => {
      return processContentfulRules(res.items);
    });
  }
);

const rulesSlice = createSlice({
  name: "rules",
  initialState: { rules: [], status: "NotAsked" },
  reducers: {},
  extraReducers: {
    [fetchRules.pending]: (state) => {
      state.status = "Loading";
    },
    [fetchRules.fulfilled]: (state, action) => {
      state.rules = action.payload;
      state.status = "Success";
    },
    [fetchRules.rejected]: (state) => {
      state.status = "Failure";
    },
  },
});

export default rulesSlice.reducer;
