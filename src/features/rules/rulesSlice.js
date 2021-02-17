import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchRules = createAsyncThunk("rules/fetchRules", async () => {
  const res = await fetch("rules.json");
  return res.json();
});

const rulesSlice = createSlice({
  name: "rules",
  initialState: { rules: [], status: "NotAsked" },
  reducers: {},
  extraReducers: {
    [fetchRules.pending]: (state) => {
      state.status = "Loading";
    },
    [fetchRules.fulfilled]: (state, action) => {
      console.log(action);
      state.rules = action.payload;
      state.status = "Success";
    },
    [fetchRules.rejected]: (state) => {
      state.status = "Failure";
    },
  },
});

console.log(rulesSlice.reducer);

export default rulesSlice.reducer;