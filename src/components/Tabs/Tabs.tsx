import React, { FC, ReactText } from 'react';
import { Size, Type } from '../../types';
import { RadioGroupContextProvider } from '../Radio/Context';
import { GroupProps } from '../Radio/Group';
import { Tab, TabProps } from './Tab';
import {
  StyledTabsBar,
  StyledTabsContainer,
  StyledTabsContent
} from './Tabs.style';

export interface TabsProps extends GroupProps {
  /* value of activeTab */
  activeTab?: any;
  /* tabs which render in group */
  tabs: TabProps | TabProps[];
  /** small | medium | large */
  size?: Size;
  /** custom className */
  className?: string;
  isBordered?: boolean;
  isAlternative?: boolean;
}

export const Tabs: FC<TabsProps> = props => {
  const {
    children,
    className,
    size,
    onChange,
    activeTab,
    isBordered,
    isAlternative
  } = props;
  let tabs: TabProps[] = [];

  if (Array.isArray(props.tabs)) {
    tabs = props.tabs;
  } else {
    tabs.push(props.tabs);
  }

  return (
    <StyledTabsContainer className={className} size={size as Size} {...props}>
      <RadioGroupContextProvider onChange={onChange}>
        <StyledTabsBar isAlternative={!!isAlternative} size={size as Size}>
          {tabs.map(item => (
            <Tab
              key={item.value}
              value={item.value}
              label={item.label}
              isDisabled={item.isDisabled}
              isActive={activeTab ? activeTab === item.value : undefined}
              isAlternative={!!isAlternative}
            />
          ))}
        </StyledTabsBar>
      </RadioGroupContextProvider>

      <StyledTabsContent isBordered={!!isBordered} size={size as Size}>
        {children}
      </StyledTabsContent>
    </StyledTabsContainer>
  );
};
Tabs.defaultProps = {
  size: 'medium',
  isAlternative: false,
  isBordered: false
};
Tabs.displayName = `Tabs`;
