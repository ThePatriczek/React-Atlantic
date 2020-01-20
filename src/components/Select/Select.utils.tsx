import * as React from 'react';
import { Option, OptionProps } from './Option';
import { Select } from './Select';

export interface OptionType {
  value: any;
  label: React.ReactNode;
  isChecked?: boolean;
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
  }
  if (options) {
    items = [...items, ...options];
  }

  return items;
};
