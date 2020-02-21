import React, { FC, ReactElement, useState } from 'react';
import { SpringsUpdateFn } from 'react-spring/web.cjs';
import { useDrag } from 'react-use-gesture';
import { HookReturnType, UseDragConfig } from 'react-use-gesture/dist/types';
import { Carousel, CarouselProps } from '../Carousel';

export const MobileCarousel: FC<Readonly<CarouselProps>> = (
  props
): Readonly<ReactElement> => {
  const dragGesture = (
    setSprings: SpringsUpdateFn<{
      offset: Readonly<number>;
      display: Readonly<string>;
      touchAction: Readonly<string>;
    }>,
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
        last
      }) => {
        // if (down) {
        //   ref.setAttribute('style', 'overflow:hidden');
        // } else {
        //   ref.setAttribute('style', 'overflow:visible');
        // }

        if (down && distance > distanceMove) {
          setSlide(!(xDir > 0));
          cancel?.();
        }

        setSprings((i: number) => ({
          offset: (down ? xDelta : 0) / width + (i - index),
          display:
            index === i + 1 || index === i - 1 || i === index
              ? `block`
              : `none`,
          touchAction: last ? `auto` : `none`
        }));
      },
      {
        axis: `x`
      }
    );
  };

  return <Carousel {...props} onDrag={dragGesture} />;
};

MobileCarousel.displayName = `MobileCarousel`;
