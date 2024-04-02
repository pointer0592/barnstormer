import { BsProgressSize } from '@barnstormer/shared';
import type { PropsWithChildren } from 'react';
import type { PropsWithStyle } from '@barnstormer/react';

export { BsProgressSize };
export interface BsProgressCircularProps extends PropsWithStyle, PropsWithChildren {
  value?: number;
  size?: `${BsProgressSize}`;
  ariaLabel?: string;
}
