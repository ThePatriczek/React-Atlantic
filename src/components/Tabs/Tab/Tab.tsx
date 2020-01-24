import React, { ChangeEvent, FC, ReactElement } from 'react';
import { useRadioGroup } from '../../Radio/Context';
import { StyledRadioInputHidden } from '../../Radio/Radio.style';
import { OptionType } from '../../Select/Select.utils';
import { StyledTab } from './Tab.style';

export interface TabProps extends OptionType {
  isDisabled?: boolean;
  className?: string;
}

interface TabComponentProps extends TabProps {
  isActive?: boolean;
  isAlternative: boolean;
}

export const Tab: FC<TabComponentProps> = (props): ReactElement => {
  const {
    value,
    label,
    isDisabled,
    className,
    isActive,
    isAlternative
  } = props;
  const { value: ctxVal, setValue: setCtxVal } = useRadioGroup();

  let isChecked: boolean = !!isActive;

  if (ctxVal !== undefined) {
    isChecked = ctxVal === value;
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopPropagation();

    if (!isDisabled) {
      setCtxVal(value);
    }
  };

  return (
    <StyledTab
      isDisabled={!!isDisabled}
      isActive={isChecked}
      isAlternative={isAlternative}
    >
      {label}
      <StyledRadioInputHidden
        checked={isChecked}
        onChange={onChange}
        disabled={isDisabled}
      />
    </StyledTab>
  );
};

Tab.defaultProps = {
  isDisabled: false
};

Tab.displayName = `Tab`;
