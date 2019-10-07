import * as React from 'react';
import { default as ReactSelect } from 'react-select';
import { Icon } from '../Icon';
import { Option, OptionProps } from './Option';
import { StyledOption } from './Option/Option.style';
import {
  Control,
  DropdownIndicator,
  IndicatorsContainer,
  IndicatorSeparator,
  Menu,
  MenuList,
  Placeholder,
  SelectContainer,
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
          <div className={`no-options`} {...innerProps}>
            {children}
            {/*Nebyly nalezeny žádné výsledky*/}
          </div>
        ),
        ClearIndicator: ({ children, innerProps }) => (
          <div className={`clear`} {...innerProps}>
            {children}
            {/*<Icon name={'clear'} />*/}
          </div>
        ),
        Control: ({ children, innerProps, menuIsOpen, isFocused }: any) => (
          <Control
            {...innerProps}
            isMenuOpened={menuIsOpen}
            isFocused={isFocused}
          >
            {children}
          </Control>
        ),
        CrossIcon: ({ children, innerProps }) => (
          <div className={`clear-all`} {...innerProps}>
            {children}
          </div>
        ),
        DownChevron: ({ children, innerProps }) => (
          <div className={`arrow`} {...innerProps}>
            {children}
            <Icon name={'arrowDown'} />
          </div>
        ),
        DropdownIndicator: ({ children, innerProps, selectProps }) => (
          <DropdownIndicator {...innerProps}>
            {selectProps.menuIsOpen && <Icon name={'arrowUp'} />}
            {!selectProps.menuIsOpen && <Icon name={'arrowDown'} />}
          </DropdownIndicator>
        ),
        Group: ({ children }) => <div className={`6`}>{children}</div>,
        GroupHeading: ({ children, innerProps }) => (
          <div className={`heading`} {...innerProps}>
            {children}
          </div>
        ),
        Menu: ({ children, innerProps }) => (
          <Menu {...innerProps}>{children}</Menu>
        ),
        MenuList: ({ children, ...props }) => <MenuList>{children}</MenuList>,
        IndicatorsContainer: ({ children, ...props }) => (
          <IndicatorsContainer>{children}</IndicatorsContainer>
        ),
        IndicatorSeparator: ({ children, innerProps }) => (
          <IndicatorSeparator {...innerProps}>{children}</IndicatorSeparator>
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
        MultiValue: ({ children, innerProps }) => (
          <div className={`multi-value`} {...innerProps}>
            {children}
          </div>
        ),
        MultiValueContainer: ({ children, innerProps }) => (
          <div className={`multi-value-container`} {...innerProps}>
            {children}
          </div>
        ),
        MultiValueLabel: ({ children, innerProps }) => (
          <div className={`multi-value-label`} {...innerProps}>
            {children}
          </div>
        ),
        MultiValueRemove: ({ children, innerProps }) => (
          <div className={`multi-value-remove`} {...innerProps}>
            {children}
          </div>
        ),
        Placeholder: ({ children, innerProps }) => (
          <Placeholder {...innerProps}>{children}</Placeholder>
        ),
        SelectContainer: ({ children, innerProps }) => (
          <SelectContainer {...innerProps}>{children}</SelectContainer>
        ),
        SingleValue: ({ children, innerProps }) => (
          <div className={`single-value`} {...innerProps}>
            {children}
          </div>
        ),
        ValueContainer: ({ children, ...innerProps }) => (
          <ValueContainer>{children}</ValueContainer>
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
