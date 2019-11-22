/// <reference types="react" />
import { Type } from '../../types';
interface MessageStyleProps {
    isAlternative?: boolean;
    type?: Type;
}
export declare const StyledMessageContainer: import("styled-components").StyledComponent<"div", any, MessageStyleProps, never>;
export declare const StyledMessageIconSpan: import("styled-components").StyledComponent<"span", any, MessageStyleProps, never>;
export declare const StyledMessageIcon: import("styled-components").StyledComponent<import("react").FC<import("../Icon").IconProps>, any, MessageStyleProps, never>;
export declare const StyledMessageIconLoading: import("styled-components").StyledComponent<import("react").FC<import("../Icon").IconProps>, any, MessageStyleProps, never>;
export declare const StyledMessageContentSpan: import("styled-components").StyledComponent<"span", any, MessageStyleProps, never>;
export {};
