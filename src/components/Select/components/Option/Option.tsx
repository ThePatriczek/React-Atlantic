import * as React from "react";
import { StyledOption } from "./Option.style";

export const Option: React.FC<any> = ({
  innerRef,
  innerProps,
  label,
  size,
  ...others
}) => {
  const { className, isMultiLine } = others.data;
  return (
    <StyledOption
      key={label}
      ref={innerRef}
      {...innerProps}
      size={size}
      isMultiLine={isMultiLine}
      className={className}
    >
      {label}
    </StyledOption>
  );
};
