import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { a } from 'react-spring/web.cjs';
import styled, { css } from 'styled-components';
import { Position } from '../../types';
import { PureButton } from '../Button/Pure';
import { StyledIcon } from '../Icon/Icon.style';

interface StyledCarouselProps {
  height?: Readonly<number>;
  activeSlide?: Readonly<number>;
  auto?: Readonly<number>;
  autoHeight?: Readonly<boolean>;
  animate?: Readonly<boolean>;
  overflow?: Readonly<boolean>;
}

export const StyledCarousel = styled.div<Readonly<StyledCarouselProps>>`
	width: 100%;
	height: 100%;
	position: relative;
	max-width: 100%;
	will-change: transform;
	
	${props =>
    props.overflow &&
    css`
      overflow: hidden;
    `}
	
	

	${props =>
    !props.animate &&
    css`
      transition: none;
    `}
	
	${props =>
    props.animate &&
    css`
      transition: height 0.2s ease-out;
    `}

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

export const StyledCarouselPagination = styled.div`
  text-align: center;
  padding-top: ${props => props.theme.padding.xl};
`;

export const StyledCarouselArrows = styled.div`
  left: 0;
  align-items: center;
  position: absolute;
  top: 50%;
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: space-between;
`;

export const StyledCarouselArrow = styled(PureButton)`
  && {
    ${StyledIcon} {
      box-shadow: ${props => props.theme.boxShadow};
      color: ${props => props.theme.color.text.gamma};
    }
    padding: 0;
  }
`;

export const StyledCarouselEdgeButton = styled.div<{ position: Position }>`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  position: absolute;
  width: 50px;
  height: 100%;
  top: 0;
  z-index: 9;

  ${props =>
    props.position === 'left' &&
    css`
      left: 0;
    `}

  ${props =>
    props.position === 'right' &&
    css`
      right: 0;
    `}
`;

export const StyledCarouselWrapper = styled.div<any>``;
