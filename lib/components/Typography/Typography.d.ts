import * as React from 'react';
import { LinkProps } from './Link';
import { ParagraphProps } from './Paragraph';
import { TextProps } from './Text';
import { TitleProps } from './Title';
export interface Typography {
    Text: React.FC<TextProps>;
    Title: React.FC<TitleProps>;
    Paragraph: React.FC<ParagraphProps>;
    Link: React.FC<LinkProps>;
}
export declare const Typography: Typography;
