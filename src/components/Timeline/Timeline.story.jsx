import { number, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { specs } from 'storybook-addon-specifications';
import { Component, tests } from './Timeline.test';
import { defaultValues } from '../../constants/defaultValues';
import { action } from '@storybook/addon-actions';
import { Timeline } from './Timeline';
import { Button } from '../Button';
import { Tooltip } from '../Tooltip';

const stories = storiesOf('Timeline', module);

stories.addDecorator(withKnobs);

stories.add(
  'Overview',
  () => {
    return (
      <>
        <Timeline>
          <Timeline.Item
            isDisabled={true}
            elements={[
              <span data-tip data-for={`click-me`}>
                <Button
                  isDisabled={true}
                  onClick={() => console.log(`Click me!`)}
                >
                  Click
                </Button>
                <Tooltip id={`click-me`} place={`top`}>
                  {`Click me`}
                </Tooltip>
              </span>
            ]}
          >
            A
          </Timeline.Item>
          <Timeline.Item
            buttons={[
              {
                icon: 'trash',
                hint: { description: `Hello World!` },
                isDisabled: true
              }
            ]}
          >
            B
          </Timeline.Item>
          <Timeline.Item
            isDisabled={true}
            elements={[<Button>Click</Button>]}
            captions={[
              { value: `A`, hint: { description: `A` }, isDisabled: true },
              { value: `B`, hint: { description: `B` } },
              { value: `C`, hint: { description: `C` } }
            ]}
          >
            C
          </Timeline.Item>
          <Timeline.Item elements={[<Button>Click</Button>]}>D</Timeline.Item>
        </Timeline>
      </>
    );
  },
  {
    info: { inline: true }
  }
);

stories.add(
  'Playground',
  () => {
    const index = number(`activeIndex:`, defaultValues.index);
    const onChange = action(`onChange`);
    const onClick = action(`onClick`);
    const onCaptionClick = action(`onCaptionClick`);

    const Timeline = Component(index, onChange, onClick, onCaptionClick);

    specs(() => tests(Timeline));

    return Timeline;
  },
  {
    info: { inline: true }
  }
);
