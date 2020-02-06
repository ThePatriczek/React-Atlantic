import styled, { css } from 'styled-components';
import { StyledIcon } from '../../Icon/Icon.style';
import { StyledSkeleton } from '../../Skeleton/Skeleton.style';
import { StyledText } from '../../Typography/Text/Text.style';
import { StyledTitle5 } from '../../Typography/Title/Title.style';

export const StyledColumn = styled.td`
  padding: ${props => props.theme.padding.md};

  border: 1px solid ${props => props.theme.color.border};

  ${StyledTitle5} {
    margin-top: 0;
  }
`;

interface StyledColumnHeaderProps {
  isClickable: Readonly<boolean>;
  isActive: Readonly<boolean>;
  onClick: () => void;
}

export const StyledColumnHeader = styled.th<StyledColumnHeaderProps>`
  position: sticky;
  top: 0;
  padding: ${props => props.theme.padding.md};

  background-color: ${props => props.theme.color.background.beta};

  border-color: ${props => props.theme.color.border};
  border-style: solid;
  border-width: 1px 1px 0 1px;

  font-weight: bolder;
  white-space: nowrap;
  z-index: 1;

  ${props =>
    props.isClickable &&
    css`
      cursor: pointer;
      :hover {
        * {
          color: ${props.theme.color.primary.alpha};
        }
      }
    `}
  
    ${props =>
      props.isActive &&
      css`
        * {
          color: ${props.theme.color.primary.alpha};
        }
      `}

  ${StyledSkeleton} {
    margin: 0;
  }

  :after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 100%;

    border-bottom: 1px solid ${props => props.theme.color.border};
  }
`;

export const StyledColumnHeaderBox = styled.div`
  display: flex;
  align-items: center;
`;
