import * as React from 'react';
import { default as ReactSelect } from 'react-select';
import { Size } from '../../types';
import { Icon } from '../Icon';
import { Option as OptionComponent } from './components';
import { Option, OptionProps } from './Option';

import { useEffect, useRef, useState } from 'react';
import {
  ClearIndicator,
  Control,
  CrossIcon,
  DropdownIndicator,
  IndicatorsContainer,
  Input,
  Menu,
  MenuList,
  MultiValue,
  MultiValueLabel,
  MultiValueRemove,
  NoOptionsMessage,
  Placeholder,
  SelectContainer,
  SelectContainerWrapper,
  SingleValue,
  ValueContainer
} from './Select.style';
import { checkChildrenAndOptions, OptionType } from './Select.utils';

export interface SelectProps {
  onChange?: (value?: any) => void;
  value?: any;
  defaultValue?: any;
  options?: OptionType[];
  isMulti?: boolean;
  isFullWidth?: boolean;
  isAlternative?: boolean;
  placeholder?: string;
  isDisabled?: boolean;
  size?: Size;
  className?: string;
  autoFocus?: boolean;
}

export const Select: React.FC<React.PropsWithChildren<SelectProps>> & {
  Option: React.FC<OptionProps>;
} = (props: React.PropsWithChildren<SelectProps>) => {
  const {
    children,
    isDisabled,
    placeholder,
    className,
    options,
    isMulti,
    isFullWidth,
    isAlternative,
    size,
    defaultValue,
    autoFocus
  } = props;
  const [value, setValue] = React.useState<any>(defaultValue);
  const [isFocused, setFocused] = useState<boolean>(false);

  let items: OptionType[] = [];
  items = checkChildrenAndOptions(children, options);

  const onChange = (value?: OptionType | OptionType[]) => {
    if (!isDisabled) {
      if (props.value === undefined) {
        setValue(value);
      }

      if (props.onChange) {
        props.onChange(value);
      }
    }
  };

  const val: any[] = [];

  const fillValue = (value: any) => {
    if (typeof value === 'string' || typeof value === 'number') {
      items.forEach(item => item.value === value && val.push(item));
    } else {
      items.forEach(item => item.value === value.value && val.push(value));
    }
  };

  const fillValues = (value: unknown) => {
    if (Array.isArray(value)) {
      value.forEach((item: unknown) => {
        fillValue(item);
      });
    } else {
      fillValue(value);
    }
  };

  if (props.value) {
    fillValues(props.value);
  } else if (value) {
    fillValues(value);
  }

  const ref = useRef<any>();

  useEffect(() => {
    window.addEventListener('mousedown', onMouseDown);

    return () => {
      window.removeEventListener('mousedown', onMouseDown);
    };
  }, [isFocused]);

  const onMouseDown: EventListener = (e: Event) => {
    if (!ref.current?.contains(e.target as Node)) {
      setFocused(false);
    }
  };

  return (
    <ReactSelect
      menuIsOpen={isFocused}
      value={val}
      isFocused={isFocused}
      size={size}
      isDisabled={isDisabled}
      options={items}
      placeholder={isAlternative ? `` : placeholder}
      isSearchable={false}
      className={className || ``}
      onChange={onChange}
      isMulti={isMulti}
      isFullWidth={isFullWidth}
      defaultValue={defaultValue}
      blurInputOnSelect={true}
      autoFocus={autoFocus}
      components={{
        Option: props => <OptionComponent {...props} size={size} />,
        NoOptionsMessage: ({ children, innerProps }) => (
          <NoOptionsMessage {...innerProps}>{children}</NoOptionsMessage>
        ),
        ClearIndicator: ({ innerProps }) => (
          <ClearIndicator {...innerProps}>
            <Icon name={'clear'} />
          </ClearIndicator>
        ),
        Control: (props: any) => (
          <Control
            ref={ref}
            {...props.innerProps}
            isMenuOpened={props.menuIsOpen}
            isFocused={isFocused}
            isMulti={props.isMulti}
            hasValue={props.hasValue}
            isFullWidth={props.isFullWidth}
            size={size}
            isDisabled={props.isDisabled}
          >
            {props.children}
          </Control>
        ),
        CrossIcon: ({ children, innerProps }) => (
          <CrossIcon {...innerProps}>
            <div>{children}</div>
          </CrossIcon>
        ),
        DownChevron: ({ children, innerProps }) => (
          <div {...innerProps}>
            {children}
            <Icon name={'arrowDown'} />
          </div>
        ),
        DropdownIndicator: ({ innerProps, selectProps }) => (
          <DropdownIndicator isDisabled={isDisabled} {...innerProps}>
            {selectProps.menuIsOpen && <Icon name={'arrowUp'} />}
            {!selectProps.menuIsOpen && <Icon name={'arrowDown'} />}
          </DropdownIndicator>
        ),
        Group: ({ children }) => <div>{children}</div>,
        GroupHeading: ({ children, innerProps }) => (
          <div {...innerProps}>{children}</div>
        ),
        Menu: ({ children, innerProps }) => (
          <Menu {...innerProps}>{children}</Menu>
        ),
        MenuList: ({ children }) => <MenuList>{children}</MenuList>,
        IndicatorsContainer: ({ children }) => (
          <IndicatorsContainer size={size}>{children}</IndicatorsContainer>
        ),
        Input: props => (
          <div>
            <Input placeholder={`Začněte psát`} {...props} />
          </div>
        ),
        LoadingIndicator: ({ children, innerProps }) => (
          <div {...innerProps}>{children}</div>
        ),
        LoadingMessage: ({ children, innerProps }) => (
          <div {...innerProps}>{children}</div>
        ),
        MenuPortal: ({ children }) => <div>{children}</div>,
        MultiValue: ({ children, innerProps, components, removeProps }) => (
          <MultiValue size={size} {...innerProps}>
            {children}
            {components.Remove(removeProps)}
          </MultiValue>
        ),
        MultiValueContainer: ({ children, innerProps }) => (
          <div {...innerProps}>{children}</div>
        ),
        MultiValueLabel: ({ children, innerProps }) => (
          <MultiValueLabel {...innerProps}>{children}</MultiValueLabel>
        ),
        MultiValueRemove: ({ ...props }) => (
          <MultiValueRemove {...props}>
            <Icon name={'close'} />
          </MultiValueRemove>
        ),
        Placeholder: ({ children, innerProps }) => (
          <Placeholder {...innerProps}>{children}</Placeholder>
        ),
        SelectContainer: ({ children, innerProps, ...rest }) =>
          isAlternative ? (
            <SelectContainerWrapper
              isMulti={isMulti}
              hasValue={!!value}
              onClick={() => setFocused(!isFocused)}
              isFullWidth={isFullWidth}
              size={size}
              isFocused={isFocused}
              {...innerProps}
            >
              <SelectContainer
                isFullWidth={isFullWidth}
                size={size}
                {...innerProps}
              >
                {children}
              </SelectContainer>
              <label>{placeholder}</label>
            </SelectContainerWrapper>
          ) : (
            <SelectContainer
              onClick={() => setFocused(!isFocused)}
              isFullWidth={isFullWidth}
              size={size}
              {...innerProps}
            >
              {children}
            </SelectContainer>
          ),
        SingleValue: ({ children, innerProps }) => (
          <SingleValue size={size} isFullWidth={isFullWidth} {...innerProps}>
            {children}
          </SingleValue>
        ),
        ValueContainer: ({ children, isMulti, ...props }) => (
          <ValueContainer
            isMulti={isMulti}
            size={size}
            isFullWidth={isFullWidth}
          >
            {children}
          </ValueContainer>
        )
      }}
    />
  );
};

Select.defaultProps = {
  isMulti: false,
  isFullWidth: false,
  size: 'medium'
};

Select.displayName = `Select`;

Select.Option = Option;

// TODO: OptionGroup
