import { MutableRefObject, useEffect } from 'react';

export interface UseEventListenerValue {
  onKeyDown: EventListener;
  onMouseDown: EventListener;
}

export interface UseEventListenerProps {
  ref?: Readonly<MutableRefObject<any>>;
  onMouseDown?: () => void;
  onKeyDown?: () => void;
  isOpen?: boolean;
  others?;
}

export const useEventListener = (
  props: Readonly<UseEventListenerProps>
): Readonly<UseEventListenerValue> => {
  useEffect(() => {
    if (props.ref?.current) {
      if (props.onMouseDown) {
        window.addEventListener('mousedown', onMouseDown);
      }
      if (props.onKeyDown) {
        window.addEventListener('keydown', onKeyDown);
      }
    }

    return () => {
      if (props.onMouseDown) {
        window.removeEventListener('mousedown', onMouseDown);
      }
      if (props.onKeyDown) {
        window.removeEventListener('keydown', onKeyDown);
      }
    };
  }, [props.isOpen]);

  const onMouseDown: EventListener = (e: Event) => {
    if (!props.ref?.current?.contains(e.target as Node)) {
      if (props.onMouseDown) {
        props.onMouseDown();
      }
    }
  };

  const onKeyDown: EventListener = (e: KeyboardEvent) => {
    if (e.key === 'Escape' || e.key === 'Enter') {
      if (props.onKeyDown) {
        props.onKeyDown();
      }
    }
  };

  return { onKeyDown, onMouseDown };
};
