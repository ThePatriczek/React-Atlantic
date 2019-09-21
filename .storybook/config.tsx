import { withInfo } from '@storybook/addon-info';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import {
  addDecorator,
  addParameters,
  configure as reactConfig
} from '@storybook/react';
import { configure as enzymeConfig } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import { theme } from '../src/theme';
import { ThemeProvider } from '../src/theme/ThemeProvider';

enzymeConfig({ adapter: new Adapter() });

const req = require.context('../src', true, /\.story\.jsx$/);

const loadStories = () => req.keys().forEach(req);

addParameters({
  options: {
    panelPosition: 'bottom',
    showPanel: true
  }
});

addDecorator(
  withInfo({
    inline: true,
    source: true
  })
);

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
});

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>{storyFn() as any}</ThemeProvider>
));

reactConfig(loadStories, module);
