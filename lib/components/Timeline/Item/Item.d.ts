import { FC } from 'react';
import { IconName } from '../../Icon';
interface TimelineButton {
    icon: IconName;
    onClick?: () => void;
}
export interface ItemProps {
    onClick?: () => void;
    onCaptionClick?: () => void;
    className?: Readonly<string>;
    caption?: Readonly<string>;
    children: Readonly<string>;
    buttons?: ReadonlyArray<Readonly<TimelineButton>>;
}
interface ItemPropsPrivate extends ItemProps {
    index?: Readonly<number>;
}
export declare const Item: FC<ItemPropsPrivate>;
export {};
