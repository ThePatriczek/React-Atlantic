import React, {
  FC,
  PropsWithChildren,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';
import {
  SpringConfig,
  SpringsUpdateFn,
  useSprings
} from 'react-spring/web.cjs';
import { HookReturnType, UseDragConfig } from 'react-use-gesture/dist/types';
import { useComposition } from '../../hooks/useComposition';
import { StyledCarousel, StyledSlide } from './Carousel.style';
import { ItemProps, Slide } from './Slide';

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
  onDrag?: (
    setSprings: SpringsUpdateFn<{
      offset: Readonly<number>;
      opacity: Readonly<number>;
      display: Readonly<string>;
      touchAction: Readonly<string>;
    }>,
    setSlide: (value?: Readonly<boolean>) => void,
    width: Readonly<number>,
    index: Readonly<number>,
    distance?: Readonly<number>,
    ref?: Readonly<HTMLElement>
  ) => () => HookReturnType<UseDragConfig>;
}

export const clamp = (
  num: Readonly<number>,
  min: Readonly<number>,
  max: Readonly<number>
): Readonly<number> => {
  return num < min ? min : num > max ? max : num;
};

const defaultConfig = { duration: 50 };

export const Carousel: FC<Readonly<CarouselProps>> & {
  Slide: FC<Readonly<PropsWithChildren<ItemProps>>>;
} = (props): Readonly<ReactElement> => {
  const { getFilteredChildren } = useComposition();
  const { autoHeight, ref, defaultSlide, auto, onSlideChange } = props;
  const children = useMemo(
    () => getFilteredChildren(props.children, Slide.displayName),
    [props.children]
  );

  const elements: HTMLDivElement[] = [];
  const width: Readonly<number> = useMemo(() => {
    return ref?.clientWidth || window.innerWidth;
  }, [ref]);

  const [height, setHeight] = useState<number>(props.carouselHeight || 300);
  const [slide, setSlide] = useState<number>(
    clamp(defaultSlide || 1, 0, children.length)
  );
  const [springs, setSprings] = useSprings(children?.length, i => ({
    offset: i,
    opacity: 0,
    display: `block`,
    touchAction: `auto`,
    config: props.springConfig || defaultConfig,
    immediate: false
  }));

  const setSlider = useCallback((directionRight: Readonly<boolean> = true) => {
    setSlide(state =>
      clamp(state + (directionRight ? +1 : -1), 0, children.length - 1)
    );
  }, []);

  const gesture:
    | (() => HookReturnType<UseDragConfig>)
    | undefined = props.onDrag?.(
    setSprings,
    setSlider,
    width,
    slide,
    width / 4
  );

  useEffect(() => {
    if (props.activeSlide || props.activeSlide === 0) {
      setSlide(clamp(props.activeSlide, 0, children?.length));
    }
  }, [props.activeSlide, children?.length]);

  useEffect(() => {
    onSlideChange?.(slide);
  }, [slide, onSlideChange]);

  useEffect(() => {
    setSprings(i => {
      return {
        offset: i - slide,
        opacity: slide === i ? 1 : 0,
        touchAction: `auto`
      };
    });
  }, [slide, setSprings]);

  useEffect(() => {
    if (autoHeight) {
      // @ts-ignore
      if (elements?.[slide]?.children?.[0]?.offsetHeight) {
        // @ts-ignore
        setHeight(elements[slide].children[0].offsetHeight);
      } else {
        setHeight(200);
      }
    }
  }, [elements, slide]);

  useEffect(() => {
    let interval;

    if ((auto || 0) > 0) {
      interval = setInterval(() => {
        setSlide((slide + 1) % children.length);
      }, (auto || 0) * 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [auto, children.length, slide]);

  return (
    <StyledCarousel
      height={height}
      auto={props.auto}
      autoHeight={autoHeight}
      activeSlide={props.activeSlide}
    >
      {springs.map(({ offset, opacity, display, touchAction }, i) => (
        <StyledSlide
          ref={ref => (elements[i] = ref)}
          key={i}
          {...gesture?.()}
          style={{
            touchAction,
            display,
            opacity,
            transform: offset.interpolate(
              (offsetX: Readonly<number>) =>
                `translate3d(${offsetX * 100}%, 0, 0)`
            )
          }}
        >
          {display.value === `block` && children?.[i]}
        </StyledSlide>
      ))}
    </StyledCarousel>
  );
};

Carousel.Slide = Slide;
Carousel.displayName = `Carousel`;
Carousel.defaultProps = {
  defaultSlide: 0,
  autoHeight: true
};
