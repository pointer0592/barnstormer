import { type ReactNode } from 'react';
import { type PropsWithStyle } from '@barnstormer/react';
import { BsIconSize, BsRatingButtonSize } from '@barnstormer/shared';

export { BsRatingButtonSize };

export interface BsRatingButtonRenderProps {
  isFilled: boolean;
  max: number;
  iconSize: Extract<`${BsIconSize}`, 'base' | 'lg' | 'xl'>;
}

export interface BsRatingButtonProps extends PropsWithStyle {
  value?: number;
  onChange?: (value: number) => void;
  max?: number;
  name?: string;
  disabled?: boolean;
  className?: string;
  size?: `${BsRatingButtonSize}`;
  getLabelText?: (value: number) => string;
  children?: (state: BsRatingButtonRenderProps) => ReactNode;
}
