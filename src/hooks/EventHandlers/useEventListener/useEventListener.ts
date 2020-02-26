import { MutableRefObject, useEffect } from 'react';

export interface UseEventListenerValue {
  onKeyDown: EventListener;
  onMouseDown: EventListener;
  onEscape: EventListener;
  onEnter: EventListener;
}

export interface UseEventListenerProps {
  ref?: Readonly<MutableRefObject<Readonly<null> | Readonly<Element>>>;
  onMouseDown?: () => void;
  onKeyDown?: () => void;
  onEscape?: () => void;
  onEnter?: () => void;
  isOpen?: Readonly<boolean>;
  deps?: ReadonlyArray<unknown>;
}

export const useEventListener = (
  props: Readonly<UseEventListenerProps>
): Readonly<UseEventListenerValue> => {
  useEffect(() => {
    if (props.ref?.current) {
      if (props.onMouseDown) {
        window?.addEventListener('mousedown', onMouseDown);
      }
      if (props.onKeyDown) {
        window?.addEventListener('keydown', onKeyDown);
      }
      if (props.onEnter) {
        window?.addEventListener('keydown', onEnter);
      }
      if (props.onEscape) {
        window?.addEventListener('keydown', onEscape);
      }
    }

    return () => {
      if (props.onMouseDown) {
        window?.removeEventListener('mousedown', onMouseDown);
      }
      if (props.onKeyDown) {
        window?.removeEventListener('keydown', onKeyDown);
      }
      if (props.onEnter) {
        window?.removeEventListener('keydown', onEnter);
      }
      if (props.onEscape) {
        window?.removeEventListener('keydown', onEscape);
      }
    };
  }, [props.deps]);

  const onMouseDown: EventListener = (e: Event) => {
    if (!props.ref?.current?.contains(e.target as Node)) {
      if (props.onMouseDown) {
        props.onMouseDown();
      }
    }
  };

  const onKeyDown: EventListener = (e: KeyboardEvent) => {
    if (props.onKeyDown) {
      props.onKeyDown();
    }
  };

  const onEnter: EventListener = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (props.onEnter) {
        props.onEnter();
      }
    }
  };

  const onEscape: EventListener = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      if (props.onEscape) {
        props.onEscape();
      }
    }
  };

  return { onKeyDown, onMouseDown, onEscape, onEnter };
};
