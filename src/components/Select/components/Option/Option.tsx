import * as React from 'react';
import { StyledOption } from './Option.style';

export const Option: React.FC<any> = props => {
  const { innerRef, innerProps, label, size, ...others } = props;
  const { className } = others.data;
  return (
    <StyledOption
      key={label}
      ref={innerRef}
      {...innerProps}
      size={size}
      className={className}
    >
      {label}
    </StyledOption>
  );
};
