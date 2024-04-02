import { BsLoaderSize } from '@barnstormer/shared';
import type { PropsWithStyle } from '@barnstormer/react';

export { BsLoaderSize };
export interface BsLoaderCircularProps extends PropsWithStyle {
  size?: `${BsLoaderSize}`;
  ariaLabel?: string;
}
