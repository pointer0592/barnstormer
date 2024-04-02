import { BsLoaderSize } from '@barnstormer/shared';
import type { PropsWithStyle } from '@barnstormer/react';

export enum BsLoaderLinearSize {
  minimal = 'minimal',
}
export { BsLoaderSize };
export interface BsLoaderLinearProps extends PropsWithStyle {
  size?: `${BsLoaderSize | BsLoaderLinearSize}`;
  ariaLabel?: string;
}
