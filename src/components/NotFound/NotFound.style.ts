import styled from 'styled-components';
import { theme } from '../../theme';
import { StyledIcon } from '../Icon/Icon.style';
import { Paragraph } from '../Typography/Paragraph';

export const NotFoundContainer = styled.div`
  text-align: center;
  padding: ${props => props.theme.padding.xl};
`;

export const NotFoundImageContainer = styled.div`
  width: 80px;
  margin: ${props => props.theme.padding.xl} auto 0 auto;
  color: ${props => props.theme.color.text.beta};
  opacity: 0.5;

  figure {
    height: 80px;
    width: 80px;
    margin: 0;
  }
`;

export const NotFoundAnnotation = styled(Paragraph)`
  && {
    color: ${props => props.theme.color.primary.alpha};

    ${StyledIcon} {
      vertical-align: 7px;
      padding: 0 ${props => props.theme.padding.sm};
    }
  }
`;

NotFoundAnnotation.displayName = `NotFoundAnnotation`;

NotFoundContainer.defaultProps = {
  theme
};

NotFoundImageContainer.defaultProps = {
  theme
};

NotFoundAnnotation.defaultProps = {
  theme
};
