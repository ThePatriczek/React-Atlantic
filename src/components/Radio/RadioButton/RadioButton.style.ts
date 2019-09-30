import { darken } from 'polished';
import styled, { css } from 'styled-components';
import { theme } from '../../../theme';
import { Size } from '../../../types';

interface StyledRadioButtonProps {
  isChecked?: boolean;
  isDisabled?: boolean;
  size?: Size;
}

export const StyledRadioButtonInputHidden = styled.input.attrs({
  type: 'radio'
})`
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
`;
export const StyledRadioButtonLabel = styled.label<StyledRadioButtonProps>`
  padding: 0 ${props => props.theme.padding.md};
  height: ${props => props.theme.height.md};
  line-height: ${props => props.theme.height.md};

  position: relative;
  list-style: none;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;

  background-color: white;
  color: black;

  outline: 0;
  cursor: pointer;
  user-select: none;
  touch-action: manipulation;
  transition: background-color 0.1s ease;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.06);

  border: 1px solid ${props => darken(0.1, props.theme.color.default)};

  font-size: ${props => props.theme.font.size.md};
  font-family: ${props => props.theme.font.family};

  ${props =>
    props.isChecked &&
    css`
      background-color: ${props.theme.color.primary};
      color: white;
    `}
  &:hover {
    ${props =>
      !props.isChecked &&
      css`
        color: ${props.theme.color.primary};
      `}
  }
  ${props =>
    props.isDisabled &&
    css`
      background-color: ${props.theme.color.default};
      cursor: not-allowed;
      color: ${darken(0.2, props.theme.color.default)};
    `}
  &:hover {
    ${props =>
      props.isDisabled &&
      css`
        color: ${darken(0.2, props.theme.color.default)};
        border: inherit;
        border: 1px solid ${darken(0.1, props.theme.color.default)};
      `}
  }
  ${props =>
    props.size === 'small' &&
    css`
      height: ${props.theme.height.sm};
      line-height: ${props.theme.height.sm};
      padding: 0 ${props.theme.padding.sm};
    `}
    ${props =>
      props.size === 'medium' &&
      css`
        height: ${props.theme.height.md};
        line-height: ${props.theme.height.md};
        padding: 0 ${props.theme.padding.md};
      `}
     ${props =>
       props.size === 'large' &&
       css`
         height: ${props.theme.height.lg};
         line-height: ${props.theme.height.lg};
         padding: 0 ${props.theme.padding.lg};
       `}
`;
export const StyledRadioButtonSpan = styled.span<StyledRadioButtonProps>`
  ${props =>
    props.size === 'small' &&
    css`
      font-size: ${props.theme.font.size.sm};
    `}
  ${props =>
    props.size === 'medium' &&
    css`
      font-size: ${props.theme.font.size.md};
    `}
  ${props =>
    props.size === 'large' &&
    css`
      font-size: ${props.theme.font.size.lg};
    `}
`;

StyledRadioButtonInputHidden.defaultProps = {
  theme
};

StyledRadioButtonLabel.defaultProps = {
  theme
};

StyledRadioButtonSpan.defaultProps = {
  theme
};
