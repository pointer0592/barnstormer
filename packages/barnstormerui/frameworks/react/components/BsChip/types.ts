import type { InputHTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import type { PropsWithStyle } from '@barnstormer/react';
import { BsChipSize } from '@barnstormer/shared';

export { BsChipSize };
export interface BsChipProps extends PropsWithChildren, PropsWithStyle {
  size?: `${BsChipSize}`;
  square?: boolean;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  slotPrefix?: ReactNode;
  slotSuffix?: ReactNode;
}
