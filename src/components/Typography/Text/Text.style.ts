import { darken, lighten } from 'polished';
import styled, { css } from 'styled-components';
import { theme, Theme } from '../../../theme';
import { Type } from '../../../types';

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

  ::selection,
  ::-moz-selection {
    background: ${lighten(0.4, props.theme.color.primary)};
  }
`;

export const StyledText = styled.span<{ type: Type }>`
  ${props => getDefaultStyledText(props)};
  
  ${props =>
    props.type === 'primary' &&
    css`
      color: ${props.theme.color.primary};
    `}
  
  ${props =>
    props.type === 'success' &&
    css`
      color: ${props.theme.color.success};
    `}
  
  ${props =>
    props.type === 'warning' &&
    css`
      color: ${props.theme.color.warning};
    `}
  
  ${props =>
    props.type === 'error' &&
    css`
      color: ${props.theme.color.error};
    `}
`;

export const StyledStrongText = styled.strong<{ type: Type }>`
  ${props => getDefaultStyledText(props)};

  font-weight: 600;
  
    ${props =>
      props.type === 'primary' &&
      css`
        color: ${props.theme.color.primary};
      `}
  
  ${props =>
    props.type === 'success' &&
    css`
      color: ${props.theme.color.success};
    `}
  
  ${props =>
    props.type === 'warning' &&
    css`
      color: ${props.theme.color.warning};
    `}
  
  ${props =>
    props.type === 'error' &&
    css`
      color: ${props.theme.color.error};
    `}
`;

export const StyledMarkText = styled.mark`
  ${props => getDefaultStyledText(props)};
  padding: 0 ${props => props.theme.padding.xs};
  background-color: ${lighten(0.3, `orange`)};
`;

export const StyledCodeText = styled.code`
  ${props => getDefaultStyledText(props)};
  margin: 0 ${props => props.theme.margin.sm};
  padding: ${props => props.theme.padding.xs} ${props =>
  props.theme.padding.md};

  font-size: 12px;
  background: ${props => props.theme.color.default};
  border: 1px solid ${props => darken(0.1, props.theme.color.default)}
  border-radius: ${props => parseInt(props.theme.radius, 0) - 2}px;
`;

export const StyledInsText = styled.ins`
  ${props => getDefaultStyledText(props)};
  padding: 0 ${props => props.theme.padding.xs};
  background-color: ${props => lighten(0.5, props.theme.color.success)};
`;

export const StyledDelText = styled.del`
  ${props => getDefaultStyledText(props)};
  padding: 0 ${props => props.theme.padding.xs};
  background-color: ${props => lighten(0.4, props.theme.color.error)};
`;

StyledText.defaultProps = {
  theme
};

StyledStrongText.defaultProps = {
  theme
};

StyledMarkText.defaultProps = {
  theme
};

StyledCodeText.defaultProps = {
  theme
};

StyledInsText.defaultProps = {
  theme
};
StyledDelText.defaultProps = {
  theme
};
