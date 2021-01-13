import styled, { css } from 'styled-components';
import { Button } from '../../Button';
import { Typography } from '../../Typography';

const { Text } = Typography;

interface StyledPaginationButtonProps {
  isSimple?: boolean;
  isActive?: boolean;
}

export const StyledPaginationButton = styled(Button)<
  StyledPaginationButtonProps
>`
  && {
    background-color: ${props => props.theme.color.background.alpha};

    ${props =>
      props.isDisabled &&
      !props.isSimple &&
      css`
        background-color: ${props.theme.color.background.gamma};
      `}

    ${props =>
      props.isDisabled &&
      props.isActive &&
      !props.isSimple &&
      css`
        background-color: ${props.theme.color.primary.alpha};
        border: 1px solid ${props.theme.color.primary.alpha};

        filter: grayscale(100%);
      `}
    
      ${props =>
        props.isSimple &&
        css`
          height: ${props => props.theme.height.sm};
          box-shadow: none;
          padding: 0
            ${props =>
              `${parseInt(props.theme.padding.sm, 0) +
                parseInt(props.theme.padding.xs, 0)}px`};
          font-size: ${props => props.theme.font.size.sm};
          border: 0;
        `}
  }

  ${props =>
    !props.isActive &&
    !props.isDisabled &&
    css`
      &:hover {
        background-color: ${props.theme.color.background.gamma};
      }
    `}


`;

export const ButtonPaginationText = styled(Text)``;

export const StyledActivePaginationButton = styled(StyledPaginationButton)<
  StyledPaginationButtonProps
>`
  && {
    ${props =>
      props.isActive &&
      !props.isDisabled &&
      css`
        cursor: default;
        border: 1px solid ${props.theme.color.primary.alpha};

        ${ButtonPaginationText} {
          color: ${props.theme.color.primary.alpha};
        }
      `}
  }
`;

export const StyledNormalPaginationButton = styled(
  StyledActivePaginationButton
)<StyledPaginationButtonProps>`
  ${props =>
    props.isActive &&
    props.isDisabled &&
    css`
      ${ButtonPaginationText} {
        color: ${props.theme.color.background.alpha};
      }
    `}
`;

export const StyledSimplePaginationButton = styled(
  StyledActivePaginationButton
)<StyledPaginationButtonProps>`
  ${props =>
    !props.isActive &&
    css`
      border: 0;
    `}
`;
