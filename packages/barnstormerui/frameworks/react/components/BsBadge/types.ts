import { BsBadgePlacement, BsBadgeVariant } from '@barnstormer/shared';
import type { PropsWithStyle } from '@barnstormer/react';

export { BsBadgePlacement, BsBadgeVariant };

export interface BsBadgeProps extends PropsWithStyle {
  content?: string | number;
  max?: number;
  placement?: `${BsBadgePlacement}`;
  variant?: `${BsBadgeVariant}`;
}
