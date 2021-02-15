import React, { useEffect, useState } from "react";
import { SidebarExtensionSDK } from "@contentful/app-sdk";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import { checkString } from "../rules/checker/checker.js";
import { rules } from "../rules/rules.js";

interface SidebarProps {
  sdk: SidebarExtensionSDK;
}

const BODY_FIELD_ID = "body";

const Sidebar = (props: SidebarProps) => {
  const { sdk } = props;

  const bodyField = sdk.entry.fields[BODY_FIELD_ID];
  const [text, setText] = useState(bodyField.getValue());

  useEffect(() => {
    const detach = bodyField.onValueChanged((value) => {
      const richText = documentToPlainTextString(value);
      setText(richText);
    });
    return () => detach();
  }, [bodyField]);

  const violations = checkString(text);
  console.log(violations);

  return (
    <ul>
      {violations.map((v) => (
        <li>{`${v.name} - ${v.fix}`}</li>
      ))}
    </ul>
  );
};

export default Sidebar;
