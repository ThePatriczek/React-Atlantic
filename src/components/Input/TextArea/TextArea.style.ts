import styled, { css } from 'styled-components';
import { theme } from '../../../theme';
import { IconName } from '../../Icon';

export interface StyledTextAreaProps {
  isDisabled?: boolean;
  placeholder?: string;
  autoFocus?: boolean;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onEnterPress?: (value: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  iconLeft?: IconName;
  iconRight?: IconName;
}

export const StyledTextAreaWrapper = styled.div<StyledTextAreaProps>`
  position: relative;

  ${props =>
    (props.iconLeft || props.iconRight) &&
    css`
      display: inline-block;
      max-width: 100%;

      ${props.iconLeft &&
        css`
          textarea {
            padding-left: 30px;
          }
        `}

      ${props.iconRight &&
        css`
          textarea {
            padding-right: 30px;
          }
        `}
    `}

  ${props =>
    !props.isDisabled &&
    css`
      :hover {
        i {
          color: ${props.theme.color.primary.alpha};
        }
        textarea {
          border-color: ${props.theme.color.primary.alpha};
        }
      }
    `}
`;

export const StyledTextArea = styled.textarea`
  position: relative;
  display: inline-block;
  min-width: 150px;
  user-select: text;
  width: 100%;
  max-width: 100%;
  height: auto;
  min-height: ${props => props.theme.height.md};
  padding: ${props => props.theme.padding.sm} ${props => props.theme.padding.md};
  margin: 0;

  vertical-align: middle;
  line-height: 1.5;
  font-family: ${props => props.theme.font.family};
  font-size: ${props => props.theme.font.size.md};
  font-weight: 400;
  overflow: auto;
  -webkit-appearance: none;
  touch-action: manipulation;

  background-color: ${props => props.theme.color.background.alpha};
  color: ${props => props.theme.color.black};
  border: 1px solid ${props => props.theme.color.border};
  border-radius: ${props => props.theme.radius};
  outline: 0;
  list-style: none;

  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  ::placeholder {
    color: ${props => props.theme.color.text.beta};
  }

  :focus {
    border-color: ${props => props.theme.color.primary.alpha};
    outline-offset: -2px;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.3);
  }

  ${props =>
    props.disabled &&
    css`
      color: ${props.theme.color.text.beta};

      ::placeholder {
        color: ${props.theme.color.text.beta};
      }

      background-color: ${props.theme.color.default};
      cursor: not-allowed;
      outline: 0;

      &:hover,
      &:focus {
        outline: 0;
        box-shadow: none;
        border: 1px solid ${props.theme.color.border};
      }
    `}
`;

export const StyledTextAreaIcon = styled.span<{
  iconLeft: boolean;
  iconRight: boolean;
}>`
  display: flex;
  bottom: 10px;
  height: auto;
  line-height: inherit;
  color: ${props => props.theme.color.text.beta};

  i {
    color: ${props => props.theme.color.text.beta};
  }

  ${props =>
    props.iconLeft &&
    css`
      position: absolute;
      align-items: flex-start;
      top: 9px;
      left: 10px;
    `}

  ${props =>
    props.iconRight &&
    css`
      position: absolute;
      align-items: flex-end;
      right: 10px;
    `}
`;

StyledTextAreaWrapper.defaultProps = {
  theme
};

StyledTextAreaIcon.defaultProps = {
  theme
};

StyledTextArea.defaultProps = {
  theme
};
