import * as React from 'react';
import { StyledParagraph } from './Paragraph.style';

export interface ParagraphProps {
  /** custom className */
  className?: string;
}

export const Paragraph: React.FC<React.PropsWithChildren<ParagraphProps>> = (
  props: React.PropsWithChildren<ParagraphProps>
): React.ReactElement => {
  const { children, className } = props;

  return <StyledParagraph className={className}>{children}</StyledParagraph>;
};

Paragraph.displayName = `Paragraph`;
