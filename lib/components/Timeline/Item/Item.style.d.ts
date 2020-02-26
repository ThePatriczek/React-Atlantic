/// <reference types="react" />
import { Type } from '../../../types';
export interface StyledTimelineItemProps {
    index?: number;
    highlight?: boolean;
}
export interface StyledTimelineCircleProps {
    isActive?: boolean;
    type?: Type;
}
export interface StyledTimelineTitleProps {
    isActive?: boolean;
}
export interface StyledTimelineContainerProps {
    isMain?: boolean;
}
export declare const StyledTimelineItem: import("styled-components").StyledComponent<"li", any, StyledTimelineItemProps, never>;
export declare const StyledTimelineSide: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const StyledTimelineCircle: import("styled-components").StyledComponent<"div", any, StyledTimelineCircleProps, never>;
export declare const StyledTimelineTitle: import("styled-components").StyledComponent<import("react").FC<import("react").PropsWithChildren<import("../../Typography/Link").LinkProps>>, any, StyledTimelineTitleProps, never>;
export declare const StyledTimelineCaption: import("styled-components").StyledComponent<import("react").FC<import("react").PropsWithChildren<import("../../Typography/Link").LinkProps>>, any, {
    hasMarginRight: boolean;
}, never>;
export declare const StyledTimelineContainer: import("styled-components").StyledComponent<"div", any, StyledTimelineContainerProps, never>;
export declare const StyledTimelineButton: import("styled-components").StyledComponent<import("react").FC<import("react").PropsWithChildren<import("../..").ButtonProps>>, any, {}, never>;
export declare const StyledTimelineCaptionContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
