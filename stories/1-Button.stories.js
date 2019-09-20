import React from "react";
import {Button} from "@storybook/react/demo";
import {action} from "@storybook/addon-actions";

export default {
  title: "Button"
};

export const primary = () => (
  <Button onClick={action("clicked")}>{`Button`}</Button>
);
