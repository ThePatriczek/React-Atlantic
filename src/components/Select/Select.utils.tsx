import * as React from 'react';
import { Position } from '../../types';
import { Option, OptionProps } from './Option';
import { Select } from './Select';

export interface OptionType {
  value: any;
  label: React.ReactNode;
}

const getChild = (
  child: React.ComponentElement<OptionProps, never>,
  key: number,
  error: string
) => {
  if (!child.type || child.type.displayName !== Option.displayName) {
    throw Error(error);
  }

  const { props } = child;
  const { value, children, className } = props;

  return { value, label: children, className };
};

export const checkChildrenAndOptions = (
  children?: any,
  options?: OptionType[]
): OptionType[] => {
  let items: OptionType[] = [];
  if (children) {
    if (Array.isArray(children)) {
      items = children as OptionType[];
    } else {
      items.push(children as OptionType);
    }

    items = items.map((item: unknown, key: number) => {
      if (item) {
        if (Array.isArray(item)) {
          return item.map((child, childKey) =>
            getChild(
              child,
              childKey,
              `${Select.displayName} accepts only ${Option.displayName} components!`
            )
          );
        }

        return getChild(
          item as React.ComponentElement<OptionProps, never>,
          key,
          `${Select.displayName} accepts only ${Option.displayName} components!`
        );
      }

      return null;
    }) as OptionType[];
  } else if (options) {
    items = options;
  }

  return items;
};

export const isElementInViewport = (el: Element): boolean => {
  const bounding = el.getBoundingClientRect();

  return (
    bounding.top > 0 &&
    bounding.left > 0 &&
    bounding.bottom <
      (window?.innerHeight || document.documentElement.clientHeight) &&
    bounding.right < (window?.innerWidth || document.documentElement.clientWidth)
  );
};

export const getPositionOfElementInViewport = (
  el: Element
): Position | null => {
  const bounding = el.getBoundingClientRect();

  if (bounding.top < 0) {
    return 'top';
  }

  if (bounding.left < 0) {
    return 'left';
  }

  if (
    bounding.bottom >
    (window?.innerHeight || document.documentElement.clientHeight)
  ) {
    return 'bottom';
  }

  if (
    bounding.right > (window?.innerWidth || document.documentElement.clientWidth)
  ) {
    return 'right';
  }

  return null;
};
