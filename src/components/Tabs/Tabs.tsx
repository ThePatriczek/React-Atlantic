import React, { FC, PropsWithChildren } from 'react';
import { Size } from '../../types';
import { RadioGroupContextProvider, useRadioGroup } from '../Radio/Context';
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
  return (
    <StyledTabsContainer className={className} size={size as Size} {...props}>
      <RadioGroupContextProvider onChange={onChange}>
        <TabsWithContext {...props}>{children}</TabsWithContext>
      </RadioGroupContextProvider>
    </StyledTabsContainer>
  );
};

const TabsWithContext: FC<PropsWithChildren<TabsProps>> = props => {
  const { isAlternative, activeTab, children, isBordered, size } = props;
  const { value } = useRadioGroup();
  let tabs: TabProps[] = [];

  if (Array.isArray(props.tabs)) {
    tabs = props.tabs;
  } else {
    tabs.push(props.tabs);
  }

  return (
    <>
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
      <StyledTabsContent
        isBordered={!!isBordered}
        size={size as Size}
        hasBackground={!!value || !!activeTab}
      >
        {children}
      </StyledTabsContent>
    </>
  );
};

TabsWithContext.displayName = `TabsWithContext`;

Tabs.defaultProps = {
  size: 'medium',
  isAlternative: false,
  isBordered: false
};
Tabs.displayName = `Tabs`;
