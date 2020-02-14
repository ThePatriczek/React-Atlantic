import { shallow } from 'enzyme';
import React from 'react';
import expect from 'expect';
import { defaultValues } from '../../constants/defaultValues';
import { Tooltip } from './Tooltip';

export const Component = (place, type, event, eventOff, children) => {
  return (
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
};

let output;

export const tests = (
  tooltip = Component(
    defaultValues.place,
    defaultValues.type,
    defaultValues.event,
    defaultValues.eventOff,
    defaultValues.children
  )
) => {
  output = shallow(tooltip);

  return describe('Tooltip', () => {
    const output = shallow(tooltip);

    it(`Should have place: ${tooltip.props.place}`, () => {
      expect(output.props().place).toEqual(tooltip.props.place);
    });

    it(`Should have type: ${tooltip.props.type}`, () => {
      expect(output.props().type).toEqual(tooltip.props.type);
    });

    it(`Should have event: ${tooltip.props.event}`, () => {
      expect(output.props().event).toEqual(tooltip.props.event);
    });

    it(`Should have eventOff: ${tooltip.props.eventOff}`, () => {
      expect(output.props().eventOff).toEqual(tooltip.props.eventOff);
    });

    it(`Should have children: ${tooltip.props.children}`, () => {
      expect(output.props().children).toEqual(tooltip.props.children);
    });
  });
};

tests();
