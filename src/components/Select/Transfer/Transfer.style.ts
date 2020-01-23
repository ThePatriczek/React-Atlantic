import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../../theme';
import { Direction, Position, Size } from '../../../types';
import { Button } from '../../Button';
import {
  StyledCheckboxInputShown,
  StyledCheckboxLabel,
  StyledCheckboxSpan
} from '../../Checkbox/Checkbox.style';
import { Icon, IconName } from '../../Icon';
import { StyledIcon } from '../../Icon/Icon.style';
import { Input } from '../../Input';
import { StyledInput } from '../../Input/Input.style';
import { OptionType } from '../Select.utils';

interface StyledTransferProps {
  isOpen?: boolean;
  direction?: Direction;
  isHalfOpen?: boolean;
  iconLeft?: IconName;
  placeholder?: string;
  isDisabled?: boolean;
  options?: OptionType[];
  globalSize?: Size;
  closeText?: string;
  submitText?: string;
  deleteAllText?: string;
  notFoundMessage?: any;
  isFocused?: boolean;
  size?: Size;
  notFoundComponent?: any;
  position?: Position | 'unset' | null;
  isFullWidth?: boolean;
  labelLeft?: string | ReactNode;
  labelTop?: string | ReactNode;
  ref?: any;
}

export const StyledTransferContainer = styled.div<StyledTransferProps>`
  position: relative;
   ${props =>
     props.size === 'small' &&
     css`
       height: ${parseInt(props.theme.height.sm, 0)}px;
     `}
  ${props =>
    props.size === 'medium' &&
    css`
      height: ${parseInt(props.theme.height.md, 0)}px;
    `}
  ${props =>
    props.size === 'large' &&
    css`
      height: ${parseInt(props.theme.height.lg, 0)}px;
    `}
`;

export const StyledTransferUl = styled.ul<StyledTransferProps>`
  min-height: 150px;
  max-height: 150px;
  list-style: none;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  overflow: scroll;
  color: ${props => props.theme.color.text.alpha};
`;

export const StyledTransferInput = styled(Input)<StyledTransferProps>`
  z-index: 20;
  ${StyledInput} {
    border: 0;
    box-sizing: border-box;
    ${props =>
      props.isOpen &&
      css`
         ${props.size === 'small' &&
           css`
             padding-right: 50px;
           `}
         ${props.size === 'medium' &&
           css`
             padding-right: 55px;
           `}
         ${props.size === 'large' &&
           css`
             padding-right: 65px;
           `};
      `}
  }

  ${props =>
    props.isOpen &&
    css`
      border-bottom: 1px solid ${props => props.theme.color.border};

      :hover {
        border-color: ${props => props.theme.color.primary.alpha};
        border-right: 1px solid ${props => props.theme.color.primary.alpha};
        ${!props.isHalfOpen &&
          css`
            border-top-right-radius: ${props => props.theme.radius};
          `}
      }

      ${StyledInput} {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    `}

  ${props =>
    !props.isOpen &&
    css`
      :hover {
        border-top-right-radius: ${props => props.theme.radius};
      }

      ${StyledInput} {
        background: none;
        color: transparent;
      }
    `}
`;

export const StyledDeleteOneIcon = styled(Icon)<StyledTransferProps>`
  svg,
  path {
    color: ${props => props.theme.color.text.beta};
  }
`;

export const StyledDeleteOneButton = styled(Button)<StyledTransferProps>`
  border: none;
  background: none;
  box-shadow: none;
`;

export const StyledInputHeader = styled.div<StyledTransferProps>`
  position: relative;
`;

export const StyledSearchButton = styled(Button)<StyledTransferProps>`
  svg {
    height: 20px;
  }

  && {
    background: none;
    border: none;
    box-shadow: none;
    :hover {
      background: none;
    }
    :after {
      display: none;
    }
  }

  && {
    ${StyledIcon} {
      color: ${props => props.theme.color.text.beta};
    }

    :hover {
      background: none;
      color: ${props => props.theme.color.error.alpha};
      ${StyledIcon} {
        color: ${props => props.theme.color.error.alpha};
      }
    }
  }

  && {
    z-index: 100;
    position: absolute;
    top: -3px;
    right: 25px;
    ${StyledIcon} {
      color: ${props => props.theme.color.text.beta};
      :hover {
        color: ${props => props.theme.color.error.alpha};
      }
    }
  }
`;

export const StyledInputText = styled.div<StyledTransferProps>`
  position: absolute;
  overflow: hidden;
  text-overflow: ellipsis;
  left: 10px;
  top: 0;
  z-index: 0;
  white-space: nowrap;
  width: calc(100% - 40px);
  color: ${props => props.theme.color.text.alpha};
  span  {
    ${props =>
      props.size === 'small' &&
      css`
        font-size: ${props.theme.font.size.sm};
        height: ${parseInt(props.theme.height.sm, 0)}px;
        line-height: ${parseInt(props.theme.height.sm, 0)}px;
      `}
      ${props =>
        props.size === 'medium' &&
        css`
          font-size: ${props.theme.font.size.md};
          height: ${parseInt(props.theme.height.md, 0)}px;
          line-height: ${parseInt(props.theme.height.md, 0)}px;
        `}
      ${props =>
        props.size === 'large' &&
        css`
          font-size: ${props.theme.font.size.lg};
          height: ${parseInt(props.theme.height.lg, 0)}px;
          line-height: ${parseInt(props.theme.height.lg, 0)}px;
        `}
  }
`;

export const StyledChosenHeader = styled.div<StyledTransferProps>`
  border-bottom: 1px solid ${props => props.theme.color.border};
    ${props =>
      props.size === 'small' &&
      css`
        font-size: ${props.theme.font.size.sm};
        height: ${parseInt(props.theme.height.sm, 0)}px;
        line-height: ${parseInt(props.theme.height.sm, 0)}px;
      `}
    ${props =>
      props.size === 'medium' &&
      css`
        font-size: ${props.theme.font.size.md};
        height: ${parseInt(props.theme.height.md, 0)}px;
        line-height: ${parseInt(props.theme.height.md, 0)}px;
      `}
    ${props =>
      props.size === 'large' &&
      css`
        font-size: ${props.theme.font.size.lg};
        height: ${parseInt(props.theme.height.lg, 0)}px;
        line-height: ${parseInt(props.theme.height.lg, 0)}px;
      `};
`;

export const StyledTransferSide = styled.div<StyledTransferProps>`
  display: block;
  width: ${props =>
    props.isOpen && props.direction === 'horizontal' ? '50%' : '100%'};
   ${props =>
     props.isOpen &&
     css`
       min-width: 220px;
     `}
   
   ${props =>
     props.direction === 'horizontal'
       ? css`
           float: left;
         `
       : css``}
  &:first-child {
    width: ${props =>
      props.isHalfOpen && props.direction === 'horizontal' && props.isOpen
        ? 'calc(50% - 1px)'
        : '100%'};
    ${props =>
      props.isOpen &&
      !props.isHalfOpen &&
      css`
        border-right: 1px solid ${props => props.theme.color.border};
        border-top-right-radius: ${props => props.theme.radius};
      `}
    
    ${props =>
      props.isOpen &&
      !props.isHalfOpen &&
      css`
        border-color: ${props => props.theme.color.primary.alpha};
      `}
    ${props =>
      props.isOpen &&
      props.isHalfOpen &&
      props.direction === 'horizontal' &&
      css`
        border-right: 1px solid ${props => props.theme.color.border};
      `}
  }
  > ${StyledChosenHeader} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: ${props => props.theme.color.primary.alpha};
    ${props =>
      props.direction === 'horizontal'
        ? css`
            border-top: none;
          `
        : css`
            border-top: 1px solid ${props => props.theme.color.border};
          `}
    button,
    span:not(Icon) {
      margin: 0 ${props => props.theme.padding.sm};
    }
  }
`;

export const StyledTransferFooter = styled.div<StyledTransferProps>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  float: left;
  border-top: 1px solid ${props => props.theme.color.border};

  button {
    margin: ${props => props.theme.margin.sm} ${props => props.theme.margin.sm}
      ${props => props.theme.margin.sm} 0;
  }
`;

export const StyledTransferDeleteAllButtonIcon = styled(Icon)<
  StyledTransferProps
>`
  padding-right: 5px;
  ${props =>
    props.size === 'small' &&
    css`
      padding-right: 0;
    `}
`;

export const StyledTransferLi = styled.li<StyledTransferProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${props => props.theme.margin.sm};
  height: ${props => props.theme.height.md};
  line-height: ${props => props.theme.height.md};

  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;

  &:hover {
    ${StyledCheckboxInputShown} {
      border: 1px solid ${props => props.theme.color.primary.alpha};
    }
    background-color: ${props => props.theme.color.background.gamma};
  }

  > i {
    color: ${props => props.theme.color.text.beta};
  }

  :hover {
    button, ${StyledDeleteOneIcon} > svg > path {
      background-color: unset!important;
      color: ${props => props.theme.color.error.alpha};
    }
  }

  ${StyledCheckboxLabel} {
    display: flex;
    width: 100%;
  }
  
 > span {
  ${props =>
    props.size === 'small' &&
    css`
      font-size: ${props.theme.font.size.sm};
      height: ${parseInt(props.theme.height.sm, 0)}px;
      line-height: ${parseInt(props.theme.height.sm, 0)}px;
    `}
    ${props =>
      props.size === 'medium' &&
      css`
        font-size: ${props.theme.font.size.md};
        height: ${parseInt(props.theme.height.md, 0)}px;
        line-height: ${parseInt(props.theme.height.md, 0)}px;
      `}
    ${props =>
      props.size === 'large' &&
      css`
        font-size: ${props.theme.font.size.lg};
        height: ${parseInt(props.theme.height.lg, 0)}px;
        line-height: ${parseInt(props.theme.height.lg, 0)}px;
      `}
 }
  
  ${StyledCheckboxSpan} > span{
  ${props =>
    props.size === 'small' &&
    css`
      font-size: ${props.theme.font.size.sm};
      height: ${parseInt(props.theme.height.sm, 0)}px;
      line-height: ${parseInt(props.theme.height.sm, 0)}px;
    `}
    ${props =>
      props.size === 'medium' &&
      css`
        font-size: ${props.theme.font.size.md};
        height: ${parseInt(props.theme.height.md, 0)}px;
        line-height: ${parseInt(props.theme.height.md, 0)}px;
      `}
    ${props =>
      props.size === 'large' &&
      css`
        font-size: ${props.theme.font.size.lg};
        height: ${parseInt(props.theme.height.lg, 0)}px;
        line-height: ${parseInt(props.theme.height.lg, 0)}px;
      `}
  }
  

  ${StyledCheckboxInputShown} {
    min-width: 16px;
  }

  div,
  span,
  i {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export const DeleteAllButton = styled(Button)<StyledTransferProps>`
  ${props =>
    props.globalSize === 'small' &&
    css`
      border: none;
    `}
`;

export const StyledTransferSpan = styled.span<StyledTransferProps>`
  ${props =>
    props.size === 'medium' &&
    css`
      font-size: ${props.theme.font.size.md};
      height: ${parseInt(props.theme.height.md, 0)}px;
      line-height: ${parseInt(props.theme.height.md, 0)}px;
    `}
  ${props =>
    props.size === 'large' &&
    css`
      font-size: ${props.theme.font.size.lg};
      height: ${parseInt(props.theme.height.lg, 0)}px;
      line-height: ${parseInt(props.theme.height.lg, 0)}px;
    `}
  ${props =>
    props.size === 'small' &&
    css`
      font-size: ${props.theme.font.size.sm};
      height: ${parseInt(props.theme.height.sm, 0)}px;
      line-height: ${parseInt(props.theme.height.sm, 0)}px;
    `}
    
`;

export const StyledTransferOptions = styled.div<StyledTransferProps>`
  position: relative;
  z-index: 100;
`;

export const StyledTransfer = styled.div<StyledTransferProps>`
  ${props =>
    props.isOpen &&
    props.isHalfOpen &&
    props.direction === 'horizontal' &&
    css`
      min-width: 600px;
    `};
  ${props =>
    props.isOpen &&
    props.isHalfOpen &&
    props.direction === 'vertical' &&
    css``};
  display: block;
  position: absolute;
  background-color: ${props => props.theme.color.background.alpha};
  border: 1px solid ${props => props.theme.color.border};
  border-radius: ${props => props.theme.radius};
  box-shadow: none;
  font-size: 14px;
  box-sizing: border-box;
  font-family: ${props => props.theme.font.family};
   
  ${props =>
    props.isDisabled &&
    css`
      color: ${props.theme.color.text.beta};
      cursor: not-allowed;
      background-color: ${props.theme.color.default};
      outline: 0;

      &:hover,
      &:focus {
        outline: 0;
        box-shadow: none;
        border: 1px solid ${props.theme.color.border};
      }
    `}
   
   ${props =>
     !props.isOpen &&
     css`
       ${props.size === 'small' &&
         css`
           height: ${parseInt(props.theme.height.sm, 0)}px;
         `}
  ${props.size === 'medium' &&
    css`
      height: ${parseInt(props.theme.height.md, 0)}px;
    `}
  ${props.size === 'large' &&
    css`
      height: ${parseInt(props.theme.height.lg, 0)}px;
    `}
     `}
  
  ${props =>
    props.isFullWidth &&
    css`
      width: 100%;
    `}

  ${props =>
    props.isOpen &&
    css`
      box-shadow: ${props => props.theme.boxShadow.md};
      z-index: 100000;
    `}
  }
  ${props =>
    !props.isDisabled &&
    css`
      &:hover {
        border-color: ${props => props.theme.color.primary.alpha};
      }
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: ${props => props.theme.color.primary.alpha};
    `}
  
  ${props =>
    props.position === 'bottom' &&
    css`
      bottom: 0;
    `}
  
   ${props =>
     props.position === 'top' &&
     css`
       top: 0;
     `}
   ${props =>
     props.position === 'right' &&
     css`
       right: 0;
     `}
   
   ${props =>
     props.position === 'left' &&
     css`
       left: 0;
     `}
`;

StyledTransferUl.defaultProps = {
  theme
};

StyledTransferLi.defaultProps = {
  theme
};

StyledTransferFooter.defaultProps = {
  theme
};

StyledTransferContainer.defaultProps = {
  theme
};

StyledTransfer.defaultProps = {
  theme
};

StyledTransferSide.defaultProps = {
  theme
};

StyledTransferSpan.defaultProps = {
  theme
};

StyledTransferOptions.defaultProps = {
  theme
};

StyledInputText.defaultProps = {
  theme
};

StyledTransferUl.displayName = 'StyledTransferUl';
StyledTransferLi.displayName = 'StyledTransferLi';
StyledTransferFooter.displayName = 'StyledTransferFooter';
StyledTransfer.displayName = 'StyledTransfer';
StyledTransferSide.displayName = 'StyledTransferSide';
StyledTransferContainer.displayName = 'StyledTransferContainer';
StyledTransferSpan.displayName = 'StyledTransferSpan';
