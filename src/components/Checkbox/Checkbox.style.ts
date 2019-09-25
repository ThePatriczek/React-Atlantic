import { darken } from 'polished';
import styled, { css } from 'styled-components';
import { theme } from '../../theme';

interface StyledCheckboxProps {
  isChecked?: boolean;
  isPartiallyChecked?: boolean;
  isDisabled?: boolean;
  isTextDotted?: boolean;
  name?: string;
  textPosition?: 'right' | 'left';
}

export const StyledCheckboxInputHidden = styled.input.attrs({
  type: 'checkbox'
})`
  display: none;
`;

export const StyledCheckboxInputShown = styled.div<StyledCheckboxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => parseInt(props.theme.padding.xs, 0) - 1}px;
  background: white;
  border-radius: ${props => parseInt(props.theme.radius, 0) - 1}px;
  border: 1px solid ${props => darken(0.1, props.theme.color.default)};

  ${props =>
    props.isDisabled &&
    css`
      background-color: ${props.theme.color.default};
      cursor: not-allowed;
    `}
`;

export const StyledCheckboxLabel = styled.label<StyledCheckboxProps>`
  font-size: 14px;
  font-family: ${props => props.theme.font.family};
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  ${props =>
    props.isDisabled &&
    css`
      cursor: not-allowed;
    `};
`;

export const StyledCheckboxMark = styled.div<StyledCheckboxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.theme.width.xs};
  height: ${props => props.theme.width.xs};
  border-radius: ${props => parseInt(props.theme.radius, 0) - 2}px;

  ${props =>
    (props.isChecked || props.isPartiallyChecked) &&
    css`
      background-color: ${props.theme.color.primary};
    `}
  ${props =>
    props.isDisabled &&
    css`
      cursor: not-allowed;
      color: transparent;
    `}
`;

export const StyledCheckboxSpan = styled.span<StyledCheckboxProps>`
  padding: 0 ${props => props.theme.padding.md};
  user-select: none;
  line-height: 1;

  ${props =>
    props.isDisabled &&
    css`
      cursor: not-allowed;
    `}
`;

export const StyledCheckboxIcon = styled.i<StyledCheckboxProps>`
  transform: scale(0.8);
  color: white;
  ${props =>
    props.isPartiallyChecked &&
    css`
      color: transparent;
    `}
  ${props =>
    props.isDisabled &&
    css`
      cursor: not-allowed;
      color: transparent;
    `}
`;

StyledCheckboxInputHidden.defaultProps = {
  theme
};

StyledCheckboxInputShown.defaultProps = {
  theme
};

StyledCheckboxLabel.defaultProps = {
  theme
};

StyledCheckboxMark.defaultProps = {
  theme
};
StyledCheckboxSpan.defaultProps = {
  theme
};
StyledCheckboxIcon.defaultProps = {
  theme
};
