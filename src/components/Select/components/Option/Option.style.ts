import styled, { css } from "styled-components";
import { theme } from "../../../../theme";
import { SelectProps } from "../../Select";

interface StyledOptionProps {
  isMultiLine?: boolean;
}

export const StyledOption = styled.div<SelectProps & StyledOptionProps>`
  display: block;
  padding: 0 ${props => props.theme.padding.md};
  line-height: ${props => props.theme.height.md};
  background-color: ${props => props.theme.color.background.alpha};
  color: ${props => props.theme.color.text.alpha};
  cursor: pointer;

  &:nth-child(odd) {
    background-color: ${props => props.theme.color.background.gamma};
  }

  &:hover {
    background-color: ${props => props.theme.color.background.beta};
  }

  ${props =>
    !props.isMultiLine &&
    css`
      height: ${props => props.theme.height.md};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `}

  ${props =>
    props.size === "small" &&
    css`
      line-height: ${props => props.theme.height.sm};
      ${!props.isMultiLine &&
        css`
          height: ${props => props.theme.height.sm};
        `}

      span {
        font-size: ${props => props.theme.font.size.sm};
      }
    `}

  ${props =>
    props.size === "large" &&
    css`
      line-height: ${props => props.theme.height.lg};
      ${!props.isMultiLine &&
        css`
          height: ${props => props.theme.height.lg};
        `}

      span {
        font-size: ${props => props.theme.font.size.lg};
      }
    `}
`;

StyledOption.defaultProps = {
  theme
};
