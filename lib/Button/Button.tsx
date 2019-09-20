import * as React from "react";

interface ButtonProps {
  text: string;
}

export const Button: React.FC<ButtonProps> = (
  props: ButtonProps
): React.ReactElement => {
  const { text } = props;

  return <button>{text}</button>;
};
