import { withInfo } from '@storybook/addon-info';
import { addDecorator, addParameters, configure } from '@storybook/react';
import * as React from 'react';
import { theme } from '../src/theme';
import { ThemeProvider } from '../src/theme/ThemeProvider';

const req = require.context('../src', true, /\.story\.tsx$/);

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

// addDecorator(storyFn => (
//   <ThemeProvider theme={theme}>{storyFn() as any}</ThemeProvider>
// ));

configure(loadStories, module);
