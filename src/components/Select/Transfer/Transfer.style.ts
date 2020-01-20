import styled, { css } from 'styled-components';
import { theme } from '../../../theme';
import { Size } from '../../../types';
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
  isHalfOpen?: boolean;
  iconLeft?: IconName;
  placeholder?: string;
  isDisabled?: boolean;
  options?: OptionType[];
  closeText?: string;
  submitText?: string;
  deleteAllText?: string;
  notFoundMessage?: any;
  isFocused?: boolean;
  size?: Size;
  notFoundComponent?: any;
}

export const StyledTransferContainer = styled.div<StyledTransferProps>`
  position: relative;
  z-index: 1000;
`;

export const StyledTransferUl = styled.ul<StyledTransferProps>`
  min-height: 150px;
  max-height: 150px;
  list-style: none;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  overflow: scroll;
`;

export const StyledTransfer = styled.div<StyledTransferProps>`
  display: block;
  min-width: 300px;
  width: ${props => (props.isOpen && props.isHalfOpen ? '600px' : '300px')};
  position: absolute;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  box-shadow: none;
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI';

  ${props =>
    props.isOpen &&
    css`
      box-shadow: ${props => props.theme.boxShadow.md};
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
`;

export const StyledTransferInput = styled(Input)<StyledTransferProps>`
  ${StyledInput} {
    border: 0;
    padding-right: 55px;
  }

  ${props =>
    props.isOpen &&
    css`
      border-bottom: 1px solid #d9d9d9;

      :hover {
        border-color: ${props => props.theme.color.primary.alpha};
      }
      ${StyledInput} {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    `}
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

export const StyledChosenHeader = styled.div<StyledTransferProps>`
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
    border-bottom: 1px solid #d9d9d9
`;

export const StyledInputHeader = styled.div<StyledTransferProps>`
  position: relative;
`;

export const StyledTransferSide = styled.div<StyledTransferProps>`
  display: block;
  float: left;
  width: ${props => (props.isOpen ? '50%' : '100%')};

  &:first-child {
    width: ${props =>
      props.isHalfOpen && props.isOpen ? 'calc(50% - 1px)' : '100%'};
    ${props =>
      props.isOpen &&
      !props.isHalfOpen &&
      css`
        border-right: 1px solid #d9d9d9;
        border-top-right-radius: 4px;
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
      css`
        border-right: 1px solid #d9d9d9;
      `}
  }

  > ${StyledChosenHeader} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: ${props => props.theme.color.primary.alpha};

    ${StyledTransferInput} {
      input {
        width: 100%;
      }
    }

    button,
    span:not(.icon) {
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
  border-top: 1px solid #d9d9d9;

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

  &:hover {
    > i {
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

export const DeleteAllButton = styled(Button)<StyledTransferProps>``;

export const StyledTransferSpan = styled.span<StyledTransferProps>`
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

StyledTransferUl.displayName = 'StyledTransferUl';
StyledTransferLi.displayName = 'StyledTransferLi';
StyledTransferFooter.displayName = 'StyledTransferFooter';
StyledTransfer.displayName = 'StyledTransfer';
StyledTransferSide.displayName = 'StyledTransferSide';
StyledTransferContainer.displayName = 'StyledTransferContainer';
StyledTransferSpan.displayName = 'StyledTransferSpan';
