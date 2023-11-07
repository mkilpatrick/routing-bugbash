import * as React from "react";
import { templateForColor } from "../ColorBase";
import {Color} from "../PageLayout"

// Red has an auth policy associated with so so YEXT_AUTH

const template = templateForColor(Color.RED)
export const getPath = template.getPath;
export const getHeadConfig = template.getHeadConfig;
const OverrideTemplate = (props: any) => {
  if (!template.default) {
    return "undefined";
  }

  console.log("YEXT_AUTH:", (window as any)?.YEXT_AUTH);
  const email = (window as any)?.YEXT_AUTH?.visitor?.email || "UNKNOWN!"

  return template.default({
    children: <div>{`You email is ${email}`}</div>
  });
};
export default OverrideTemplate;