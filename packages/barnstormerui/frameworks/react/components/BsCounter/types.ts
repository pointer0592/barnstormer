import type { PropsWithChildren } from 'react';
import type { PropsWithStyle } from '@barnstormer/react';
import { BsCounterSize } from '@barnstormer/shared';

export { BsCounterSize };
export interface BsCounterProps extends PropsWithChildren, PropsWithStyle {
  size?: `${BsCounterSize}`;
  pill?: boolean;
}
