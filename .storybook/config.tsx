import * as React from "react";
import { addDecorator, configure } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { ThemeProvider } from "styled-components";
import { theme } from "../lib/theme";

const req = require.context("../lib", true, /\.story\.tsx$/);

const loadStories = () => req.keys().forEach(req);

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
