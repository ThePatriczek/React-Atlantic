import { storiesOf as storiesOfReal } from '@storybook/react';
import {
  specs as specsReal,
  describe as describeReal,
  it as itReal
} from 'storybook-addon-specifications';

export const storiesOf = storiesOfReal;
export const specs = specsReal;
export const describe = describeReal;
export const it = itReal;

export const beforeEach = beforeEachReal;
export const afterEach = afterEachReal;
export const before = beforeReal;
export const after = afterReal;

export const xit = xitReal;
export const fit = fitReal;
export const xdescribe = xdescribeReal;
