import { TransferItem } from './Transfer';
import { StyledTransferLi } from './Transfer.style';
import React from 'react';

export const getMergedItems: (
  items: ReadonlyArray<TransferItem>,
  checkedItems: ReadonlyArray<TransferItem>
) => TransferItem[] = (items, checkedItems) => {
  const map: Map<string, TransferItem> = new Map();
  const arr: TransferItem[] = [];

  items.forEach(item => {
    if (!map.has(item.value)) {
      map.set(item.value, { ...item, isChecked: false });
    }
  });

  checkedItems.forEach(item =>
    map.set(item.value, { ...item, isChecked: true })
  );

  map.forEach(item => arr.push(item));

  return arr;
};

export const distinguishTypeOfLabel = (item: TransferItem) => {
  if (item.label && typeof item.label === 'string') {
    return item.label;
  } else if (
    item.label &&
    typeof item.label === 'object' &&
    'props' in item.label
  ) {
    return item.label?.props.children;
  } else {
    return null;
  }
};

export const transferItemsRender = (
  item: TransferItem,
  isCheckbox?: boolean
) => {
  if (typeof item.label === 'string' && !isCheckbox) {
    return <span>{item.label}</span>;
  } else if (typeof item.label === 'string' && isCheckbox) {
    return <>{item.label}</>;
  } else if (
    item.label &&
    typeof item.label === 'object' &&
    'props' in item.label &&
    !isCheckbox
  ) {
    return <span>{item.label?.props.children}</span>;
  } else if (
    item.label &&
    typeof item.label === 'object' &&
    'props' in item.label &&
    isCheckbox
  ) {
    return <>{item.label?.props.children}</>;
  } else {
    return null;
  }
};
