import { Size } from '../../types';
interface StyledTabsContainerProps {
    size: Size;
}
export declare const StyledTabsContainer: import("styled-components").StyledComponent<"div", any, StyledTabsContainerProps, never>;
interface StyledTabsBarProps extends StyledTabsContainerProps {
    isAlternative: boolean;
}
export declare const StyledTabsBar: import("styled-components").StyledComponent<"div", any, StyledTabsBarProps, never>;
interface StyledTabsContentProps extends StyledTabsContainerProps {
    isBordered: boolean;
}
export declare const StyledTabsContent: import("styled-components").StyledComponent<"div", any, StyledTabsContentProps, never>;
export {};
