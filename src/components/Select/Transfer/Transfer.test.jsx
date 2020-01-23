import { shallow } from 'enzyme';
import React from 'react';
import { Transfer } from './Transfer';
import expect from 'expect';
import { defaultValues } from '../../../constants/defaultValues';
import { NotFound } from '../../NotFound';

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
  size,
  isFullWidth,
  direction
) => {
  return (
    <Transfer
      direction={direction}
      placeholder={placeholder}
      isDisabled={isDisabled}
      closeText={closeText}
      submitText={submitText}
      deleteAllText={deleteAllText}
      options={options}
      notFoundComponent={notFoundComponent}
      size={size}
      isFullWidth={isFullWidth}
    />
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
    defaultValues.size,
    defaultValues.isFullWidth,
    defaultValues.direction
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

    it(`Should have isFullWidth: ${transfer.props.isFullWidth}`, () => {
      expect(output.props().isFullWidth).toEqual(transfer.props.isFullWidth);
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

    it(`Should have direction: ${transfer.props.direction}`, () => {
      expect(output.props().direction).toEqual(transfer.props.direction);
    });
  });
};

tests();
