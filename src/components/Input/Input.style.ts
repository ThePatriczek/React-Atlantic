import { darken, lighten } from 'polished';
import styled, { css } from 'styled-components';
import { theme } from '../../theme';
import { Size } from '../../types';

export interface StyledInputWrapperProps {
  isLoading?: boolean;
  iconLeft?: boolean;
  iconRight?: boolean;
  isFocused?: boolean;
  hasValue?: boolean;
  isDisabled?: boolean;
  size: Size;
}

export const StyledInputWrapper = styled.span<StyledInputWrapperProps>`
  font-family: ${props => props.theme.font.family};
  position: relative;
  display: inline-block;

  ${props =>
    !props.isDisabled &&
    css`
      :hover {
        i {
          color: ${props.theme.color.primary};
        }
        input {
          border-color: ${props.theme.color.primary};
        }
      }
    `}

  ${props =>
    props.iconLeft &&
    css`
      i {
        left: ${props.theme.padding.md};
      }
      input {
        padding-left: 30px;
      }
    `}

  ${props =>
    props.iconRight &&
    css`
      i {
        right: ${props.theme.padding.md};
      }
      input {
        padding-right: 30px;
      }
    `}

  i {
    display: flex;
    ${props =>
      props.isDisabled
        ? css`
            color: ${darken(0.2, props.theme.color.default)};
            cursor: not-allowed;
          `
        : css`
            color: #777777;
            cursor: text;
          `};
    align-items: center;
    position: absolute;
    width: 14px;
    
    ${props =>
      props.size === 'small' &&
      css`
        font-size: 12px;
        height: ${props.theme.height.sm};
      `};
        
    ${props =>
      props.size === 'medium' &&
      css`
        height: ${props.theme.height.md};
      `};    
    
    ${props =>
      props.size === 'large' &&
      css`
        font-size: 16px;
        height: ${props.theme.height.lg};
      `};
    
    top: 0;
    bottom: 0;
    z-index: 2;
    line-height: 0;

    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${props =>
    props.isFocused &&
    css`
      i {
        color: ${props.theme.color.primary};
      }
    `}
`;

export const StyledInput = styled.input<{
  isRound?: boolean;
  size: Size;
  isFullWidth?: boolean;
}>`
  font-family: ${props => props.theme.font.family};
  padding: ${props => props.theme.padding.sm} ${props =>
  props.theme.padding.md};
  height: ${props => props.theme.height.md};
  margin: 0;

  position: relative;
  display: inline-block;

  font-size: ${props => props.theme.font.size.md};
  font-weight: 400;
  white-space: nowrap;
  text-overflow: ellipsis;
  user-select: none;
  -webkit-appearance: textfield;
  touch-action: manipulation;

  background-color: ${props => props.theme.color.white};
  color: ${props => props.theme.color.black};
  border-radius: ${props => props.theme.radius};
  outline: 0;
  list-style: none;

  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  border: 1px solid ${props => darken(0.1, props.theme.color.default)};

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

  ${props =>
    props.isRound &&
    css`
      border-radius: ${props.theme.rounded};

      &:not(.disabled):not(.transparent) {
        &:focus {
          &:after {
            border-radius: ${props.theme.rounded};
          }
        }
      }
    `} 

  ${props =>
    props.size === 'small' &&
    css`
      height: ${props.theme.height.sm};
      font-size: 12px;

      i + span,
      span + i {
        margin-left: ${props.theme.margin.sm};
      }
    `} 
  
    ${props =>
      props.size === 'large' &&
      css`
        height: ${props.theme.height.lg};
        font-size: ${props.theme.font.size.lg};

        i + span,
        span + i {
          margin-left: ${props.theme.margin.lg};
        }
      `} 


    ${props =>
      props.isFullWidth &&
      css`
        width: 100%;
      `} 
`;

export const StyledInputWrapperAlt = styled.span<StyledInputWrapperProps>`
  font-family: ${props => props.theme.font.family};
  display: inline-block;
  position: relative;
  padding-top: ${props => props.theme.padding.md};

  ${props =>
    !props.isDisabled &&
    css`
      :hover {
        i {
          color: ${props.theme.color.primary};
        }
        input {
          border-color: ${props.theme.color.primary};
        }
      }
    `}

  label { 
    ${props =>
      props.size === 'small' &&
      css`
        font-size: ${props.theme.font.size.sm};
        height: ${parseInt(props.theme.height.sm, 0) - 2}px;
        line-height: ${parseInt(props.theme.height.sm, 0) - 2}px;
      `}
    ${props =>
      props.size === 'medium' &&
      css`
        font-size: ${props.theme.font.size.md};
        height: ${parseInt(props.theme.height.md, 0) - 2}px;
        line-height: ${parseInt(props.theme.height.md, 0) - 2}px;
      `}
    ${props =>
      props.size === 'large' &&
      css`
        font-size: ${props.theme.font.size.lg};
        height: ${parseInt(props.theme.height.lg, 0) - 2}px;
        line-height: ${parseInt(props.theme.height.lg, 0) - 2}px;
      `}
    
    
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 0 ${props => props.theme.padding.md};

    color: ${() => lighten(0.6, `black`)};
    cursor: text;

    -webkit-transition: color 0.2s ease-out, -webkit-transform 0.2s ease-out;
    transition: color 0.2s ease-out, -webkit-transform 0.2s ease-out;
    transition: transform 0.2s ease-out, color 0.2s ease-out;
    transition: transform 0.2s ease-out, color 0.2s ease-out,
      -webkit-transform 0.2s ease-out;
    -webkit-transform-origin: 0% 100%;
    transform-origin: 0% 100%;
    -webkit-transform: translateY(12px);
    transform: translateY(12px);

    ${props =>
      (props.isFocused || props.hasValue || props.isDisabled) &&
      css`
        height: ${props.theme.height.sm};
        line-height: ${props.theme.height.sm};
        left: 5px;
        right: auto;

        background: white;
        color: ${props.theme.color.primary};

        -webkit-transform: translateY(-14px) scale(0.8);
        transform: translateY(0px) scale(0.8);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
      `}
  }

  ${props =>
    props.iconLeft && 
    css`
      input {
        padding-right: ${props.theme.padding.md};
      }

      label {
        transform: translateY(-10px) scale(0.8);
        ${!(props.isFocused || props.hasValue) &&
          css`
            padding-left: 30px;
            transform: translateY(2px);
          `}
      }
    `}

  ${props =>
    props.iconRight &&
    css`
      input {
        padding-left: ${props.theme.padding.md};
      }

      label {
        transform: translateY(-10px) scale(0.8);

        ${!(props.isFocused || props.hasValue) &&
          css`
            padding-right: 30px;
            transform: translateY(2px);
          `}
      }
    `}
`;

StyledInput.defaultProps = {
  theme
};

StyledInputWrapper.defaultProps = {
  theme
};

StyledInputWrapperAlt.defaultProps = {
  theme
};
