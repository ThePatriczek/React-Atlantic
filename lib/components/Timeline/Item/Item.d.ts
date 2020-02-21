import { FC } from 'react';
import { IconName } from '../../Icon';
export interface TimelineButton {
    icon: Readonly<IconName>;
    onClick?: () => void;
}
export interface TimelineCaption {
    value: Readonly<string>;
    onClick?: () => void;
}
export interface ItemProps {
    onClick?: () => void;
    className?: Readonly<string>;
    captions?: ReadonlyArray<Readonly<TimelineCaption>>;
    children: Readonly<string>;
    buttons?: ReadonlyArray<Readonly<TimelineButton>>;
}
interface ItemPropsPrivate extends ItemProps {
    index?: Readonly<number>;
}
export declare const Item: FC<ItemPropsPrivate>;
export {};
