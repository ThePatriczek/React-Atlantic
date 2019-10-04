import * as React from 'react';
import { default as ReactSelect } from 'react-select';
import { Option, OptionProps } from './Option';
import { StyledOption } from './Option/Option.style';

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
      className={`atlantic--select${isMulti ? ` isMulti` : ``}${
        (Array.isArray(value) && value.length) ||
        (!Array.isArray(value) && value)
          ? ` has-value`
          : ``
      }${className || ``}`}
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
          <div className={`0`} {...innerProps}>
            {children}
          </div>
        ),
        ClearIndicator: ({ children, innerProps }) => (
          <div className={`1`} {...innerProps}>
            {children}
          </div>
        ),
        Control: ({ children, innerProps }) => (
          <div className={`2`} {...innerProps}>
            {children}
          </div>
        ),
        CrossIcon: ({ children, innerProps }) => (
          <div className={`3`} {...innerProps}>
            {children}
          </div>
        ),
        DownChevron: ({ children, innerProps }) => (
          <div className={`4`} {...innerProps}>
            {children}
          </div>
        ),
        DropdownIndicator: ({ children, innerProps }) => (
          <div className={`5`} {...innerProps}>
            {children}
          </div>
        ),
        Group: ({ children }) => <div className={`6`}>{children}</div>,
        GroupHeading: ({ children, innerProps }) => (
          <div className={`7`} {...innerProps}>
            {children}
          </div>
        ),
        Menu: ({ children, innerProps }) => (
          <div className={`8`} {...innerProps}>
            {children}
          </div>
        ),
        MenuList: ({ children, ...props }) => (
          <div className={`9`}>{children}</div>
        ),
        IndicatorsContainer: ({ children, ...props }) => (
          <div className={`10`}>{children}</div>
        ),
        IndicatorSeparator: ({ children, innerProps }) => (
          <div className={`11`} {...innerProps}>
            {children}
          </div>
        ),
        Input: props => <input {...props} />,
        LoadingIndicator: ({ children, innerProps }) => (
          <div className={`12`} {...innerProps}>
            {children}
          </div>
        ),
        LoadingMessage: ({ children, innerProps }) => (
          <div className={`13`} {...innerProps}>
            {children}
          </div>
        ),
        MenuPortal: ({ children, ...props }) => (
          <div className={`14`}>{children}</div>
        ),
        MultiValue: ({ children, innerProps }) => (
          <div className={`15`} {...innerProps}>
            {children}
          </div>
        ),
        MultiValueContainer: ({ children, innerProps }) => (
          <div className={`16`} {...innerProps}>
            {children}
          </div>
        ),
        MultiValueLabel: ({ children, innerProps }) => (
          <div className={`17`} {...innerProps}>
            {children}
          </div>
        ),
        MultiValueRemove: ({ children, innerProps }) => (
          <div className={`18`} {...innerProps}>
            {children}
          </div>
        ),
        Placeholder: ({ children, innerProps }) => (
          <div className={`19`} {...innerProps}>
            {children}
          </div>
        ),
        SelectContainer: ({ children, innerProps }) => (
          <div className={`20`} {...innerProps}>
            {children}
          </div>
        ),
        SingleValue: ({ children, innerProps }) => (
          <div className={`21`} {...innerProps}>
            {children}
          </div>
        ),
        ValueContainer: ({ children, ...props }) => (
          <div className={`22`}>{children}</div>
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
