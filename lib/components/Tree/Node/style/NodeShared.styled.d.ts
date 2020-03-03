/// <reference types="react" />
export interface StyledTreeNodeSharedProps {
    size?: string;
    isOpened?: boolean;
}
export interface StyledTreeNodeContentSharedProps {
    isLeftShift?: boolean;
}
export declare const StyledTreeIconShared: import("styled-components").StyledComponent<import("react").FC<import("../../../Icon/Icon").IconProps>, any, {}, never>;
export declare const StyledTreeButtonShared: import("styled-components").StyledComponent<import("react").FC<import("react").PropsWithChildren<import("../../..").ButtonProps>>, any, {}, never>;
export declare const StyledTreeNodeContentShared: import("styled-components").StyledComponent<"div", any, StyledTreeNodeContentSharedProps, never>;
export declare const StyledTreeNodeShared: import("styled-components").StyledComponent<"li", any, StyledTreeNodeSharedProps, never>;
