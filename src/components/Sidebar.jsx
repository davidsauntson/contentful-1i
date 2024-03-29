import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

import {
  addViolation,
  clearViolations,
} from "../features/violations/violationsSlice";
import ViolationSidebarContainer from "../features/violations/violationSidebarContainer";

import {
  selectRulesStatus,
  selectRules,
} from "../features/rules/rulesSelectors";

const BODY_FIELD_ID = "body";

const Sidebar = (props) => {
  const { sdk } = props;
  const dispatch = useDispatch();
  const bodyField = sdk.entry.fields[BODY_FIELD_ID];

  const status = useSelector(selectRulesStatus);
  const rules = useSelector(selectRules);

  const worker = new Worker("rules-worker.js");
  worker.onmessage = (e) => {
    dispatch(clearViolations());
    const { violations } = e.data;
    violations?.forEach((v) => {
      dispatch(addViolation(v));
    });
  };

  useEffect(() => {
    sdk.window.startAutoResizer();
  }, []);

  useEffect(() => {
    const detach = bodyField.onValueChanged((value) => {
      if (status === "Success") {
        worker.postMessage({
          content: documentToPlainTextString(value),
          rules: rules,
        });
      }
    });

    return () => detach();
  }, [bodyField, status]);

  return <ViolationSidebarContainer />;
};

export default Sidebar;
