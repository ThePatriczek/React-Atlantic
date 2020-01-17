import React, { FC, useState } from 'react';
import { Typography } from '../../Typography';
import { StyledPaginationInput } from '../Pagination.style';
import { StyledQuickJumper } from './QuickJumper.style';

interface QuickJumperProps {
  isDisabled: boolean;
  count: number;
  setPage: (value: number) => void;
}

const { Text } = Typography;

export const QuickJumper: FC<QuickJumperProps> = props => {
  const { isDisabled, count, setPage } = props;
  const [val, setValue] = useState<string>(``);

  const onEnter = () => {
    const num: any = parseInt(val);
    if (num > 0 && num <= count) {
      setPage(num);
    }
    setValue(``);
  };

  return (
    <StyledQuickJumper>
      <Text>Přeskočit na</Text>
      <StyledPaginationInput
        value={val}
        onChange={(value: string) => setValue(value)}
        onEnterPress={onEnter}
        isDisabled={isDisabled}
      />
    </StyledQuickJumper>
  );
};
