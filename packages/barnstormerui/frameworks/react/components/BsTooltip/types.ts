import type { PropsWithChildren } from 'react';
import type { UseTooltipOptions, PropsWithStyle } from '@barnstormer/react';

export interface BsTooltipProps extends UseTooltipOptions, PropsWithChildren, PropsWithStyle {
  label: string;
  showArrow?: boolean;
}
