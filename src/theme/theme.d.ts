import { COLORS } from './colors';
import { FONT_SIZE } from './fontSize';
export declare const theme: {
    colors: {
        primary: COLORS;
        heading: COLORS;
        appBackground: COLORS;
        panelBackground: COLORS;
        shadow: COLORS;
    };
    layout: {
        maxWidth: string;
    };
    font: {
        size: {
            logo: FONT_SIZE;
            large: FONT_SIZE;
            normal: FONT_SIZE;
            small: FONT_SIZE;
        };
        colors: {
            table: COLORS;
        };
    };
};
export declare type Theme = typeof theme;
