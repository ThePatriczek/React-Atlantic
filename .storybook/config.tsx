import * as React from "react";
import { addDecorator, configure, addParameters } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/theme";

const req = require.context("../src", true, /\.story\.tsx$/);

const loadStories = () => req.keys().forEach(req);

addParameters({
  options: {
    panelPosition: `right`,
    showPanel: false
  }
});

addDecorator(
  withInfo({
    inline: true,
    source: true
  })
);

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>{storyFn() as any}</ThemeProvider>
));

configure(loadStories, module);
