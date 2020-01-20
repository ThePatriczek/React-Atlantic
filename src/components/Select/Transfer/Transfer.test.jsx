import { shallow } from 'enzyme';
import React from 'react';
import { Transfer } from './Transfer';
import expect from 'expect';
import { Select } from '../Select';
import { Text } from '../../Typography/Text';
import { defaultValues } from '../../../constants/defaultValues';
import { NotFound } from '../../NotFound';
const { Option } = Select;

const notFoundComponent = (
  <NotFound
    title={`Zadaný výraz nebyl nalezen...`}
  >{`Zadaný výraz nebyl nalezen...`}</NotFound>
);

export const Component = (
  placeholder,
  isDisabled,
  closeText,
  submitText,
  deleteAllText,
  options,
  size
) => {
  return (
    <Transfer
      placeholder={placeholder}
      isDisabled={isDisabled}
      closeText={closeText}
      submitText={submitText}
      deleteAllText={deleteAllText}
      options={options}
      notFoundComponent={notFoundComponent}
      chosenText={defaultValues.chosenText('Vybráno', 'z')}
      size={size}
    >
      <Option value={`fourth option`}>
        <Text>{`Fourth option`}</Text>
      </Option>
      <Option value={`fifth option`}>
        <Text>{`Fifth option`}</Text>
      </Option>
      <Option value={`sixth option`}>
        <Text>{`Sixth option`}</Text>
      </Option>
    </Transfer>
  );
};

export const tests = (
  transfer = Component(
    defaultValues.placeholder,
    defaultValues.isDisabled,
    defaultValues.closeText,
    defaultValues.submitText,
    defaultValues.deleteAllText,
    defaultValues.options,
    defaultValues.size
  )
) => {
  let output = shallow(transfer);

  return describe('Transfer', () => {
    it(`Should have placeholder: ${transfer.props.placeholder}`, () => {
      expect(output.props().placeholder).toEqual(transfer.props.placeholder);
    });

    it(`Should have isDisabled: ${transfer.props.isDisabled}`, () => {
      expect(output.props().isDisabled).toEqual(transfer.props.isDisabled);
    });

    it(`Should have closeText: ${transfer.props.closeText}`, () => {
      expect(output.props().closeText).toEqual(transfer.props.closeText);
    });

    it(`Should have submitText: ${transfer.props.submitText}`, () => {
      expect(output.props().submitText).toEqual(transfer.props.submitText);
    });

    it(`Should have deleteAllText: ${transfer.props.deleteAllText}`, () => {
      expect(output.props().deleteAllText).toEqual(
        transfer.props.deleteAllText
      );
    });

    it(`Should have options: ${transfer.props.options}`, () => {
      expect(output.props().options).toEqual(transfer.props.options);
    });

    it(`Should have size: ${transfer.props.size}`, () => {
      expect(output.props().size).toEqual(transfer.props.size);
    });
  });
};

tests();
