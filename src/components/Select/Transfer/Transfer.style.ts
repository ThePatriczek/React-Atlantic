import styled, { css } from 'styled-components';
import { theme } from '../../../theme';
import {
  StyledCheckboxInputShown,
  StyledCheckboxLabel
} from '../../Checkbox/Checkbox.style';
import { Icon, IconName } from '../../Icon';
import { Input } from '../../Input';
import { StyledInput } from '../../Input/Input.style';

interface StyledTransferProps {
  isOpen?: boolean;
  isHalfOpen?: boolean;
  iconLeft?: IconName;
}

export const StyledTransferContainer = styled.div<StyledTransferProps>`
  position: relative;
  margin-left: 40px;
  z-index: 1000;
`;

export const StyledTransferSideHeader = styled.div<StyledTransferProps>`
  border-bottom: 1px solid #d9d9d9;
  height: ${props => props.theme.height.md};
`;

export const StyledTransfer = styled.div<StyledTransferProps>`
  display: block;
  min-width: 350px;
  width: ${props => (props.isOpen && props.isHalfOpen ? '700px' : '350px')};
  position: absolute;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  box-shadow: ${props => props.theme.boxShadow.md};

  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI';
`;

export const StyledTransferInput = styled(Input)<StyledTransferProps>`
  ${StyledInput} {
    border: 0;
  }

  ${props =>
    props.iconLeft === undefined &&
    css`
      padding-left: 20px;
    `}

  ${props =>
    props.isOpen &&
    css`
      ${StyledInput} {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    `}
`;

export const StyledTransferSide = styled.div<StyledTransferProps>`
  display: block;
  float: left;
  width: ${props => (props.isOpen ? '50%' : '100%')};

  &:first-child {
    width: ${props =>
      props.isHalfOpen && props.isOpen ? 'calc(50% - 1px)' : '100%'};
    border-right: 1px solid #d9d9d9;
  }

  > ${StyledTransferSideHeader} {
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
    span:not(.icon):nth-child(1) {
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

  ${StyledCheckboxInputShown} {
    min-width: 16px;
  }

  span {
    height: 34px;
    line-height: 34px;
    margin: 0;
    padding-right: ${props => props.theme.margin.sm};
  }

  div,
  span,
  i {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export const StyledTransferSpan = styled.span<StyledTransferProps>``;

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

StyledTransferSideHeader.defaultProps = {
  theme
};

StyledTransferContainer.displayName = 'StyledTransferContainer';
