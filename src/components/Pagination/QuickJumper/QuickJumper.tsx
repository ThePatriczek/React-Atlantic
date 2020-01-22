import React, { FC, useState } from 'react';
import { Typography } from '../../Typography';
import { StyledPaginationInput } from '../Pagination.style';
import { StyledQuickJumper } from './QuickJumper.style';
import { Size } from '../../../types';

interface QuickJumperProps {
  isDisabled: boolean;
  count: number;
  setPage: (value: number) => void;
  text?: string;
  onChange: (value: number) => void;
  size: Size;
}

const { Text } = Typography;

export const QuickJumper: FC<QuickJumperProps> = props => {
  const { isDisabled, count, text, onChange, size } = props;
  const [val, setValue] = useState<string>(``);

  const onEnter = () => {
    const num: number = parseInt(val, 0);

    if (num > 0 && num <= count) {
      onChange(num);
    }
    setValue(``);
  };

  return (
    <StyledQuickJumper>
      {text && <Text>{text}</Text>}
      <StyledPaginationInput
        size={size}
        value={val}
        onChange={(value: string) => setValue(value)}
        onEnterPress={onEnter}
        isDisabled={isDisabled}
      />
    </StyledQuickJumper>
  );
};
