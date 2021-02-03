import * as React from "react";
import { useRef, useState } from "react";
import { default as ReactSelect } from "react-select";
import { Size } from "../../types";
import { Icon } from "../Icon";
import { Option as OptionComponent } from "./components";
import { Option, OptionProps } from "./Option";
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
} from "./Select.style";
import { checkChildrenAndOptions, OptionType } from "./Select.utils";

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
  defaultIsOpen?: boolean;
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
    autoFocus,
    defaultIsOpen = false
  } = props;
  const ref = useRef<any>(null);
  const [value, setValue] = React.useState<any>(defaultValue);
  const [isFocused, setFocused] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(defaultIsOpen);

  let items: OptionType[] = [];
  items = checkChildrenAndOptions(children, options);

  const onChange = (value?: OptionType | OptionType[]) => {
    if (!isDisabled) {
      setIsOpen(false);
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
    if (typeof value === "string" || typeof value === "number") {
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

  return (
    <ReactSelect
      menuIsOpen={isOpen}
      value={val}
      size={size}
      isDisabled={isDisabled}
      options={items}
      openMenuOnClick={true}
      onFocus={() => setFocused(true)}
      onBlur={() => {
        setFocused(false);
        setIsOpen(false);
      }}
      onMenuOpen={() => {
        if (!isOpen) {
          setIsOpen(true);
        }
      }}
      onMenuClose={() => {
        if (isOpen) {
          setIsOpen(false);
        }
      }}
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
            <Icon name={"clear"} />
          </ClearIndicator>
        ),
        Control: (props: any) => (
          <Control
            {...props.innerProps}
            ref={ref}
            isMulti={props.isMulti}
            hasValue={props.hasValue}
            isFullWidth={props.isFullWidth}
            size={size}
            isDisabled={props.isDisabled}
            isFocused={isFocused}
            isMenuOpened={isOpen}
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
            <Icon name={"arrowDown"} />
          </div>
        ),
        DropdownIndicator: ({ innerProps, selectProps }) => (
          <DropdownIndicator isDisabled={isDisabled} {...innerProps}>
            {isOpen && <Icon name={"arrowUp"} />}
            {!isOpen && <Icon name={"arrowDown"} />}
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
            <Icon name={"close"} />
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
              onClick={() => {
                if (!isDisabled) {
                  setFocused(!isFocused);
                }
              }}
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
              onClick={() => {
                if (!isDisabled) {
                  setFocused(!isFocused);
                }
              }}
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
  size: "medium"
};

Select.displayName = `Select`;

Select.Option = Option;

// TODO: OptionGroup
