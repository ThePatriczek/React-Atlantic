import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../../../theme';
import {
  Direction,
  HorizontalPosition,
  Size
} from '../../../../types';
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
}

export interface StyledTransferSideProps extends StyledTransferProps {
  side: HorizontalPosition;
}

export const StyledTransferContainer = styled.div<StyledTransferProps>``;

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
  font-size: ${props => props.theme.font.size.md};

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

export const StyledTransferUl = styled.ul<StyledTransferProps>`
  overflow-y: auto;
  overflow-x: hidden;
  list-style-type: none;
  margin: 0;
  padding: 0;
  height: 170px;
  color: ${props => props.theme.color.text.alpha};
`;

export const StyledTransferLi = styled.li<StyledTransferProps>`
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
    props.isHalfOpen &&
    !props.isFullWidth &&
    css`
      width: 600px;
    `}
`;

StyledTransferUl.defaultProps = {
  theme
};

StyledTransferLi.defaultProps = {
  theme
};

StyledTransfer.defaultProps = {
  theme
};

StyledTransferSide.defaultProps = {
  theme
};

StyledTransferUl.displayName = 'StyledTransferUl';
StyledTransferLi.displayName = 'StyledTransferLi';
StyledTransfer.displayName = 'StyledTransfer';
StyledTransferSide.displayName = 'StyledTransferSide';
