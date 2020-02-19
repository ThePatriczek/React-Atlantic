import { MouseEvent, useCallback } from 'react';

export interface UseClickValue {
  onClick: () => void;
}

export interface UseClickProps {
  others?;
}

export const useClick = (
  props: Readonly<UseClickProps>
): Readonly<UseClickValue> => {
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
