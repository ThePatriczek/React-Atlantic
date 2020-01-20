/// <reference types="react" />
import { Size, Type } from '../../types';
import { IconName } from '../Icon';
interface NotificationStyleProps {
    size?: Size;
    type?: Type;
    titleIcon?: IconName;
    secondaryButton?: string;
    primaryButtonIcon?: IconName;
}
export declare const StyledNotificationTitleIcon: import("styled-components").StyledComponent<import("react").FC<import("../Icon").IconProps>, any, NotificationStyleProps, never>;
export declare const StyledNotificationTitle: import("styled-components").StyledComponent<import("react").FC<import("react").PropsWithChildren<import("../Typography/Title").TitleProps>>, any, NotificationStyleProps, never>;
export declare const StyledNotificationContentContainer: import("styled-components").StyledComponent<"div", any, NotificationStyleProps, never>;
export declare const StyledNotificationTitleContainer: import("styled-components").StyledComponent<"div", any, NotificationStyleProps, never>;
export declare const StyledNotificationFooter: import("styled-components").StyledComponent<"div", any, NotificationStyleProps, never>;
export declare const StyledNotificationSpan: import("styled-components").StyledComponent<"span", any, NotificationStyleProps, never>;
export declare const StyledNotificationCloseButton: import("styled-components").StyledComponent<import("react").FC<import("react").PropsWithChildren<import("../Button").ButtonProps>>, any, NotificationStyleProps, never>;
export declare const StyledNotificationContainer: import("styled-components").StyledComponent<"div", any, NotificationStyleProps, never>;
export {};
