import React, { FC, ReactElement } from 'react';
import { Icon, IconName } from '../../Icon';
import { Typography } from '../../Typography';
import { useTimeline } from '../Context';
import {
  StyledTimelineButton,
  StyledTimelineCaption,
  StyledTimelineCircle,
  StyledTimelineContainer,
  StyledTimelineItem,
  StyledTimelineSide,
  StyledTimelineTitle
} from './Item.style';

interface TimelineButton {
  icon: IconName;
  onClick?: () => void;
}

export interface ItemProps {
  onClick?: () => void;
  onCaptionClick?: () => void;
  className?: Readonly<string>;
  caption?: Readonly<string>;
  children: Readonly<string>;
  buttons?: ReadonlyArray<Readonly<TimelineButton>>;
}

interface ItemPropsPrivate extends ItemProps {
  index?: Readonly<number>;
}

const { Title, Text } = Typography;

export const Item: FC<ItemPropsPrivate> = (props): Readonly<ReactElement> => {
  const { index, className, children, caption, buttons } = props;
  const { onChange, activeIndex } = useTimeline();
  const isActive: Readonly<boolean> = index === activeIndex;

  const onClick = () => {
    props.onClick?.();

    if (typeof index !== 'undefined') {
      onChange(index);
    }
  };

  const onCaptionClick = () => props.onCaptionClick?.();

  return (
    <StyledTimelineItem className={className} highlight={isActive}>
      <StyledTimelineSide>
        <StyledTimelineCircle isActive={isActive} onClick={onClick} />
      </StyledTimelineSide>
      <StyledTimelineContainer isMain>
        <StyledTimelineTitle href={'#'} isActive={isActive} onClick={onClick}>
          <Title level={5}>{children}</Title>
        </StyledTimelineTitle>
        {caption && (
          <StyledTimelineCaption href={'#'} onClick={onCaptionClick}>
            <Text>{caption}</Text>
          </StyledTimelineCaption>
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
