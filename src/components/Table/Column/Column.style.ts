import styled, { css } from 'styled-components';
import { StyledSkeleton } from '../../Skeleton/Skeleton.style';
import { StyledTitle5 } from '../../Typography/Title/Title.style';

export const StyledColumn = styled.td`
  padding: ${props => props.theme.padding.md};
  border-left: 1px solid ${props => props.theme.color.border};
  border-bottom: 1px solid ${props => props.theme.color.border};

  &:first-child {
    border-left: none;
  }

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
  white-space: nowrap;
  z-index: 1;
  background-color: ${props => props.theme.color.background.beta};
  font-weight: 700;
  
  &:before {
    content: "";
    left: 0;
    top: 0;
    bottom: 0;
    position: absolute;
    border-left: 1px solid ${props => props.theme.color.border};
  }
  
  &:after {
    content: "";
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    border-bottom: 1px solid ${props => props.theme.color.border};
  }
  
  &:first-child {
    border-top-left-radius: ${props => props.theme.radius};
    
    &:before {
      border-left: none;
    }
  }
  
  &:last-child {
    border-top-right-radius: ${props => props.theme.radius};
  }

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
`;

export const StyledColumnHeaderBox = styled.div`
  display: flex;
  align-items: center;
`;
