import React, { FC, PropsWithChildren } from 'react';
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
  activeTab?: any;
  /** tabs which render in group */
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
  const {
    isAlternative,
    activeTab,
    children,
    isBordered,
    size,
    animationConfig
  } = props;
  const { value } = useRadioGroup();
  let tabs: TabProps[] = [];

  if (Array.isArray(props.tabs)) {
    tabs = props.tabs;
  } else {
    tabs.push(props.tabs);
  }

  let activeSlide: number = 0;
  const slides = tabs.map(
    (tab: Readonly<TabProps>, index: Readonly<number>) => {
      if (tab.value === value) {
        activeSlide = index;

        const isActiveSlide: Readonly<boolean> = activeSlide === index;
        const isNextSlide: Readonly<boolean> = index - 1 === activeSlide;
        const isPrevSlide: Readonly<boolean> = index + 1 === activeSlide;
        return (
          <Carousel.Slide>
            {isActiveSlide ? (
              children
            ) : isNextSlide || isPrevSlide ? (
              <div></div>
            ) : null}
          </Carousel.Slide>
        );
      }
      return <Carousel.Slide />;
    }
  );

  const Content = () => {
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
