import React, { FC, PropsWithChildren, ReactElement } from 'react';

export interface NodeProps {}

export const Node: FC<PropsWithChildren<NodeProps>> = (props): ReactElement => {
  const { children } = props;

  return <></>;
};

Node.displayName = `Node`;
