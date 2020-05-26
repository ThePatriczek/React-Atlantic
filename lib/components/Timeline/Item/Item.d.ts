import { FC } from 'react';
import { IconName } from '../../Icon';
interface HintType {
    description: Readonly<string>;
    hintComponent?: (hint: Readonly<string>, id: Readonly<string>) => JSX.Element;
}
export interface TimelineButton {
    icon: Readonly<IconName>;
    onClick?: () => void;
    hint?: HintType;
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
    elements?: ReadonlyArray<JSX.Element>;
}
interface ItemPropsPrivate extends ItemProps {
    index?: Readonly<number>;
}
export declare const Item: FC<ItemPropsPrivate>;
export {};
