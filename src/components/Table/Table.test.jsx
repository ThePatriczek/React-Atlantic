import React from 'react';
import { shallow } from 'enzyme';
import { Table } from './Table';
import expect from 'expect';
import { defaultValues } from '../../constants/defaultValues';
import { Typography } from '../Typography';
const { Text } = Typography;
export const Component = (sortBy, order, onSort) => {
  return (
    <Table sortBy={sortBy} order={order} onSort={onSort}>
      <Table.Head>
        <Table.Row>
          <Table.Column name={defaultValues.sortBy}>
            <Text>{`Technology`}</Text>
          </Table.Column>
          <Table.Column>
            <Text>{`Awesomeness`}</Text>
          </Table.Column>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Column>
            <Text>{`React`}</Text>
          </Table.Column>
          <Table.Column>
            <Text>{`😍`}</Text>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Column>
            <Text>{`Typescript`}</Text>
          </Table.Column>
          <Table.Column>
            <Text>{`😎`}</Text>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Column>
            <Text>{`GraphQL`}</Text>
          </Table.Column>
          <Table.Column>
            <Text>{`💪`}</Text>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Column>
            <Text>{`Atlantic`}</Text>
          </Table.Column>
          <Table.Column>
            <Text>{`🤪`}</Text>
          </Table.Column>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export const tests = (
  table = Component(defaultValues.sortBy, defaultValues.order)
) => {
  let output = shallow(table);

  return describe(`Table`, () => {
    it(`Should have sortBy: ${table.props.sortBy}`, () => {
      expect(output.props().sortBy).toEqual(table.props.sortBy);
    });

    it(`Should have order: ${table.props.order}`, () => {
      expect(output.props().order).toEqual(table.props.order);
    });

    it(`Should have onSort: ${table.props.onSort}`, () => {
      expect(output.props().onSort).toEqual(table.props.onSort);
    });
  });
};

tests();
