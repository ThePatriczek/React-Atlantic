import styled from "styled-components";
import { theme } from "../../../theme";

export const StyledRadioGroup = styled.div`
  label.atlantic--radio_button:not(:only-child) {
    border-radius: 0;

    &:after {
      border-radius: 0;
    }

    :first-of-type {
      border-radius: ${props => props.theme.radius} 0 0
        ${props => props.theme.radius};

      &:after {
        border-radius: ${props => props.theme.radius} 0 0
          ${props => props.theme.radius};
      }
    }

    :last-of-type {
      border-radius: 0 ${props => props.theme.radius}
        ${props => props.theme.radius} 0;

      &:after {
        border-radius: 0 ${props => props.theme.radius}
          ${props => props.theme.radius} 0;
      }
    }
  }
`;
StyledRadioGroup.defaultProps = {
  theme
};
