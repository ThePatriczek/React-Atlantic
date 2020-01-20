import { shallow } from 'enzyme';
import React from 'react';
import { Transfer } from './Transfer';
import expect from 'expect';
import { Select } from '../Select';
import { Text } from '../../Typography/Text';
import { defaultValues } from '../../../constants/defaultValues';
const { Option } = Select;

export const Component = (
  placeholder,
  isDisabled,
  closeButton,
  submitButton,
  deleteAllButton,
  options,
  notFoundMessage
) => {
  return (
    <Transfer
      placeholder={placeholder}
      isDisabled={isDisabled}
      closeButton={closeButton}
      submitButton={submitButton}
      deleteAllButton={deleteAllButton}
      options={options}
      notFoundMessage={notFoundMessage}
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
    defaultValues.closeButton,
    defaultValues.submitButton,
    defaultValues.deleteAllButton,
    defaultValues.options
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

    it(`Should have closeButton: ${transfer.props.closeButton}`, () => {
      expect(output.props().closeButton).toEqual(transfer.props.closeButton);
    });

    it(`Should have submitButton: ${transfer.props.submitButton}`, () => {
      expect(output.props().submitButton).toEqual(transfer.props.submitButton);
    });

    it(`Should have deleteAllButton: ${transfer.props.deleteAllButton}`, () => {
      expect(output.props().deleteAllButton).toEqual(
        transfer.props.deleteAllButton
      );
    });

    it(`Should have options: ${transfer.props.options}`, () => {
      expect(output.props().options).toEqual(transfer.props.options);
    });

    it(`Should have notFoundMessage: ${transfer.props.notFoundMessage}`, () => {
      expect(output.props().notFoundMessage).toEqual(
        transfer.props.notFoundMessage
      );
    });
  });
};

tests();
