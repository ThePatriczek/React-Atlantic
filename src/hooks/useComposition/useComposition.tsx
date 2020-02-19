import { ReactNode } from 'react';
import index from '@storybook/addon-actions/dist/containers/ActionLogger';

interface UseCompositionValue {
  getFilteredChildren: (
    children: Readonly<ReactNode>,
    displayName?: Readonly<string>
  ) => Array<Readonly<JSX.Element>>;
}

export const useComposition = (): Readonly<UseCompositionValue> => {
  const getFilteredChildren = (
    children: Readonly<ReactNode>,
    displayName?: Readonly<string>
  ): Array<Readonly<JSX.Element>> => {
    const items: Array<Readonly<JSX.Element>> = [];

    if (!displayName) {
      throw new Error(`You have to fill displayName of the Component!`);
    }

    if (Array.isArray(children)) {
      children.forEach((item: JSX.Element) => {
        if (item?.type?.displayName === displayName) {
          items.push(item);
        }
      });
    } else {
      const item = children as JSX.Element;

      if (item?.type?.displayName === displayName) {
        items.push(item);
      }
    }

    return items;
  };

  return { getFilteredChildren };
};
