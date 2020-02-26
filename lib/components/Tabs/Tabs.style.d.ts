import { Size } from '../../types';
import { TabsProps } from './Tabs';
interface StyledTabsContainerProps extends TabsProps {
}
export declare const StyledTabsContainer: import("styled-components").StyledComponent<"div", any, StyledTabsContainerProps, never>;
interface StyledTabsBarProps {
    isAlternative: boolean;
    size: Size;
}
export declare const StyledTabsBar: import("styled-components").StyledComponent<"div", any, StyledTabsBarProps, never>;
interface StyledTabsContentProps {
    isBordered: boolean;
    hasBackground?: boolean;
    size: Size;
}
export declare const StyledTabsContent: import("styled-components").StyledComponent<"div", any, StyledTabsContentProps, never>;
export {};
