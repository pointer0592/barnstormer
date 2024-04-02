import type { PropsWithChildren, ReactNode } from 'react';
import { BsSelectSize } from '@barnstormer/shared';

export { BsSelectSize };
export interface BsSelectProps extends PropsWithChildren, Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  size?: `${BsSelectSize}`;
  invalid?: boolean;
  wrapperClassName?: string;
  slotChevron?: ReactNode;
  placeholder?: string;
}
