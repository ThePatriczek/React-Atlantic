import styled, { css } from 'styled-components';
import { theme, Theme } from '../../../theme';

export const getDefaultStyledText = (props: { theme: Theme }) => css`
  font-size: ${props.theme.font.size.md};
  font-family: ${props.theme.font.family};
  line-height: 1.5;
  margin: ${props.theme.margin.sm} 0;

  button,
  input[type='text'],
  input[type='number'],
  input[type='email'] {
    margin: 0 ${props.theme.margin.sm};
  }

  /* TODO: rewrite to css in js */
  &.upper {
    text-transform: uppercase;
  }

  &.subtitle {
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  &.primary {
    color: ${props.theme.color.primary};
  }

  &.success {
    color: ${props.theme.color.success};
  }

  &.warning {
    color: ${props.theme.color.warning};
  }

  &.error {
    color: ${props.theme.color.error};
  }
`;

export const StyledText = styled.span`
  ${props => getDefaultStyledText(props)};
`;

export const StyledStrongText = styled.strong`
  ${props => getDefaultStyledText(props)};

  font-weight: 600;
`;

StyledText.defaultProps = {
  theme
};

StyledStrongText.defaultProps = {
  theme
};
