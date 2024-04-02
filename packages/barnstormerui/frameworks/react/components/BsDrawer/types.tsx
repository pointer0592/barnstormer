import { BsDrawerPlacement } from '@barnstormer/shared';
import type { PropsWithChildren } from 'react';
import type { PropsWithStyle } from '@barnstormer/react';

export interface BsDrawerProps extends PropsWithStyle, PropsWithChildren {
  open: boolean;
  placement?: `${BsDrawerPlacement}`;
  disableClickAway?: boolean;
  disableEsc?: boolean;
  onClose?: () => void;
}
export { BsDrawerPlacement };
