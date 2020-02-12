import { shallow } from 'enzyme';
import React from 'react';
import { Transfer } from './Transfer';
import expect from 'expect';
import { defaultValues } from '../../../constants/defaultValues';
import { NotFound } from '../../NotFound';
import { Select } from '../Select';
import { Text } from '../../Typography/Text';
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
  size,
  isFullWidth,
  direction,
  onChange,
  onCancel,
  onSubmit
) => {
  return (
    <div
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
      onChange={onChange}
      onCancel={onCancel}
      onSubmit={onSubmit}
    >
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
        onChange={onChange}
        onCancel={onCancel}
        onSubmit={onSubmit}
      >
        <Option value={'value1'}>
          <Text>First</Text>
        </Option>
        <Option value={'value2'}>
          <Text>Second</Text>
        </Option>
        <Option value={'value3'}>
          <Text>Third</Text>
        </Option>
        <Option value={'value4'}>
          <Text>Čtvrtá</Text>
        </Option>
        <Option value={'value5'}>
          <Text>Pátá</Text>
        </Option>
        <Option value={'value6'}>
          <Text>Šestá</Text>
        </Option>
        <Option value={'value7'}>
          <Text>Sedmá</Text>
        </Option>
        <Option value={'value8'}>
          <Text>Osmá</Text>
        </Option>
        <Option value={'value9'}>
          <Text>
            Aasdsdadasdasdasdasdasdasdasdasdadasdasdadasdasdadasdasdadasdsdasdasdasdasdasdasdasdasdasdasd
          </Text>
        </Option>
      </Transfer>
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
        onChange={onChange}
        onCancel={onCancel}
        onSubmit={onSubmit}
      />
    </div>
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
