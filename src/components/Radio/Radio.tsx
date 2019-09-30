import * as React from 'react';
import {
  StyledRadioInputHidden,
  StyledRadioInputShown,
  StyledRadioLabel,
  StyledRadioMark,
  StyledRadioSpan
} from './Radio.style';
import { RadioProps } from './RadioPropsInterface';

export const Radio: React.FC<React.PropsWithChildren<RadioProps>> = (
  props: React.PropsWithChildren<RadioProps>
): React.ReactElement => {
  const { isDefaultChecked, position, isDisabled, className, children } = props;
  const [isChecked, setChecked] = React.useState<boolean>(!!isDefaultChecked);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isDisabled) {
      if (props.isChecked === undefined) {
        setChecked(e.target.checked);
        if (props.onChange) {
          props.onChange(!isChecked);
        }
      } else {
        if (props.onChange) {
          props.onChange(!props.isChecked);
        }
      }
    }
  };

  return (
    <StyledRadioLabel
      isChecked={props.isChecked || isChecked}
      isDisabled={isDisabled}
      className={className}
    >
      {position === 'right' && (
        <StyledRadioSpan isDisabled={isDisabled}>{children}</StyledRadioSpan>
      )}

      <StyledRadioInputShown isDisabled={isDisabled}>
        <StyledRadioMark
          isDisabled={isDisabled}
          isChecked={props.isChecked || isChecked}
        >
          <StyledRadioInputHidden
            onChange={onChange}
            checked={props.isChecked || isChecked}
            disabled={isDisabled}
          />
        </StyledRadioMark>
      </StyledRadioInputShown>

      {position === 'left' && (
        <StyledRadioSpan isDisabled={isDisabled}>{children}</StyledRadioSpan>
      )}
    </StyledRadioLabel>
  );
};

Radio.defaultProps = {
  position: 'left'
};
