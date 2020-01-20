import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { Typography } from '../Typography';
import { NotFoundImage } from './Image';
import {
  NotFoundAnnotation,
  NotFoundContainer,
  NotFoundImageContainer
} from './NotFound.style';

const { Title } = Typography;

export interface NotFoundProps {
  /** title */
  title?: string;
  /** custom className */
  className?: string;
}

export const NotFound: FC<PropsWithChildren<NotFoundProps>> = (
  props
): ReactElement => {
  const { title, children } = props;

  return (
    <NotFoundContainer {...props}>
      <NotFoundImageContainer>
        <figure>
          <NotFoundImage />
        </figure>
      </NotFoundImageContainer>

      {title && <Title level={5}>{title}</Title>}

      {children && <NotFoundAnnotation>{children}</NotFoundAnnotation>}
    </NotFoundContainer>
  );
};

NotFound.displayName = `NotFound`;
