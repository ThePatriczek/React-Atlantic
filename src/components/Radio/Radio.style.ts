import styled, { css } from 'styled-components';
import { theme } from '../../theme';

interface StyledRadioProps {
  isChecked?: boolean;
  isDisabled?: boolean;
  name?: string;
  textPosition?: 'right' | 'left';
}

export const StyledRadioInputHidden = styled.input.attrs({
  type: 'radio'
})`
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
`;
export const StyledRadioLabel = styled.label<StyledRadioProps>`
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  font-size: ${props => props.theme.font.size.md};
  font-family: ${props => props.theme.font.family};
  ${props =>
    props.isDisabled &&
    css`
      cursor: not-allowed;
    `}
`;
export const StyledRadioSpan = styled.span<StyledRadioProps>`
  padding: 0 ${props => props.theme.padding.md};
  line-height: 1;
  user-select: none;
  ${props =>
    props.isDisabled &&
    css`
      color: ${props.theme.color.text.beta};
    `}
`;
export const StyledRadioInputShown = styled.div<StyledRadioProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => parseInt(props.theme.padding.xs, 0) - 1}px;

  background: ${props => props.theme.color.background.alpha};
  border-radius: ${props => props.theme.rounded};
  border: 1px solid ${props => props.theme.color.border};
  ${props =>
    props.isDisabled &&
    css`
      background: ${props.theme.color.default};
    `}
`;
export const StyledRadioMark = styled.div<StyledRadioProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.theme.width.xs};
  height: ${props => props.theme.height.xs};

  border-radius: ${props => props.theme.rounded};
  i {
    transform: scale(0.8);
    color: ${props => props.theme.color.text.gamma};
  }

  ${props => {
    if (props.isChecked) {
      if (props.isDisabled) {
        return css`
          background: ${props.theme.color.text.beta};
        `;
      }
      return css`
        background: ${props.theme.color.primary.alpha};
      `;
    }

    return css``;
  }}
`;

StyledRadioInputHidden.defaultProps = {
  theme
};

StyledRadioLabel.defaultProps = {
  theme
};

StyledRadioSpan.defaultProps = {
  theme
};

StyledRadioInputShown.defaultProps = {
  theme
};

StyledRadioMark.defaultProps = {
  theme
};
