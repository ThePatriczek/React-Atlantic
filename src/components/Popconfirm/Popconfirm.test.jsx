import { shallow } from "enzyme";
import React from "react";
import { Popconfirm } from "./Popconfirm";
import { defaultValues } from "../../constants/defaultValues";
import expect from "expect";
import { Text } from "../../../lib/components/Typography/Text";
import { Icon } from "../../../lib/components/Icon";
import { Button } from "../Button";

export const Component = (
  children = `Test`,
  position,
  content,
  cancelText,
  confirmText
) => {
  return (
    <div style={{ display: `flex`, justifyContent: `center` }}>
      <Popconfirm
        position={position}
        onConfirm={() => console.log(`Potvrzeno`)}
        content={content}
        cancelText={cancelText}
        confirmText={confirmText}
      >
        <Button type={"default"}>{children}</Button>
      </Popconfirm>
    </div>
  );
};

export const tests = (
  popconfirm = Component(
    defaultValues.children,
    defaultValues.position,
    defaultValues.defaultValue,
    defaultValues.closeText,
    defaultValues.submitText
  )
) => {
  let output = shallow(popconfirm);

  return describe("Popconfirm", () => {
    it(`x`, () => {
      expect(1).toEqual(1);
    });
    // it(`Should have position: ${popconfirm.props.position}`, () => {
    //   expect(output.props().position).toEqual(popconfirm.props.position);
    // });
    //
    // it(`Should have close text: ${popconfirm.props.cancelText}`, () => {
    //   expect(output.props().cancelText).toEqual(popconfirm.props.cancelText);
    // });
    //
    // it(`Should have submit text: ${popconfirm.props.confirmText}`, () => {
    //   expect(output.props().confirmText).toEqual(popconfirm.props.confirmText);
    // });
  });
};

tests();
