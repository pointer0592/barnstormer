import type { ReactNode, PropsWithChildren, ElementType } from 'react';
import type { PropsWithStyle } from '@barnstormer/react';
import { BsListItemSize } from '@barnstormer/shared';

export { BsListItemSize };
export interface BsListItemProps extends PropsWithChildren, PropsWithStyle {
  size?: `${BsListItemSize}`;
  disabled?: boolean;
  selected?: boolean;
  slotSuffix?: ReactNode;
  slotPrefix?: ReactNode;
  role?: string;
  childrenTag?: ElementType;
}
