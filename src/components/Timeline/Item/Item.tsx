import React, { FC, ReactElement } from 'react';
import { Icon, IconName } from '../../Icon';
import { Typography } from '../../Typography';
import { useTimeline } from '../Context';
import {
  StyledTimelineButton,
  StyledTimelineCaption,
  StyledTimelineCaptionContainer,
  StyledTimelineCircle,
  StyledTimelineContainer,
  StyledTimelineItem,
  StyledTimelineSide,
  StyledTimelineTitle
} from './Item.style';

export interface TimelineButton {
  icon: Readonly<IconName>;
  onClick?: () => void;
}
export interface TimelineCaption {
  value: Readonly<string>;
  onClick?: () => void;
}

export interface ItemProps {
  onClick?: () => void;
  className?: Readonly<string>;
  captions?: ReadonlyArray<Readonly<TimelineCaption>>;
  children: Readonly<string>;
  buttons?: ReadonlyArray<Readonly<TimelineButton>>;
}

interface ItemPropsPrivate extends ItemProps {
  index?: Readonly<number>;
}

const { Title, Text } = Typography;

export const Item: FC<ItemPropsPrivate> = (props): Readonly<ReactElement> => {
  const { index, className, children, captions, buttons } = props;
  const { onChange, activeIndex } = useTimeline();
  const isActive: Readonly<boolean> = index === activeIndex;

  const onClick = () => {
    props.onClick?.();

    if (typeof index !== 'undefined') {
      onChange(index);
    }
  };

  return (
    <StyledTimelineItem className={className} highlight={isActive}>
      <StyledTimelineSide>
        <StyledTimelineCircle isActive={isActive} onClick={onClick} />
      </StyledTimelineSide>
      <StyledTimelineContainer isMain>
        <StyledTimelineTitle href={'#'} isActive={isActive} onClick={onClick}>
          <Title level={5}>{children}</Title>
        </StyledTimelineTitle>
        {captions && (
          <StyledTimelineCaptionContainer>
            {captions.map((item, key) => (
              <StyledTimelineCaption
                href={'#'}
                onClick={item.onClick}
                key={key}
                hasMarginRight={key < captions.length - 1}
              >
                <Text>
                  {key < captions.length - 1 ? `${item.value},` : item.value}
                </Text>
              </StyledTimelineCaption>
            ))}
          </StyledTimelineCaptionContainer>
        )}
      </StyledTimelineContainer>

      {buttons && (
        <StyledTimelineContainer>
          {buttons.map(
            (button: Readonly<TimelineButton>, key: Readonly<number>) => (
              <StyledTimelineButton key={key} onClick={button.onClick}>
                <Icon name={button.icon} />
              </StyledTimelineButton>
            )
          )}
        </StyledTimelineContainer>
      )}
    </StyledTimelineItem>
  );
};

Item.displayName = `Item`;
