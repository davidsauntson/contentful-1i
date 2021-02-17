import { createSlice, nanoid } from "@reduxjs/toolkit";

const violationsSlice = createSlice({
  name: "violations",
  initialState: [],
  reducers: {
    clearViolations: {
      reducer() {
        return [];
      },
    },
    addViolation: {
      reducer(state, action) {
        const violation = action.payload;
        state.push({ id: nanoid(), ...violation });
      },
    },
  },
});

export const { addViolation, clearViolations } = violationsSlice.actions;

export default violationsSlice.reducer;
