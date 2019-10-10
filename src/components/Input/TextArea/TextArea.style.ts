import { darken, lighten } from 'polished';
import styled, { css } from 'styled-components';
import { theme } from '../../../theme';

export const StyledTextAreaWrapper = styled.div<{
  iconLeft: boolean;
  iconRight: boolean;
  isDisabled: boolean;
}>`
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
          color: ${props.theme.color.primary};
        }
        textarea {
          border-color: ${props.theme.color.primary};
        }
      }
    `}
`;

export const StyledTextArea = styled.textarea`
  position: relative;
  display: inline-block;
  min-width: 150px;
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
  user-select: none;
  -webkit-appearance: textfield;
  touch-action: manipulation;

  background-color: ${props => props.theme.color.white};
  color: ${props => props.theme.color.black};
  border: 1px solid ${props => darken(0.1, props.theme.color.default)};
  border-radius: ${props => props.theme.radius};
  outline: 0;
  list-style: none;

  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  ::placeholder {
    color: ${() => lighten(0.6, `black`)};
  }

  :focus {
    border-color: ${props => props.theme.color.primary};
    outline-offset: -2px;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.3);
  }

  ${props =>
    props.disabled &&
    css`
      color: ${darken(0.2, props.theme.color.default)};
      
      ::placeholder {
        color: ${darken(0.2, props.theme.color.default)};
      }

      background-color: ${props.theme.color.default};
      cursor: not-allowed;
      outline: 0;

      &:hover,
      &:focus {
        outline: 0;
        box-shadow: none;
        border: 1px solid ${darken(0.1, props.theme.color.default)};
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
  color: ${props => lighten(0.6, props.theme.color.black)};

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
