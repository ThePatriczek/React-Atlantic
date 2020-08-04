import React, {
  FC,
  PropsWithChildren,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { SpringConfig, SpringStartFn, useSprings } from 'react-spring/web.cjs';
import { HookReturnType, UseDragConfig } from 'react-use-gesture/dist/types';
import { useComposition } from '../../hooks/useComposition';
import { Icon } from '../Icon';
import { Pagination } from '../Pagination';
import {
  StyledCarousel,
  StyledCarouselArrow,
  StyledCarouselEdgeButton,
  StyledCarouselPagination,
  StyledCarouselWrapper,
  StyledSlide
} from './Carousel.style';
import { ItemProps, Slide } from './Slide';

export interface CarouselProps {
  /** custom className */
  className?: string;
  children: Readonly<JSX.Element[]>;
  isArrows?: Readonly<boolean>;
  isClickableEdge?: Readonly<boolean>;
  isPagination?: Readonly<boolean>;
  activeSlide?: Readonly<number>;
  defaultSlide?: Readonly<number>;
  auto?: Readonly<number>;
  overflow?: Readonly<boolean>;
  ref?: Readonly<HTMLElement>;
  autoHeight?: Readonly<boolean>;
  carouselHeight?: Readonly<number>;
  onSlideChange?: (slide: Readonly<number>) => void;
  springConfig?: SpringConfig;
  onDrag?: (
    setSprings: SpringStartFn<{
      offset: Readonly<number>;
      opacity: Readonly<number>;
      display: Readonly<string>;
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
  const {
    autoHeight,
    ref,
    defaultSlide,
    auto,
    onSlideChange,
    overflow,
    isPagination,
    isArrows,
    isClickableEdge,
    className
  } = props;
  const { getFilteredChildren } = useComposition();
  const children = useMemo(() => {
    return getFilteredChildren(props.children, Slide.displayName);
  }, [props.children]);

  const animationContainer = useRef<any>();

  const elements: Array<HTMLDivElement | null> = [];

  const width: Readonly<number> = useMemo(() => {
    return ref?.clientWidth || window.innerWidth;
  }, [ref]);

  const [height, setHeight] = useState<number>(props.carouselHeight || 300);
  const [slide, setSlide] = useState<number>(
    clamp(defaultSlide || 0, 0, children.length)
  );
  const [animatedHeight, setAnimateHeight] = useState<boolean>(false);

  const [springs, setSprings] = useSprings(children?.length, i => ({
    config: props.springConfig || defaultConfig,
    offset: i - slide,
    opacity: 1,
    display: `block`
  }));

  const setSlider = useCallback(
    (directionRight: Readonly<boolean> = true) => {
      setSlide(state =>
        clamp(state + (directionRight ? +1 : -1), 0, children.length - 1)
      );
    },
    [children]
  );

  useEffect(() => {
    setTimeout(() => setAnimateHeight(state => !state), 200);
  }, []);

  const gesture:
    | (() => HookReturnType<UseDragConfig>)
    | undefined = props.onDrag?.(setSprings, setSlider, width, slide, 100);

  useEffect(() => {
    if (slide < 0 || slide >= children?.length) {
      setSlide(clamp(slide, 0, children.length - 1));
    }
  }, [props.children]);

  useEffect(() => {
    if (props.activeSlide || props.activeSlide === 0) {
      setSlide(clamp(props.activeSlide, 0, children?.length));
    }
  }, [props.activeSlide, props.children?.length]);

  useEffect(() => {
    setTimeout(() => {
      onSlideChange?.(slide);
    }, 200);
  }, [slide]);

  useEffect(() => {
    setSprings(i => {
      return {
        offset: i - slide,
        opacity: slide === i ? 1 : 1,
        display: Math.abs(slide - i) > 1 ? `none` : `block`
      };
      // tslint:disable-next-line:no-console
    }).catch(console.error);
  }, [slide]);

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
    <StyledCarouselWrapper {...props}>
      {(isClickableEdge || isArrows) && (
        <>
          <StyledCarouselEdgeButton
            onClick={isArrows ? undefined : () => setSlider(false)}
            position={'left'}
          >
            {isArrows && (
              <StyledCarouselArrow
                size={'large'}
                isDisabled={slide === 0}
                onClick={() => setSlider(false)}
              >
                <Icon name={'arrowLeft'} />
              </StyledCarouselArrow>
            )}
          </StyledCarouselEdgeButton>
          <StyledCarouselEdgeButton
            onClick={isArrows ? undefined : () => setSlider(true)}
            position={'right'}
          >
            {isArrows && (
              <StyledCarouselArrow
                size={'large'}
                isDisabled={slide === children.length - 1}
                onClick={() => setSlider(true)}
              >
                <Icon name={'arrowRight'} />
              </StyledCarouselArrow>
            )}
          </StyledCarouselEdgeButton>
        </>
      )}

      <StyledCarousel
        className={className}
        height={height}
        auto={props.auto}
        autoHeight={autoHeight}
        activeSlide={props.activeSlide}
        ref={animationContainer}
        animate={animatedHeight}
        overflow={overflow}
      >
        {springs.map(({ offset, opacity, display }, i) => (
          <StyledSlide
            ref={ref => (elements[i] = ref)}
            key={i}
            {...gesture?.()}
            style={{
              display,
              opacity,
              transform: offset.to(
                (offsetX: Readonly<number>) =>
                  `translate3d(${offsetX * 100}%, 0, 0)`
              )
            }}
          >
            {display.get() === 'block' && children?.[i]}
          </StyledSlide>
        ))}
      </StyledCarousel>
      {isPagination && (
        <StyledCarouselPagination>
          <Pagination
            isBadge
            pageSize={1}
            hideArrowJumper
            total={children.length}
            current={slide + 1}
          />
        </StyledCarouselPagination>
      )}
    </StyledCarouselWrapper>
  );
};

Carousel.Slide = Slide;
Carousel.displayName = `Carousel`;
Carousel.defaultProps = {
  isClickableEdge: false,
  defaultSlide: 0,
  autoHeight: true,
  overflow: true
};
