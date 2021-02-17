import { combineReducers } from "@reduxjs/toolkit";
import violationsReducer from "../features/violations/violationsSlice";

export default combineReducers({
  violations: violationsReducer,
});
