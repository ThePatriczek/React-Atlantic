import { MutableRefObject, useEffect } from 'react';

export interface UseClickOutsideProps {
  ref?: Readonly<MutableRefObject<any>>;
  onMouseDown?: () => void;
  others?;
}

export const useClickOutside = (props: Readonly<UseClickOutsideProps>) => {
  useEffect(() => {
    if (props.ref?.current) {
      window.addEventListener('mousedown', onMouseDown);
    }

    return () => {
      window.removeEventListener('mousedown', onMouseDown);
    };
  }, [props.ref]);

  const onMouseDown: EventListener = (e: Event) => {
    if (!props.ref?.current?.contains(e.target as Node)) {
      if (props.onMouseDown) {
        props.onMouseDown();
      }
    }
  };
};
