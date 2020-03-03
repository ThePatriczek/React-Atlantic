import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../../../theme';
import { Direction, Position, Size } from '../../../../types';
import {
  StyledCheckboxInputShown,
  StyledCheckboxLabel,
  StyledCheckboxSpan
} from '../../../Checkbox/Checkbox.style';
import { IconName } from '../../../Icon';
import { OptionType } from '../../Select.utils';
import { StyledChosenHeader, StyledDeleteOneIcon } from '../RightSide/style';

export interface StyledTransferProps {
  className?: string;
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

export const StyledTransferContainer = styled.div<StyledTransferProps>``;

export const StyledTransferUl = styled.ul<StyledTransferProps>`
  height: 170px;
  list-style: none;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  overflow-y: auto;
  overflow-x: hidden;
  color: ${props => props.theme.color.text.alpha};
`;

export const StyledTransferSide = styled.div<StyledTransferProps>`
  position: relative;
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

export const StyledTransferLi = styled.li<StyledTransferProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${props => props.theme.margin.sm};
  height: ${props => props.theme.height.md};
  line-height: ${props => props.theme.height.md};

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
  
  span {
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
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const StyledTransferOptions = styled.div<StyledTransferProps>`
  position: relative;
  z-index: 100;
`;

export const StyledInputText = styled.div<StyledTransferProps>`
  position: absolute;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  left: 10px;
  top: 0;
  z-index: 0;
  width: calc(100% - 40px);
  color: ${props => props.theme.color.text.alpha}; 
   span {
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

export const StyledTransfer = styled.div<StyledTransferProps>`
  width: fit-content;
  display: block;
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
    props.isOpen &&
    !props.isHalfOpen &&
    !props.isFullWidth &&
    css`
      width: 300px;
      box-shadow: ${props => props.theme.boxShadow.md};
      z-index: 3;
    `}
  
  ${props =>
    props.isOpen &&
    props.isHalfOpen &&
    !props.isFullWidth &&
    css`
      width: 600px;
      box-shadow: ${props => props.theme.boxShadow.md};
      z-index: 3;
    `}
  
   
    ${props =>
      props.isOpen &&
      props.isHalfOpen &&
      props.direction === 'vertical' &&
      css``};
  
  ${props =>
    props.isFullWidth &&
    css`
      width: 100%;
    `}
  ${props =>
    props.isOpen &&
    props.isHalfOpen &&
    props.isFullWidth &&
    css`
      min-width: 600px;
      width: 100%;
    `}
  ${props =>
    props.isOpen &&
    !props.isHalfOpen &&
    props.isFullWidth &&
    css`
      min-width: 300px;
      width: 100%;
    `}
  
  ${props =>
    props.isOpen &&
    props.isHalfOpen &&
    props.direction === 'horizontal' &&
    css`
      min-width: 600px;
    `};
  
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

StyledTransferContainer.defaultProps = {
  theme
};

StyledTransfer.defaultProps = {
  theme
};

StyledTransferSide.defaultProps = {
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
StyledTransfer.displayName = 'StyledTransfer';
StyledTransferSide.displayName = 'StyledTransferSide';
StyledTransferContainer.displayName = 'StyledTransferContainer';
