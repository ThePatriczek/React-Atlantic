import { Type } from '../../../types';
export declare const getDefaultStyledText: (props: {
    theme: {
        color: {
            default: string;
            primary: string;
            success: string;
            info: string;
            warning: string;
            error: string;
            border: string;
            black: string;
            white: string;
        };
        padding: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
        margin: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
        radius: string;
        rounded: string;
        font: {
            size: {
                sm: string;
                md: string;
                lg: string;
            };
            family: string;
        };
        height: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
        };
        width: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
        };
        boxShadow: {
            sm: string;
        };
    };
}) => import("styled-components").FlattenSimpleInterpolation;
export declare const StyledText: import("styled-components").StyledComponent<"span", any, {
    type: Type;
}, never>;
export declare const StyledStrongText: import("styled-components").StyledComponent<"strong", any, {
    type: Type;
}, never>;
export declare const StyledMarkText: import("styled-components").StyledComponent<"mark", any, {}, never>;
export declare const StyledCodeText: import("styled-components").StyledComponent<"code", any, {}, never>;
export declare const StyledInsText: import("styled-components").StyledComponent<"ins", any, {}, never>;
export declare const StyledDelText: import("styled-components").StyledComponent<"del", any, {}, never>;
