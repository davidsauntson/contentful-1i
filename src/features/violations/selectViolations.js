import { createSelector } from "@reduxjs/toolkit";

const violations = (state) => state.violations;
const selectViolations = createSelector([violations], (violations) => {
  return violations;
});

export default selectViolations;
