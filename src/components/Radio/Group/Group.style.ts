import { darken } from 'polished';
import styled from 'styled-components';
import { theme } from '../../../theme';

export const StyledRadioGroup = styled.div`
  label.atlantic--radio_button {
    &:not(:first-of-type) {
      border-left: 1px solid ${props => props.theme.color.white};
    }

    &:first-of-type {
      border-left: 1px solid ${props => darken(0.1, props.theme.color.default)};
      border-radius: ${props => props.theme.radius} 0 0
        ${props => props.theme.radius};
    }

    &:last-of-type {
      border-radius: 0 ${props => props.theme.radius}
        ${props => props.theme.radius} 0;
    }
  }
`;
StyledRadioGroup.defaultProps = {
  theme
};
