import * as React from 'react';
import { StyledParagraph } from './Paragraph.style';

export interface ParagraphProps {}

export const Paragraph: React.FC<React.PropsWithChildren<ParagraphProps>> = (
  props: React.PropsWithChildren<ParagraphProps>
): React.ReactElement => {
  const { children } = props;

  return <StyledParagraph>{children}</StyledParagraph>;
};

Paragraph.displayName = `Paragraph`;
