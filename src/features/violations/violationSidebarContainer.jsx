import { connect } from "react-redux";
import { selectRulesStatus } from "../rules/rulesSelectors";
import selectViolations from "./selectViolations";
import ViolationSidebar from "./violationSidebar";

const mapStateToProps = (state) => ({
  violations: selectViolations(state),
  status: selectRulesStatus(state),
});

export default connect(mapStateToProps, null)(ViolationSidebar);
