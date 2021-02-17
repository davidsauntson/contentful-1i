import { combineReducers } from "@reduxjs/toolkit";
import violationsReducer from "../features/violations/violationsSlice";
import rulesReducer from "../features/rules/rulesSlice";

export default combineReducers({
  violations: violationsReducer,
  rules: rulesReducer,
});
