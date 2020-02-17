import { MouseEvent, useCallback } from 'react';

export interface UseOnChangeValue {
  onClick: () => void;
}

interface UseEventHandlersProps {
  others?;
}

export const useClick = (
  props: Readonly<UseEventHandlersProps>
): Readonly<UseOnChangeValue> => {
  const onClick = useCallback(
    (e?: MouseEvent<HTMLAnchorElement>) => {
      if (props.others.onClick) {
        if (e) {
          e.preventDefault();
        }
        props.others.onClick();
      }
    },
    [props.others.onClick]
  );

  return {
    onClick
  };
};
