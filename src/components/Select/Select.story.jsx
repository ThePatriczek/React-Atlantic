import { withKnobs } from '@storybook/addon-knobs';
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
    const select = (<>
      <Select isSearchable>
        <Option value={`val1`}>
          <Text>{`Option 1`}</Text>
        </Option>
        <Option value={`val2`}>
          <Text>{`Option 2`}</Text>
        </Option>
        <Option value={`val3`}>
          <Text>{`Option 3`}</Text>
        </Option>
      </Select>
        <br/>
      <Select isDisabled>
        <Option value={`val1`}>
          <Text>{`Option 1`}</Text>
        </Option>
        <Option value={`val2`}>
          <Text>{`Option 2`}</Text>
        </Option>
        <Option value={`val3`}>
          <Text>{`Option 3`}</Text>
        </Option>
      </Select>
        <br/>
      <Select isFullWidth>
        <Option value={`val1`}>
          <Text>{`Option 1`}</Text>
        </Option>
        <Option value={`val2`}>
          <Text>{`Option 2`}</Text>
        </Option>
        <Option value={`val3`}>
          <Text>{`Option 3`}</Text>
        </Option>
      </Select>
        <br/>
        <Select size={`small`}>
          <Option value={`val1`}>
            <Text>{`Option 1`}</Text>
          </Option>
          <Option value={`val2`}>
            <Text>{`Option 2`}</Text>
          </Option>
          <Option value={`val3`}>
            <Text>{`Option 3`}</Text>
          </Option>
        </Select>
        <br/>
        <Select size={`large`}>
          <Option value={`val1`}>
            <Text>{`Option 1`}</Text>
          </Option>
          <Option value={`val2`}>
            <Text>{`Option 2`}</Text>
          </Option>
          <Option value={`val3`}>
            <Text>{`Option 3`}</Text>
          </Option>
        </Select>
        <br/>
        <Select size={`small`} isFullWidth>
          <Option value={`val1`}>
            <Text>{`Option 1`}</Text>
          </Option>
          <Option value={`val2`}>
            <Text>{`Option 2`}</Text>
          </Option>
          <Option value={`val3`}>
            <Text>{`Option 3`}</Text>
          </Option>
        </Select>
        <br/>
        <Select size={`large`} isFullWidth>
          <Option value={`val1`}>
            <Text>{`Option 1`}</Text>
          </Option>
          <Option value={`val2`}>
            <Text>{`Option 2`}</Text>
          </Option>
          <Option value={`val3`}>
            <Text>{`Option 3`}</Text>
          </Option>
        </Select>
        <br/>
        <Select isMulti>
        <Option value={`val1`}>
          <Text>{`Option 1`}</Text>
        </Option>
        <Option value={`val2`}>
          <Text>{`Option 2`}</Text>
        </Option>
        <Option value={`val3`}>
          <Text>{`Option 3`}</Text>
        </Option>
      </Select>
        <br/>
        <Select isMulti size={`small`}>
        <Option value={`val1`}>
          <Text>{`Option 1`}</Text>
        </Option>
        <Option value={`val2`}>
          <Text>{`Option 2`}</Text>
        </Option>
        <Option value={`val3`}>
          <Text>{`Option 3`}</Text>
        </Option>
      </Select>
        <br/>
        <Select isMulti size={`large`}>
        <Option value={`val1`}>
          <Text>{`Option 1`}</Text>
        </Option>
        <Option value={`val2`}>
          <Text>{`Option 2`}</Text>
        </Option>
        <Option value={`val3`}>
          <Text>{`Option 3`}</Text>
        </Option>
      </Select>
        <br/>
        <Select isMulti isFullWidth>
        <Option value={`val1`}>
          <Text>{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In enim a arcu imperdiet malesuada. Integer in sapien. Cras pede libero, dapibus nec, pretium sit amet, tempor quis.`}</Text>
        </Option>
        <Option value={`val2`}>
          <Text>{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In enim a arcu imperdiet malesuada. Integer in sapien. Cras pede libero, dapibus nec, pretium sit amet, tempor quis.`}</Text>
        </Option>
        <Option value={`val3`}>
          <Text>{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In enim a arcu imperdiet malesuada. Integer in sapien. Cras pede libero, dapibus nec, pretium sit amet, tempor quis.`}</Text>
        </Option>
        <Option value={`val4`}>
          <Text>{`Option 2`}</Text>
        </Option>
        <Option value={`val5`}>
          <Text>{`Option 3`}</Text>
        </Option>
        <Option value={`val6`}>
          <Text>{`Option 4`}</Text>
        </Option>
        <Option value={`val7`}>
          <Text>{`Option 5`}</Text>
        </Option>
        <Option value={`val8`}>
          <Text>{`Option 6`}</Text>
        </Option>
      </Select>
        <br/>
        <Select isMulti isFullWidth size={`small`}>
        <Option value={`val1`}>
          <Text>{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In enim a arcu imperdiet malesuada. Integer in sapien. Cras pede libero, dapibus nec, pretium sit amet, tempor quis.`}</Text>
        </Option>
        <Option value={`val2`}>
          <Text>{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In enim a arcu imperdiet malesuada. Integer in sapien. Cras pede libero, dapibus nec, pretium sit amet, tempor quis.`}</Text>
        </Option>
        <Option value={`val3`}>
          <Text>{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In enim a arcu imperdiet malesuada. Integer in sapien. Cras pede libero, dapibus nec, pretium sit amet, tempor quis.`}</Text>
        </Option>
        <Option value={`val4`}>
          <Text>{`Option 2`}</Text>
        </Option>
        <Option value={`val5`}>
          <Text>{`Option 3`}</Text>
        </Option>
        <Option value={`val6`}>
          <Text>{`Option 4`}</Text>
        </Option>
        <Option value={`val7`}>
          <Text>{`Option 5`}</Text>
        </Option>
        <Option value={`val8`}>
          <Text>{`Option 6`}</Text>
        </Option>
      </Select>
        <br/>
        <Select isMulti isFullWidth size={`large`}>
        <Option value={`val1`}>
          <Text>{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In enim a arcu imperdiet malesuada. Integer in sapien. Cras pede libero, dapibus nec, pretium sit amet, tempor quis.`}</Text>
        </Option>
        <Option value={`val2`}>
          <Text>{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In enim a arcu imperdiet malesuada. Integer in sapien. Cras pede libero, dapibus nec, pretium sit amet, tempor quis.`}</Text>
        </Option>
        <Option value={`val3`}>
          <Text>{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In enim a arcu imperdiet malesuada. Integer in sapien. Cras pede libero, dapibus nec, pretium sit amet, tempor quis.`}</Text>
        </Option>
        <Option value={`val4`}>
          <Text>{`Option 2`}</Text>
        </Option>
        <Option value={`val5`}>
          <Text>{`Option 3`}</Text>
        </Option>
        <Option value={`val6`}>
          <Text>{`Option 4`}</Text>
        </Option>
        <Option value={`val7`}>
          <Text>{`Option 5`}</Text>
        </Option>
        <Option value={`val8`}>
          <Text>{`Option 6`}</Text>
        </Option>
      </Select></>
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

    return select;
  },
  {
    info: { inline: true }
  }
);
