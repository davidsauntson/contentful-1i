import { createSlice } from "@reduxjs/toolkit";

const violationsSlice = createSlice({
  name: "violations",
  initialState: [],
  reducers: {
    clearViolations: {
      reducer(state, action) {
        console.log("cearling");
        state = [];
      },
    },
    addViolation: {
      reducer(state, action) {
        const { id, name, fix } = action.payload;
        state.push({ id, name, fix });
      },
    },
  },
});

export const { addViolation, clearViolations } = violationsSlice.actions;

export default violationsSlice.reducer;
