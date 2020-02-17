import { ChangeEvent, MouseEvent, useCallback, useState } from 'react';

export interface UseClickChangeValue {
  onChangeClick: (
    e: MouseEvent<HTMLLabelElement> | ChangeEvent<HTMLInputElement>,
    isPartiallyChecked?: Readonly<boolean>
  ) => void;
  isChecked: Readonly<boolean>;
}

interface UseClickChangeProps {
  isDisabled?: Readonly<boolean>;
  isDefaultChecked?: Readonly<boolean>;
  others?;
}

export const useClickChange = (
  props: Readonly<UseClickChangeProps>
): Readonly<UseClickChangeValue> => {
  const [isChecked, setChecked] = useState<Readonly<boolean>>(
    props?.others?.isDefaultChecked && props?.others?.isDefaultChecked
  );

  const onChangeClick = useCallback(
    (e, isPartiallyChecked?: Readonly<boolean>) => {
      if (e.type === 'click') {
        e.preventDefault();
      }

      if (!props.isDisabled) {
        if (props.others.isChecked === undefined) {
          if (!isPartiallyChecked) {
            setChecked(e.type === 'click' ? !isChecked : e?.target.checked);
          }
          if (props.others.onChange) {
            props.others.onChange(!isChecked);
          }
        } else {
          if (props.others.onChange) {
            props.others.onChange(!props.others.isChecked);
          }
        }
      }
    },
    [isChecked, props.others.isChecked]
  );

  return {
    onChangeClick,
    isChecked
  };
};
