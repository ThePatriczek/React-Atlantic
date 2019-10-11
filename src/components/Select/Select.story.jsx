import { action } from '@storybook/addon-actions';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Select } from './Select';
import { Typography } from '../Typography';

const stories = storiesOf('Select', module);
const { Text } = Typography;
stories.addDecorator(withKnobs);

const { Option } = Select;

stories.add(
  'Playground',
  () => {
    const isMulti = boolean(`isMulti:`, false);
    const isDisabled = boolean(`isDisabled:`, false);
    const isFullWidth = boolean(`isFullWidth:`, false);
    const size = select(`size:`, ['small', `medium`, 'large'], 'medium');
    const placeholder = text(`placeholder:`, `Change me, please 🥺`);
    const defaultValue = select(
      `defaultValue:`,
      ['value 1', `value 2`, 'value 3'],
      'value 1'
    );
    const value = select(
      `value:`,
      ['value 1', `value 2`, 'value 3', ['value 1', 'value 2']],
      'value 2'
    );

    const component = (
      <Select
        size={size}
        isMulti={isMulti}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        isDisabled={isDisabled}
        isFullWidth={isFullWidth}
        onChange={action(`onChange`)}
      >
        <Option value={`value 1`}>
          <Text>{`Option 1`}</Text>
        </Option>
        <Option value={`value 2`}>
          <Text>{`Option 2`}</Text>
        </Option>
        <Option value={`value 3`}>
          <Text>{`Option 3`}</Text>
        </Option>
      </Select>
    );

    // specs(() =>
    //   describe('Checkbox', () => {
    //     const wrapper = mount(switcher);
    //
    //     it(`Should have type: ${type}`, () => {
    //       expect(wrapper.prop('type')).toEqual(type);
    //     });
    //
    //     it(`Should have textOn: ${textOn}`, () => {
    //       expect(wrapper.prop('textOn')).toEqual(textOn);
    //     });
    //
    //     it(`Should have textOff: ${textOff}`, () => {
    //       expect(wrapper.prop('textOff')).toEqual(textOff);
    //     });
    //
    //     it(`Should have isDefaultChecked: ${isDefaultChecked}`, () => {
    //       expect(wrapper.prop('isDefaultChecked')).toEqual(isDefaultChecked);
    //     });
    //
    //     it(`Should have isChecked: ${isChecked}`, () => {
    //       expect(wrapper.prop('isChecked')).toEqual(isChecked);
    //     });
    //
    //     it(`Should have isDisabled: ${isDisabled}`, () => {
    //       expect(wrapper.prop('isDisabled')).toEqual(isDisabled);
    //     });
    //
    //     it(`Should have size: ${size}`, () => {
    //       expect(wrapper.prop('size')).toEqual(size);
    //     });
    //   })
    // );

    return component;
  },
  {
    info: { inline: true }
  }
);
