import { TransferItem } from './Transfer';

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
