import { BsProgressSize } from '@barnstormer/shared';
import type { PropsWithStyle } from '@barnstormer/react';

export enum BsProgressLinearSize {
  'minimal' = 'minimal',
}
export { BsProgressSize };
export interface BsProgressLinearProps extends PropsWithStyle {
  value?: number;
  size?: `${BsProgressLinearSize | BsProgressSize}`;
  ariaLabel?: string;
}
