import type { PropsWithStyle } from '@barnstormer/react';
import { BsRatingSize } from '@barnstormer/shared';

export { BsRatingSize };
export interface BsRatingProps extends PropsWithStyle {
  value?: number;
  max?: number;
  size?: `${BsRatingSize}`;
  halfIncrement?: boolean;
  ariaLabel?: string;
}
