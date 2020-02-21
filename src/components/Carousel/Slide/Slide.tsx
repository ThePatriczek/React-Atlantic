import React, { FC, PropsWithChildren, ReactElement } from 'react';

export interface ItemProps {}

export const Slide: FC<Readonly<PropsWithChildren<ItemProps>>> = (props): Readonly<ReactElement> => {
	const { children } = props;
	return <div>{children}</div>;
};

Slide.displayName = `CarouselSlide`;
