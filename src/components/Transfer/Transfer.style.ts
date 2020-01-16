import styled, { css } from 'styled-components';
import { theme } from '../../theme';
import {
  StyledCheckboxInputShown,
  StyledCheckboxLabel
} from '../Checkbox/Checkbox.style';
import { Icon } from '../Icon';
import { Input } from '../Input';
import { StyledInput } from '../Input/Input.style';

interface StyledTransferProps {
  isOpen?: boolean;
}

export const StyledTransferContainer = styled.div<StyledTransferProps>`
  position: relative;
  margin-left: 40px;
  z-index: 1000;
`;

export const StyledTransferSideHeader = styled.div<StyledTransferProps>`
  border-bottom: 1px solid #d9d9d9;
`;

export const StyledTransfer = styled.div<StyledTransferProps>`
  display: block;
  width: 700px;
  position: absolute;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  box-shadow: ${props => props.theme.boxShadow.md};

  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI';
`;

export const StyledTransferInput = styled(Input)<StyledTransferProps>`
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
  width: 50%;

  &:first-child {
    width: calc(50% - 1px);
    border-right: 1px solid #d9d9d9;
  }

  > ${StyledTransferSideHeader} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 40px;
    color: ${props => props.theme.color.primary.alpha};

    ${StyledTransferInput} {
      width: calc(100% - 10px);

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
`;

export const StyledTransferUl = styled.ul<StyledTransferProps>`
  list-style: none;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  max-height: 150px;
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

StyledTransferContainer.displayName = 'StyledTransferContainer';
