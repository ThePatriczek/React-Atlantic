import React, { FC } from 'react';
import { Option, Select } from '../../Select';
import { Typography } from '../../Typography';
import { StyledSizeChanger } from './SizeChanger.style';

interface SelectProps {
  isDisabled: boolean;
  pageSizeOptions?: number[];
  pageSize: number;
  setPageSize: (value: number) => void;
  text: string;
  onSizeChange: (value: number) => void;
}

const { Text } = Typography;

export const SizeChanger: FC<SelectProps> = props => {
  const {
    pageSizeOptions,
    pageSize,
    isDisabled,
    setPageSize,
    text,
    onSizeChange
  } = props;

  const onChange = (value?: any) => {
    setPageSize(value.value);
    onSizeChange(value.value);
  };

  if (!pageSizeOptions) {
    return null;
  }

  return (
    <StyledSizeChanger>
      <Select isDisabled={isDisabled} value={pageSize} onChange={onChange}>
        {pageSizeOptions.map((item: number, key: number) => (
          <Option value={item} key={key}>
            <Text>{`${item} / ${text}`}</Text>
          </Option>
        ))}
      </Select>
    </StyledSizeChanger>
  );
};
