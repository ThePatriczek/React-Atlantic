import {addDecorator, configure} from "@storybook/react";
import {withInfo} from "@storybook/addon-info";

const req = require.context("../lib", true, /\.story\.tsx$/);

const loadStories = () => req.keys().forEach(req);

addDecorator(
  withInfo({
    inline: true,
    source: true
  })
);

configure(loadStories, module);
