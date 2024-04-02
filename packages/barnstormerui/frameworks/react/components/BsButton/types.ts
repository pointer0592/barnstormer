import type { ReactNode, PropsWithChildren } from 'react';
import type { PropsWithStyle } from '@barnstormer/react';
import { BsButtonSize, BsButtonVariant } from '@barnstormer/shared';

export { BsButtonSize, BsButtonVariant };

export interface BsButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    PropsWithStyle,
    PropsWithChildren {
  slotPrefix?: ReactNode;
  slotSuffix?: ReactNode;
  size?: `${BsButtonSize}`;
  variant?: `${BsButtonVariant}`;
  square?: boolean;
}
