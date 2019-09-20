import * as React from "react";
import {storiesOf} from "@storybook/react";
import {Button} from "./Button";

const stories = storiesOf("Components", module);

stories.add("Button", () => <Button text={`Text`} />, {
  info: { inline: true }
});
