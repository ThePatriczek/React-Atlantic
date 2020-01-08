import React, { FC } from 'react';
import { Shape, Size } from '../../types';
import { StyledSkeleton } from './Skeleton.style';

export interface SkeletonProps {
  /** small | medium | large */
  size?: Size;
  /** circle |  rectangle */
  shape?: Shape;
  /** custom className */
  className?: string;
  /** width */
  width?: number | string;
  /** height */
  height?: number;
}

export const Skeleton: FC<SkeletonProps> = props => {
  const { className, size, shape, height, width } = props;

  return (
    <StyledSkeleton
      className={className}
      shape={shape}
      size={size}
      width={width}
      height={height}
    />
  );
};

Skeleton.defaultProps = {
  shape: 'rectangle'
};

Skeleton.displayName = `Skeleton`;
