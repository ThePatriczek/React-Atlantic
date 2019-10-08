import * as React from 'react';
import { default as ReactSelect } from 'react-select';
import { Icon } from '../Icon';
import { Option, OptionProps } from './Option';
import { StyledOption } from './Option/Option.style';

import {
  ClearIndicator,
  Control,
  CrossIcon,
  DropdownIndicator,
  IndicatorsContainer,
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
  isSearchable?: boolean;
  onChange?: (value?: any | any[]) => void;
  placeholder?: string;
  isDisabled?: boolean;
  value?: OptionType | OptionType[];
  className?: string;
  options?: OptionType[];
  isMulti?: boolean;
}

export interface OptionType {
  value: any;
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
    isSearchable,
    placeholder,
    isDisabled,
    value,
    className,
    options,
    isMulti
  } = props;
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
    if (props.onChange) {
      props.onChange(value);
    }
  };

  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  return (
    <ReactSelect
      value={value}
      isDisabled={isDisabled}
      options={items}
      placeholder={placeholder || `Select an option`}
      isSearchable={isSearchable}
      className={`${className || ``}`}
      onChange={onChange}
      isMulti={isMulti}
      components={{
        Option: ({ innerRef, innerProps, label, ...others }) => {
          const { className } = others.data;

          return (
            <StyledOption ref={innerRef} {...innerProps} className={className}>
              {label}
            </StyledOption>
          );
        },
        NoOptionsMessage: ({ children, innerProps }) => (
          <NoOptionsMessage className={`no-options`} {...innerProps}>
            {children}
          </NoOptionsMessage>
        ),
        ClearIndicator: ({ children, innerProps }) => (
          <ClearIndicator className={`clear`} {...innerProps}>
            <Icon name={'clear'} />
          </ClearIndicator>
        ),
        Control: ({
          children,
          innerProps,
          menuIsOpen,
          isFocused,
          isMulti,
          hasValue
        }: any) => (
          <Control
            {...innerProps}
            isMenuOpened={menuIsOpen}
            isFocused={isFocused}
            isMulti={isMulti}
            hasValue={hasValue}
            className={`control`}
          >
            {children}
          </Control>
        ),
        CrossIcon: ({ children, innerProps }) => (
          <CrossIcon className={`clear-all`} {...innerProps}>
            <div>{children}</div>
          </CrossIcon>
        ),
        DownChevron: ({ children, innerProps }) => (
          <div className={`arrow`} {...innerProps}>
            {children}
            <Icon name={'arrowDown'} />
          </div>
        ),
        DropdownIndicator: ({ innerProps, selectProps }) => (
          <DropdownIndicator className={`arrow-container`} {...innerProps}>
            {selectProps.menuIsOpen && <Icon name={'arrowUp'} />}
            {!selectProps.menuIsOpen && <Icon name={'arrowDown'} />}
          </DropdownIndicator>
        ),
        Group: ({ children }) => <div className={`children`}>{children}</div>,
        GroupHeading: ({ children, innerProps }) => (
          <div className={`heading`} {...innerProps}>
            {children}
          </div>
        ),
        Menu: ({ children, innerProps }) => (
          <Menu className={`menu`} {...innerProps}>
            {children}
          </Menu>
        ),
        MenuList: ({ children, ...props }) => <MenuList>{children}</MenuList>,
        IndicatorsContainer: ({ children, ...props }) => (
          <IndicatorsContainer className={`indicators-container`}>
            {children}
          </IndicatorsContainer>
        ),
        Input: props => <input {...props} />,
        LoadingIndicator: ({ children, innerProps }) => (
          <div className={`loading`} {...innerProps}>
            {children}
          </div>
        ),
        LoadingMessage: ({ children, innerProps }) => (
          <div className={`loading-msg`} {...innerProps}>
            {children}
          </div>
        ),
        MenuPortal: ({ children, ...props }) => (
          <div className={`menu`}>{children}</div>
        ),
        MultiValue: ({
          children,
          innerProps,
          components,
          removeProps,
          ...props
        }) => (
          <MultiValue className={`multi-value`} {...innerProps}>
            {children}
            {components.Remove(removeProps)}
          </MultiValue>
        ),
        MultiValueContainer: ({ children, innerProps }) => (
          <div className={`multi-value-container`} {...innerProps}>
            {children}
          </div>
        ),
        MultiValueLabel: ({ children, innerProps }) => (
          <MultiValueLabel className={`multi-value-label`} {...innerProps}>
            {children}
          </MultiValueLabel>
        ),
        MultiValueRemove: ({ ...props }) => (
          <MultiValueRemove className={`multi-value-remove`} {...props}>
            <Icon name={'clear'} />
          </MultiValueRemove>
        ),
        Placeholder: ({ children, innerProps }) => (
          <Placeholder className={`placeholder`} {...innerProps}>
            {children}
          </Placeholder>
        ),
        SelectContainer: ({ children, innerProps }) => (
          <SelectContainer className={`select-container`} {...innerProps}>
            {children}
          </SelectContainer>
        ),
        SingleValue: ({ children, innerProps }) => (
          <SingleValue className={`single-value`} {...innerProps}>
            {children}
          </SingleValue>
        ),
        ValueContainer: ({ children, ...innerProps }) => (
          <ValueContainer className={`value-container`}>
            {children}
          </ValueContainer>
        )
      }}
    />
  );
};

Select.defaultProps = {
  isSearchable: false,
  isMulti: false
};

Select.displayName = `Select`;

Select.Option = Option;

// TODO: OptionGroup
