import { MouseEvent, useCallback } from 'react';

export interface UseClickValue<El extends HTMLElement> {
  onClick: (e: MouseEvent<El>) => void;
}

export interface UseClickProps<El extends HTMLElement> {
  deps?: ReadonlyArray<unknown>;
  onClick?: (e: MouseEvent<El>) => void;
}

export const useClick = <El extends HTMLElement>(
  props: Readonly<UseClickProps<El>>
): Readonly<UseClickValue<El>> => {

  const onClick = useCallback(
    (e: MouseEvent<El>) => {
      if (props.onClick) {
        e?.preventDefault();

        props.onClick(e);
      }
    },
    [props.deps]
  );

  return {
    onClick
  };
};
