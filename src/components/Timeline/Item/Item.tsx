import React, { FC, ReactElement, useCallback } from 'react';
import { Icon, IconName } from '../../Icon';
import { Tooltip } from '../../Tooltip';
import { Typography } from '../../Typography';
import { useTimeline } from '../Context';
import {
  StyledListElementsContainer,
  StyledListItem,
  StyledTimelineButton,
  StyledTimelineCaption,
  StyledTimelineCaptionContainer,
  StyledTimelineCircle,
  StyledTimelineContainer,
  StyledTimelineItem,
  StyledTimelineSide,
  StyledTimelineTitle
} from './Item.style';

interface HintType {
  description: Readonly<string>;
  hintComponent?: (hint: Readonly<string>, id: Readonly<string>) => JSX.Element;
}

export interface TimelineButton {
  icon: Readonly<IconName>;
  onClick?: () => void;
  hint?: HintType;
}
export interface TimelineCaption {
  value: Readonly<string>;
  onClick?: () => void;
  hint?: HintType;
  isDisabled?: Readonly<boolean>;
}

export interface ItemProps {
  onClick?: () => void;
  className?: Readonly<string>;
  captions?: ReadonlyArray<Readonly<TimelineCaption>>;
  children: Readonly<string>;
  buttons?: ReadonlyArray<Readonly<TimelineButton>>;
  elements?: ReadonlyArray<JSX.Element>;
  hint?: HintType;
}

interface ItemPropsPrivate extends ItemProps {
  index?: Readonly<number>;
}

const { Title, Text } = Typography;

export const Item: FC<ItemPropsPrivate> = (props): Readonly<ReactElement> => {
  const {
    index,
    className,
    children,
    captions,
    buttons,
    elements,
    hint
  } = props;
  const { onChange, activeIndex } = useTimeline();
  const isActive: Readonly<boolean> = index === activeIndex;

  const onClick = () => {
    props.onClick?.();

    if (typeof index !== 'undefined') {
      onChange(index);
    }
  };

  // const buttonRenderer = useCallback(
  //   (buttonsInput: ReadonlyArray<Readonly<TimelineButton>>): JSX.Element => {
  //     const withHint = (
  //       button: Readonly<TimelineButton>,
  //       key: Readonly<number>
  //     ): Readonly<JSX.Element> => {
  //       const tooltipTipKey: Readonly<string> = `${button?.hint}-${key}`;
  //       return button.hint?.hintComponent ? (
  //         <span data-tip data-for={tooltipTipKey} key={key}>
  //           <StyledTimelineButton key={key} onClick={button.onClick}>
  //             <Icon name={button.icon} />
  //           </StyledTimelineButton>
  //           {button.hint.hintComponent(
  //             button?.hint?.description,
  //             tooltipTipKey
  //           )}
  //         </span>
  //       ) : (
  //         <span data-tip data-for={tooltipTipKey} key={key}>
  //           <StyledTimelineButton key={key} onClick={button.onClick}>
  //             <Icon name={button.icon} />
  //           </StyledTimelineButton>
  //           <Tooltip id={tooltipTipKey}>{button?.hint?.description}</Tooltip>
  //         </span>
  //       );
  //     };
  //
  //     const withoutHint = (
  //       button: Readonly<TimelineButton>,
  //       key: Readonly<number>
  //     ): Readonly<JSX.Element> => {
  //       return (
  //         <StyledTimelineButton key={key} onClick={button.onClick}>
  //           <Icon name={button.icon} />
  //         </StyledTimelineButton>
  //       );
  //     };
  //
  //     return (
  //       buttonsInput && (
  //         <StyledTimelineContainer>
  //           {buttonsInput.map(
  //             (button: Readonly<TimelineButton>, key: Readonly<number>) =>
  //               button?.hint ? withHint(button, key) : withoutHint(button, key)
  //           )}
  //         </StyledTimelineContainer>
  //       )
  //     );
  //   },
  //   []
  // );

  const TimelineTitle = (): JSX.Element => {
    const element = (
      <StyledTimelineTitle href={'#'} isActive={isActive} onClick={onClick}>
        <Title level={5}>{children}</Title>
      </StyledTimelineTitle>
    );
    return hint ? tooltipFactory(hint, element) : element;
  };

  const TimelineCaptions = (): JSX.Element | null => {
    return captions ? (
      <StyledTimelineCaptionContainer>
        {captions.map((item, key) => {
          const element = (
            <StyledTimelineCaption
              isDisabled={item.isDisabled}
              href={'#'}
              onClick={() => !item.isDisabled && item.onClick}
              key={key}
              hasMarginRight={key < captions.length - 1}
            >
              <Text>
                {key < captions.length - 1 ? `${item.value},` : item.value}
              </Text>
            </StyledTimelineCaption>
          );

          return item.hint && !item.isDisabled
            ? tooltipFactory(item.hint, element, key)
            : element;
        })}
      </StyledTimelineCaptionContainer>
    ) : null;
  };

  const TimelineButtons = (): JSX.Element | null => {
    return buttons ? (
      <StyledTimelineContainer>
        {buttons.map(
          (button: Readonly<TimelineButton>, key: Readonly<number>) => {
            const element = (
              <StyledTimelineButton key={key} onClick={button.onClick}>
                <Icon name={button.icon} />
              </StyledTimelineButton>
            );
            return button.hint
              ? tooltipFactory(button.hint, element, key)
              : element;
          }
        )}
      </StyledTimelineContainer>
    ) : null;
  };

  const TimelineElements = (): JSX.Element | null => {
    return elements ? (
      <StyledListElementsContainer>
        {elements.map((ele: Readonly<JSX.Element>, key: Readonly<number>) => {
          const element = <StyledListItem key={key}>{ele}</StyledListItem>;
          return element;
        })}
      </StyledListElementsContainer>
    ) : null;
  };

  return (
    <StyledTimelineItem className={className} highlight={isActive}>
      <StyledTimelineSide>
        <StyledTimelineCircle isActive={isActive} onClick={onClick} />
      </StyledTimelineSide>
      <StyledTimelineContainer isMain>
        {TimelineTitle()}
        {TimelineCaptions()}
      </StyledTimelineContainer>

      {TimelineButtons()}
      {TimelineElements()}
    </StyledTimelineItem>
  );
};

Item.displayName = `Item`;

const tooltipFactory = (
  hint: HintType,
  element: JSX.Element,
  key?: Readonly<number>
): JSX.Element => {
  const tooltipTipKey: Readonly<string> = `${hint.description}-${key || -1}`;
  return hint?.hintComponent ? (
    <span data-tip data-for={tooltipTipKey} key={key}>
      {element}
      {hint.hintComponent(hint?.description, tooltipTipKey)}
    </span>
  ) : (
    <span data-tip data-for={tooltipTipKey} key={key}>
      {element}
      <Tooltip id={tooltipTipKey}>{hint?.description}</Tooltip>
    </span>
  );
};
