import styled, { css } from 'styled-components';
import { PureButton } from '../../../../Button/Pure';
import { StyledIcon } from '../../../../Icon/Icon.style';
import { Input } from '../../../../Input';
import { StyledInput } from '../../../../Input/Input.style';
import { StyledTransferProps } from '../../style';

export const StyledSearchCancel = styled(PureButton)<StyledTransferProps>`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 25px;

  &:hover {
    ${StyledIcon} {
      color: ${props => props.theme.color.error.alpha};
    }
  }

  ${StyledIcon} {
    height: auto;
    color: ${props => props.theme.color.text.beta};
  }
`;

export const StyledTransferInput = styled(Input)<StyledTransferProps>`
  ${StyledInput} {
    border: none;

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

      &:hover {
        border-color: ${props => props.theme.color.primary.alpha};
      }

      ${StyledInput} {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    `}
`;
