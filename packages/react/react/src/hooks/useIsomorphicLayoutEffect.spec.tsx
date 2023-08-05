import { isClient } from '@toss/utils';
import { useEffect, useLayoutEffect } from 'react';

const deleteWindow = () => {
  Object.defineProperty(global, 'window', {
    value: undefined,
  });
};

describe('useIsomorphicLayoutEffect', () => {
  const useIsomorphicLayoutEffect = isClient() ? useLayoutEffect : useEffect;

  it('1', async () => {
    expect(useIsomorphicLayoutEffect).toEqual(useLayoutEffect);
  });
});

describe('useIsomorphicLayoutEffect', () => {
  deleteWindow();
  const useIsomorphicLayoutEffect = isClient() ? useLayoutEffect : useEffect;

  it('1', async () => {
    expect(useIsomorphicLayoutEffect).toEqual(useEffect);
  });
});
