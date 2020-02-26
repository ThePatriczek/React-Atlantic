import { FC, PropsWithChildren } from 'react';
import { SpringConfig, SpringsUpdateFn } from 'react-spring/web.cjs';
import { HookReturnType, UseDragConfig } from 'react-use-gesture/dist/types';
import { ItemProps } from './Slide';
export interface CarouselProps {
    children: Readonly<JSX.Element[]>;
    activeSlide?: Readonly<number>;
    defaultSlide?: Readonly<number>;
    auto?: Readonly<number>;
    ref?: Readonly<HTMLElement>;
    autoHeight?: Readonly<boolean>;
    carouselHeight?: Readonly<number>;
    onSlideChange?: (slide: Readonly<number>) => void;
    springConfig?: SpringConfig;
    onDrag?: (setSprings: SpringsUpdateFn<{
        offset: Readonly<number>;
        opacity: Readonly<number>;
        display: Readonly<string>;
        touchAction: Readonly<string>;
    }>, setSlide: (value?: Readonly<boolean>) => void, width: Readonly<number>, index: Readonly<number>, distance?: Readonly<number>, ref?: Readonly<HTMLElement>) => () => HookReturnType<UseDragConfig>;
}
export declare const clamp: (num: number, min: number, max: number) => number;
export declare const Carousel: FC<Readonly<CarouselProps>> & {
    Slide: FC<Readonly<PropsWithChildren<ItemProps>>>;
};
