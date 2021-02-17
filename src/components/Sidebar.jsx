import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

import { rules } from "../rules/rules";

import {
  addViolation,
  clearViolations,
} from "../features/violations/violationsSlice";
import ViolationSidebarContainer from "../features/violations/violationSidebarContainer";

const BODY_FIELD_ID = "body";

const Sidebar = (props) => {
  const { sdk } = props;
  const dispatch = useDispatch();
  const bodyField = sdk.entry.fields[BODY_FIELD_ID];

  const worker = new Worker("rules-worker.js");
  worker.onmessage = (e) => {
    dispatch(clearViolations());
    const { violations } = e.data;
    violations?.forEach((v) => {
      dispatch(addViolation(v));
    });
  };

  useEffect(() => {
    const detach = bodyField.onValueChanged((value) => {
      worker.postMessage({
        content: documentToPlainTextString(value),
        rules: rules,
      });
    });
    return () => detach();
  }, [bodyField]);

  return <ViolationSidebarContainer />;
};

export default Sidebar;
