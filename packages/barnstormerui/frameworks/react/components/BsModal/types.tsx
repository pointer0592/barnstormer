import { BsDrawerPlacement } from '@barnstormer/shared';
import type { PropsWithChildren } from 'react';
import type { PropsWithStyle } from '@barnstormer/react';

export interface BsModalProps extends PropsWithStyle, PropsWithChildren {
  open?: boolean;
  disableClickAway?: boolean;
  disableEsc?: boolean;
  onClose?: () => void;
}
export { BsDrawerPlacement };
