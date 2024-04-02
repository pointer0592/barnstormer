import type { PropsWithChildren, ReactNode } from 'react';
import type { UseDropdownOptions, PropsWithStyle } from '@barnstormer/react';

export interface BsDropdownProps extends Omit<UseDropdownOptions, 'isOpen'>, PropsWithStyle, PropsWithChildren {
  open?: boolean;
  trigger: ReactNode;
}
