import { ReactNode } from 'react';
import { List } from 'react-virtualized';
import styled, { css } from 'styled-components';
import { theme } from '../../../../theme';
import { Direction, HorizontalPosition, Size } from '../../../../types';
import {
  StyledCheckboxInputShown,
  StyledCheckboxLabel,
  StyledCheckboxSpan
} from '../../../Checkbox/Checkbox.style';
import { IconName } from '../../../Icon';
import { StyledIcon } from '../../../Icon/Icon.style';
import { StyledInput } from '../../../Input/Input.style';
import { OptionType } from '../../Select.utils';
import {
  StyledChosenHeader,
  StyledDeleteAllButton,
  StyledDeleteOneIcon,
  StyledTransferSpan
} from '../RightSide/style';

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
  isFullWidth?: boolean;
  labelLeft?: string | ReactNode;
  labelTop?: string | ReactNode;
  ref?: any;
  visibleRows?: number;
  openWidth?: string;
  halfOpenWidth?: string;
}

export interface StyledTransferSideProps extends StyledTransferProps {
  side: HorizontalPosition;
}

export const StyledSideList = (theme) => css`
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  color: ${theme.color.text.alpha};
`;

export const StyledTransferForm = styled.form<StyledTransferProps>`
  display: flex;
  flex-wrap: nowrap;

  ${props =>
    props.direction === 'horizontal'
      ? css`
          flex-direction: row;
        `
      : css`
          flex-direction: column;
        `}
`;

export const StyledTransferSide = styled.div<StyledTransferSideProps>`
  box-sizing: border-box;
  position: relative;
  display: block;
  width: ${props =>
    props.isOpen && props.isHalfOpen && props.direction === 'horizontal'
      ? '50%'
      : '100%'};
  font-family: ${props => props.theme.font.family};
  
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

  ${props =>
    props.isHalfOpen &&
    props.direction === 'horizontal' &&
    props.side === 'left' &&
    css`
      border-right: 1px solid ${props => props.theme.color.border};
    `}

  ${StyledChosenHeader} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: ${props => props.theme.color.primary.alpha};
    
    ${props =>
      props.direction === 'vertical'
        ? css`
            border-top: 1px solid ${props => props.theme.color.border};
          `
        : ''}
    
    ${StyledDeleteAllButton},
    ${StyledTransferSpan} {
      margin: 0 ${props => props.theme.margin.sm};
    }
  }
`;

export const StyledTransferRightList = styled.div<StyledTransferProps>`
  ${props => StyledSideList(props.theme)};

  ${props =>
    props.visibleRows &&
    props.size === 'small' &&
    css`
      height: ${props.visibleRows * parseFloat(theme.height.sm) + 'px'};
    `}
  
  ${props =>
    props.visibleRows &&
    props.size === 'medium' &&
    css`
      height: ${props.visibleRows * parseFloat(theme.height.md) + 'px'};
    `}
  
  ${props =>
    props.visibleRows &&
    props.size === 'large' &&
    css`
      height: ${props.visibleRows * parseFloat(theme.height.lg) + 'px'};
    `}
`;

export const StyledTransferLeftList = styled(List)<StyledTransferProps>`
  && {
    ${props => StyledSideList(props.theme)};
    width: 100% !important;
    outline: none;

    .ReactVirtualized__Grid__innerScrollContainer {
      max-width: none !important;
    }
  }
`;

export const StyledTransferItem = styled.div<StyledTransferProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${props => props.theme.padding.sm};
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.color.background.gamma};

    ${StyledCheckboxInputShown} {
      border: 1px solid ${props => props.theme.color.primary.alpha};
    }
    
    ${StyledDeleteOneIcon} svg {
      color: ${props => props.theme.color.error.alpha}
    }
  }

  ${StyledCheckboxLabel} {
    display: flex;
    width: 100%;

    ${props =>
      props.size === 'small' &&
      css`
        height: ${parseInt(props.theme.height.sm, 0)}px;
        line-height: ${parseInt(props.theme.height.sm, 0)}px;
        font-size: ${props.theme.font.size.sm};
      `}

    ${props =>
      props.size === 'medium' &&
      css`
        height: ${parseInt(props.theme.height.md, 0)}px;
        line-height: ${parseInt(props.theme.height.md, 0)}px;
        font-size: ${props.theme.font.size.md};
      `}

    ${props =>
      props.size === 'large' &&
      css`
        font-size: ${props.theme.font.size.lg};
        height: ${parseInt(props.theme.height.lg, 0)}px;
        line-height: ${parseInt(props.theme.height.lg, 0)}px;
      `}
  }

  ${StyledCheckboxSpan},
  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const StyledTransfer = styled.div<StyledTransferProps>`
  display: block;
  width: 240px;
  border: 1px solid ${props => props.theme.color.border};
  border-radius: ${props => props.theme.radius};
  background-color: ${props => props.theme.color.background.alpha};
  
  &:hover {
    border-color: ${props => props.theme.color.primary.alpha};
  }

  ${props =>
    props.isDisabled &&
    css`
      color: ${props.theme.color.text.beta};
      outline: 0;

      &:hover,
      &:focus {
        outline: 0;
        box-shadow: none;
        border: 1px solid ${props.theme.color.border};

        ${StyledIcon} {
          color: ${props.theme.color.text.beta};
        }
      }

      ${StyledInput} {
        cursor: not-allowed;
        background-color: ${props.theme.color.default};
      }

      ${StyledIcon} {
        cursor: not-allowed;
      }
    `}
  
  ${props =>
    props.isFocused &&
    css`
      border-color: ${props.theme.color.primary.alpha};
    `}
  
  ${props =>
    (props.isOpen || (props.isOpen && props.isHalfOpen)) &&
    css`
      position: absolute;
      box-shadow: ${props.theme.boxShadow.md};
      z-index: 3;
    `}
  
  ${props =>
    props.isFullWidth &&
    css`
      width: 100%;
    `}
  
  ${props =>
    props.isOpen &&
    !props.isHalfOpen &&
    !props.isFullWidth &&
    css`
      width: 300px;
    `}
  
  ${props =>
    props.isOpen &&
    !props.isHalfOpen &&
    props.openWidth &&
    !props.isFullWidth &&
    css`
      width: ${props.openWidth};
    `}

  ${props =>
    props.isOpen &&
    props.isHalfOpen &&
    props.direction === 'horizontal' &&
    !props.isFullWidth &&
    css`
      width: 600px;
    `}
  
  ${props =>
    props.isOpen &&
    props.isHalfOpen &&
    props.direction === 'vertical' &&
    !props.isFullWidth &&
    css`
      width: 300px;
    `}
  
  ${props =>
    props.isOpen &&
    props.isHalfOpen &&
    props.halfOpenWidth &&
    !props.isFullWidth &&
    css`
      width: ${props.halfOpenWidth};
    `}
`;

export const StyledTransferContainer = styled.div<StyledTransferProps>`
  position: relative;

  ${props =>
    (props.isOpen || (props.isOpen && props.isHalfOpen)) &&
    !props.isFullWidth &&
    css`
      width: 230px;
    `}
  
  ${props =>
    (props.isOpen || (props.isOpen && props.isHalfOpen)) &&
    props.isFullWidth &&
    css`
      width: 100%;
    `}
   
   ${props =>
     (props.isOpen || (props.isOpen && props.isHalfOpen)) &&
     props.size === 'small' &&
     css`
       height: ${props.theme.height.sm};
     `}
   
   ${props =>
     (props.isOpen || (props.isOpen && props.isHalfOpen)) &&
     props.size === 'medium' &&
     css`
       height: ${props.theme.height.md};
     `}
   
   ${props =>
     (props.isOpen || (props.isOpen && props.isHalfOpen)) &&
     props.size === 'large' &&
     css`
       height: ${props.theme.height.lg};
     `}
`;

StyledTransferRightList.defaultProps = {
  theme
};

StyledTransferItem.defaultProps = {
  theme
};

StyledTransfer.defaultProps = {
  theme
};

StyledTransferSide.defaultProps = {
  theme
};

StyledTransferLeftList.displayName = 'StyledTransferLeftList';
StyledTransferRightList.displayName = 'StyledTransferRightList';
StyledTransferItem.displayName = 'StyledTransferItem';
StyledTransfer.displayName = 'StyledTransfer';
StyledTransferSide.displayName = 'StyledTransferSide';
