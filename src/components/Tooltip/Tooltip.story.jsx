import { select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { describe, it, specs } from 'storybook-addon-specifications';
import { mount } from 'enzyme';
import expect from 'expect';
import { Tooltip } from './Tooltip';
import { Typography } from '../Typography';

const { Text } = Typography;

const stories = storiesOf('Tooltip', module);

stories.addDecorator(withKnobs);

stories.add(
  'Playground',
  () => {
    const place = select(`place:`, ['top', 'right', 'bottom', 'left'], 'top');
    const type = select(
      `type:`,
      ['dark', 'light', 'error', 'info', 'success', 'warning'],
      'dark'
    );
    const event = select(`event:`, [`mouseenter`, `click`], `mouseenter`);
    const eventOff = select(`eventOff:`, [`mouseleave`, `click`], `mouseleave`);
    const children = text(`data-tip`, `Change me, please 🥺`);
    const tooltip = (
      <Tooltip
        id={`tooltip`}
        place={place}
        type={type}
        event={event}
        eventOff={eventOff}
      >
        {children}
      </Tooltip>
    );

    specs(() =>
      describe('Tooltip', () => {
        const wrapper = mount(tooltip);

        it(`Should have place: ${place}`, () => {
          expect(wrapper.prop('place')).toEqual(place);
        });

        it(`Should have type: ${type}`, () => {
          expect(wrapper.prop('type')).toEqual(type);
        });

        it(`Should have event: ${event}`, () => {
          expect(wrapper.prop('event')).toEqual(event);
        });

        it(`Should have eventOff: ${eventOff}`, () => {
          expect(wrapper.prop('eventOff')).toEqual(eventOff);
        });

        it(`Should have children: ${children}`, () => {
          expect(wrapper.prop('children')).toEqual(children);
        });
      })
    );
    const style = {
      margin: '0 auto',
      textAlign: 'center',
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
