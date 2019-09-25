import styled, { css } from 'styled-components';
import { theme } from '../../../theme';
import { getDefaultStyledText } from '../Text/Text.style';

export const StyledParagraph = styled.p`
  ${props => getDefaultStyledText(props)};

  ${props =>
    css`
      margin-bottom: ${props.theme.margin.md};
    `}
`;

StyledParagraph.defaultProps = {
  theme
};
