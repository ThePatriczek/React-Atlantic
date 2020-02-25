import React, { FC, PropsWithChildren, useEffect } from 'react';
import { SpringConfig } from 'react-spring/web.cjs';
import { Size } from '../../types';
import { Carousel } from '../Carousel';
import { RadioGroupContextProvider, useRadioGroup } from '../Radio/Context';
import { GroupProps } from '../Radio/Group';
import { Tab, TabProps } from './Tab';
import {
  StyledTabsBar,
  StyledTabsContainer,
  StyledTabsContent
} from './Tabs.style';

export interface TabsProps extends GroupProps {
  /** Animation config */
  animationConfig?: SpringConfig;
  /** value of activeTab */
  activeTab?: Readonly<any>;
  /** tabs which render in group */
  tabs: TabProps | TabProps[];
  /** small | medium | large */
  size?: Readonly<Size>;
  /** custom className */
  className?: Readonly<string>;
  isBordered?: Readonly<boolean>;
  isAlternative?: Readonly<boolean>;
}

export const Tabs: FC<Readonly<TabsProps>> = props => {
  const { children, className, size, onChange } = props;

  return (
    <StyledTabsContainer
      className={className}
      size={size as Size}
      isAlternative={isAlternative}
      isBordered={isBordered}
      tabs={props.tabs}
      activeTab={activeTab}
    >
      <RadioGroupContextProvider onChange={onChange}>
        <TabsWithContext {...props}>{children}</TabsWithContext>
      </RadioGroupContextProvider>
    </StyledTabsContainer>
  );
};

const TabsWithContext: FC<PropsWithChildren<TabsProps>> = props => {
  const {
    isAlternative,
    activeTab,
    children,
    isBordered,
    size,
    animationConfig
  } = props;
  const { value, setValue } = useRadioGroup();
  let tabs: TabProps[] = [];

  useEffect(() => {
    setValue(tabs?.[0].value);
  }, []);

  useEffect(() => {
    if (activeTab !== undefined) {
      setValue(activeTab);
    }
  }, [activeTab]);

  if (Array.isArray(props.tabs)) {
    tabs = props.tabs;
  } else {
    tabs.push(props.tabs);
  }

  let activeSlide: number = 0;
  const slides: Readonly<JSX.Element[]> = tabs.map(
    (tab: Readonly<TabProps>, index: Readonly<number>) => {
      if (tab.value === value) {
        activeSlide = index;
      }

      const isActiveSlide: Readonly<boolean> = activeSlide === index;

      if (isActiveSlide) {
        return <Carousel.Slide key={index}>{children}</Carousel.Slide>;
      }

      return <Carousel.Slide key={index} />;
    }
  );

  const Content = (): Readonly<React.ReactElement> => {
    return (
      <Carousel springConfig={animationConfig} activeSlide={activeSlide}>
        {slides}
      </Carousel>
    );
  };

  return (
    <>
      <StyledTabsBar isAlternative={!!isAlternative} size={size as Size}>
        {tabs.map(item => (
          <Tab
            key={item.value}
            value={item.value}
            label={item.label}
            isDisabled={item.isDisabled}
            isAlternative={!!isAlternative}
          />
        ))}
      </StyledTabsBar>
      <StyledTabsContent
        isBordered={!!isBordered}
        size={size as Size}
        hasBackground={!!value || !!activeTab}
      >
        {Content()}
      </StyledTabsContent>
    </>
  );
};

TabsWithContext.displayName = `TabsWithContext`;

Tabs.defaultProps = {
  size: 'medium',
  isAlternative: false,
  isBordered: false,
  animationConfig: { duration: 0 }
};
Tabs.displayName = `Tabs`;
