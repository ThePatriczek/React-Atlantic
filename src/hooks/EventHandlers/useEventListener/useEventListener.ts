import { MutableRefObject, useEffect } from 'react';

export interface UseEventListenerProps {
  ref?: Readonly<MutableRefObject<Readonly<null> | Readonly<Element>>>;
  onMouseDown?: () => void;
  onKeyDown?: () => void;
  onEscape?: () => void;
  onEnter?: () => void;
  onResize?: () => void;
  onScroll?: () => void;
  isOpen?: Readonly<boolean>;
}

export const useEventListener = (
  props: Readonly<UseEventListenerProps>,
  deps?: ReadonlyArray<unknown>
): void => {
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
      if (props.onResize) {
        window?.addEventListener('resize', onResize);
      }
      if (props.onScroll) {
        window?.addEventListener('scroll', onScroll);
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
      if (props.onResize) {
        window?.removeEventListener('resize', onResize);
      }
      if (props.onScroll) {
        window?.removeEventListener('scroll', onScroll);
      }
    };
  }, [deps]);

  const onMouseDown: EventListener = (e: Event) => {
    if (!props.ref?.current?.contains(e.target as Node)) {
      props.onMouseDown?.();
    }
  };

  const onKeyDown: EventListener = (e: KeyboardEvent) => {
    props.onKeyDown?.();
  };

  const onEnter: EventListener = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      props.onEnter?.();
    }
  };

  const onEscape: EventListener = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      props.onEscape?.();
    }
  };

  const onResize: EventListener = () => {
    props.onResize?.();
  };

  const onScroll: EventListener = () => {
    props.onScroll?.();
  };
};
