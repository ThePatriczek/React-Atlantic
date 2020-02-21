import React from 'react';
import { shallow } from 'enzyme';
import styled from 'styled-components';
import { ThemeProvider } from './ThemeProvider';
import { theme } from './theme';

describe('Theme', () => {
  test('ThemeProvider works fine', () => {
    const StyledComponent = styled.div`
      color: ${props => props.theme.color.primary.alpha};
    `;

    StyledComponent.displayName = `StyledComponent`;

    StyledComponent.defaultProps = {
      theme
    };

    const tree = (
      <ThemeProvider theme={theme}>
        <StyledComponent />
      </ThemeProvider>
    );

    const data = shallow(tree);

    const component = data.find(`StyledComponent`).getElement();

    expect(component.props.theme).toEqual(theme);
  });
});
