import { shallow } from 'enzyme';
import React from 'react';
import { Popconfirm } from './Popconfirm';
import { defaultValues } from '../../constants/defaultValues';
import expect from 'expect';
import { Text } from '../../../lib/components/Typography/Text';
import { Icon } from '../../../lib/components/Icon';

export const Component = (
  children = <Icon name={'trash'} />,
  position,
  content
) => {
  return (
    <div style={{ display: `flex`, justifyContent: `center` }}>
      <Popconfirm
        position={position}
        onConfirm={() => console.log(`Potvrzeno`)}
        content={content}
      >
        {children}
      </Popconfirm>
    </div>
  );
};

export const tests = (
  popconfirm = Component(defaultValues.type, undefined)
) => {
  let output = shallow(popconfirm);

  return describe('Badge', () => {
    it(`Should have type: ${popconfirm.props.type}`, () => {
      expect(output.props().type).toEqual(popconfirm.props.type);
    });
  });
};

tests();
