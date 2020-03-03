import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useComposition } from './useComposition';

describe('useComposition()', () => {
  test('getFilteredChildren()', () => {
    const { result } = renderHook(() => useComposition());

    const ExpectedChild = () => <span/>;
    ExpectedChild.displayName = `ExpectedChild`;

    const children = [<div/>, <ExpectedChild/>];

    const filtered = result.current.getFilteredChildren(
        children,
        ExpectedChild.displayName,
    );

    expect(filtered).toStrictEqual([<ExpectedChild/>]);
  });
});
