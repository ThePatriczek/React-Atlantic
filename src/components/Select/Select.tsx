import * as React from 'react';
import { default as ReactSelect } from 'react-select';
import { Size } from '../../types';
import { Icon } from '../Icon';
import { Option as OptionComponent } from './components';
import { Option, OptionProps } from './Option';

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
  SingleValue,
  ValueContainer
} from './Select.style';

export interface SelectProps {
  onChange?: (value?: OptionType | OptionType[] | string) => void;
  value?: OptionType | OptionType[] | string;
  defaultValue?: OptionType | OptionType[] | string;
  options?: OptionType[];
  isMulti?: boolean;
  isFullWidth?: boolean;
  placeholder?: string;
  isDisabled?: boolean;
  size: Size;
  className?: string;
}

export interface OptionType {
  value: unknown;
  label: string;
  className?: string;
}

const getChild = (
  child: React.ComponentElement<OptionProps, never>,
  key: number,
  error: string
) => {
  if (!child.type || child.type.displayName !== Option.displayName) {
    throw Error(error);
  }

  const { props } = child;
  const { value, children, className } = props;

  return { value, label: children, className };
};

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
    size,
    defaultValue
  } = props;
  const [value, setValue] = React.useState<any>(defaultValue);

  let items: any[] = [];
  if (children) {
    if (Array.isArray(children)) {
      items = children;
    } else {
      items.push(children);
    }

    items = items.map((item: unknown, key: number) => {
      if (item) {
        if (Array.isArray(item)) {
          return item.map((child, childKey) =>
            getChild(
              child,
              childKey,
              `${Select.displayName} accepts only ${Option.displayName} components!`
            )
          );
        }

        return getChild(
          item as React.ComponentElement<OptionProps, never>,
          key,
          `${Select.displayName} accepts only ${Option.displayName} components!`
        );
      }

      return null;
    }) as OptionType[];
  } else if (options) {
    items = options;
  }

  const onChange = (value?: OptionType | OptionType[]) => {
    if (!isDisabled) {
      if (props.value === undefined) {
        setValue(value);

        if (props.onChange) {
          props.onChange(value);
        }
      } else {
        if (props.onChange) {
          props.onChange(props.value);
        }
      }
    }
  };

  if (typeof value === 'string') {
    items.forEach(item => {
      if (item.value === value) {
        setValue(item);
      }
    });
  }

  if (props.value && ((value && value.value !== props.value) || !value)) {
    if (typeof props.value === 'string') {
      items.forEach(item => {
        if (item.value === props.value) {
          setValue(item);
        }
      });
    } else {
      setValue(props.value);
    }
  }

  return (
    <ReactSelect
      value={value}
      isDisabled={isDisabled}
      options={items}
      placeholder={placeholder || `Select an option`}
      isSearchable={false}
      className={`${className || ``}`}
      onChange={onChange}
      isMulti={isMulti}
      components={{
        Option: props => <OptionComponent {...props} size={size} />,
        NoOptionsMessage: ({ children, innerProps }) => (
          <NoOptionsMessage {...innerProps}>{children}</NoOptionsMessage>
        ),
        ClearIndicator: ({ children, innerProps }) => (
          <ClearIndicator {...innerProps}>
            <Icon name={'clear'} />
          </ClearIndicator>
        ),
        Control: ({
          children,
          innerProps,
          menuIsOpen,
          isFocused,
          isMulti,
          hasValue,
          isDisabled
        }: any) => (
          <Control
            {...innerProps}
            isMenuOpened={menuIsOpen}
            isFocused={isFocused}
            isMulti={isMulti}
            hasValue={hasValue}
            isFullWidth={isFullWidth}
            size={size}
            isDisabled={isDisabled}
          >
            {children}
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
        MenuList: ({ children, ...props }) => <MenuList>{children}</MenuList>,
        IndicatorsContainer: ({ children, ...props }) => (
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
        MenuPortal: ({ children, ...props }) => <div>{children}</div>,
        MultiValue: ({
          children,
          innerProps,
          components,
          removeProps,
          ...props
        }) => (
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
        SelectContainer: ({ children, innerProps }) => (
          <SelectContainer
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
        ValueContainer: ({ children, isMulti }) => (
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
