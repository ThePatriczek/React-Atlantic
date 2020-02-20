import { a } from 'react-spring/web.cjs';
import styled, { css } from 'styled-components';

interface StyledCarouselProps {
  height?: Readonly<number>;
  activeSlide?: Readonly<number>;
  auto?: Readonly<number>;
  autoHeight?: Readonly<boolean>;
}

export const StyledCarousel = styled.div<Readonly<StyledCarouselProps>>`
  width: 100%;
  height: 100%;
  position: relative;
  max-width: 100%;
  transition: height 0.2s ease-out;
  overflow: hidden;
  will-change: transform;

  ${props =>
    props.height &&
    css`
      height: ${`${props.height}px`};
    `};
`;

export const StyledSlide = styled(a.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  will-change: transform;
`;
