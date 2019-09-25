import * as React from 'react';
import { Link, LinkProps } from './Link';
import { Paragraph, ParagraphProps } from './Paragraph';
import { Text, TextProps } from './Text';
import { Title, TitleProps } from './Title';

export interface Typography {
  Text: React.FC<TextProps>;
  Title: React.FC<TitleProps>;
  Paragraph: React.FC<ParagraphProps>;
  Link: React.FC<LinkProps>;
}

export const Typography: Typography = {
  Text,
  Title,
  Paragraph,
  Link
};
