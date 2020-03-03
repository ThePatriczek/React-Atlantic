import styled, { css } from 'styled-components';
import { Button } from '../../../../Button';
import { StyledIcon } from '../../../../Icon/Icon.style';
import { Input } from '../../../../Input';
import { StyledInput, StyledInputWrapper } from '../../../../Input/Input.style';
import { StyledTransferProps } from '../../style';

export const StyledTransferInput = styled(Input)<StyledTransferProps>`
  z-index: 1;
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
        ${StyledInputWrapper} {
          border-right: 1px solid ${props => props.theme.color.primary.alpha};
          ${!props.isHalfOpen &&
            css`
              border-top-right-radius: ${props => props.theme.radius};
            `}

          ${props.isHalfOpen &&
            props.direction === 'vertical' &&
            css`
              border-top-right-radius: ${props => props.theme.radius};
            `}
        }
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
      }
    `}
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
