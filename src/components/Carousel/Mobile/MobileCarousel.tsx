import React, { FC, ReactElement } from 'react';
import { useDrag } from 'react-use-gesture';
import { HookReturnType, UseDragConfig } from 'react-use-gesture/dist/types';
import { Carousel, CarouselProps } from '../Carousel';

export const MobileCarousel: FC<Readonly<CarouselProps>> = (
  props
): Readonly<ReactElement> => {
  const dragGesture = (
    setSprings: any,
    setSlide: (value?: Readonly<boolean>) => void,
    width: Readonly<number>,
    index: Readonly<number>,
    distanceMove: Readonly<number> = width,
    ref: Readonly<HTMLElement> = document.body
  ): (() => HookReturnType<UseDragConfig>) => {
    return useDrag(
      ({
        down,
        movement: [xDelta],
        direction: [xDir],
        distance,
        cancel,
        velocity
      }) => {
        if (down) {
          ref.setAttribute('style', 'overflow:hidden');
        } else {
          ref.setAttribute('style', 'overflow:visible');
        }

        if (down && velocity > 4) {
          setSlide(!(xDir > 0));
          cancel?.();
        }

        if (down && distance > distanceMove) {
          setSlide(!(xDir > 0));
          cancel?.();
        }

        setSprings((i: number) => {
          if (Math.abs(index - i) > 1) {
            return { display: `none` };
          }
          return {
            offset: (down ? xDelta : 0) / width + (i - index),
            display: `block`
          };
          // tslint:disable-next-line:no-console
        }).catch(console.error);
      },
      {
        axis: `x`
      }
    );
  };

  return <Carousel {...props} isPagination={true} onDrag={dragGesture}/>;
};

MobileCarousel.displayName = `MobileCarousel`;
