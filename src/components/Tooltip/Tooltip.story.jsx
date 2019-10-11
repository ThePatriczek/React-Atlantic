import { select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { specs } from 'storybook-addon-specifications';
import { Tooltip } from './Tooltip';
import { Typography } from '../Typography';
import { defaultValues } from '../..';
import { Component, tests } from './Tooltip.test';

const { Text } = Typography;

const stories = storiesOf('Tooltip', module);

stories.addDecorator(withKnobs);

stories.add(
  'Playground',
  () => {
    const place = select(
      `place:`,
      ['top', 'right', 'bottom', 'left'],
      defaultValues.place
    );
    const type = select(
      `type:`,
      ['dark', 'light', 'error', 'info', 'success', 'warning'],
      defaultValues.tooltipType
    );
    const event = select(
      `event:`,
      [`mouseenter`, `click`],
      defaultValues.event
    );
    const eventOff = select(
      `eventOff:`,
      [`mouseleave`, `click`],
      defaultValues.eventOff
    );
    const children = text(`data-tip`, defaultValues.children);
    const tooltip = Component(place, type, event, eventOff, children);

    specs(() => tests(tooltip));
    const style = {
      margin: '0 auto',
      display: 'table'
    };

    return (
      <div key={JSON.stringify([event, eventOff, children, place, type])}>
        {tooltip}
        <div data-tip data-for={`tooltip`} style={style}>
          <Text element={'strong'}>{`➡️Tooltip ⬅️`}</Text>
        </div>
      </div>
    );
  },
  {
    info: { inline: true }
  }
);
