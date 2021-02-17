import { connect } from "react-redux";
import selectViolations from "./selectViolations";
import ViolationSidebar from "./violationSidebar";

const mapStateToProps = (state) => ({
  violations: selectViolations(state),
});

export default connect(mapStateToProps, null)(ViolationSidebar);
