import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SidebarExtensionSDK } from "@contentful/app-sdk";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

import { checkString } from "../rules/checker/checker.js";

import ViolationSidebar from "../features/violations/violationSidebar.jsx";
import {
  addViolation,
  clearViolations,
} from "../features/violations/violationsSlice.js";

interface SidebarProps {
  sdk: SidebarExtensionSDK;
}

const BODY_FIELD_ID = "body";

const Sidebar = (props: SidebarProps) => {
  const { sdk } = props;

  const bodyField = sdk.entry.fields[BODY_FIELD_ID];
  const dispatch = useDispatch();

  useEffect(() => {
    const detach = bodyField.onValueChanged((value) => {
      dispatch(clearViolations(null));
      const richText = documentToPlainTextString(value);
      const violations = checkString(richText);
      violations.forEach((v) => dispatch(addViolation({ ...v })));
    });
    return () => detach();
  }, [bodyField]);

  return <ViolationSidebar />;
};

export default Sidebar;
