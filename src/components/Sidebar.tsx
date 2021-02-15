import React, { useEffect, useState } from "react";
import { SidebarExtensionSDK } from "@contentful/app-sdk";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import ReactMarkdown from "react-markdown";

import { checkString } from "../rules/checker/checker.js";

import {
  List,
  ListItem,
  Paragraph,
} from "@contentful/forma-36-react-components";

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

  return (
    <React.Fragment>
      {violations && violations.length > 0 ? (
        <>
          <Paragraph>
            There are <b>{violations.length}</b> issues in your content.
          </Paragraph>
          <List style={{ marginTop: "12px" }}>
            {violations.map((v) => {
              return (
                <ListItem key={v.id}>
                  <Paragraph>{`${v.name} - ${v.fix}`}</Paragraph>
                </ListItem>
              );
            })}
          </List>
        </>
      ) : (
        <Paragraph>Your content looks great! 🎉</Paragraph>
      )}
    </React.Fragment>
  );
};

export default Sidebar;
