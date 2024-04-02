import type { InputHTMLAttributes, ReactNode, ElementType } from 'react';
import type { PropsWithStyle } from '@barnstormer/react';
import { BsInputSize } from '@barnstormer/shared';

export { BsInputSize };
export interface BsInputProps extends PropsWithStyle, Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: `${BsInputSize}`;
  invalid?: boolean;
  slotPrefix?: ReactNode;
  slotSuffix?: ReactNode;
  wrapperClassName?: string;
  wrapperAs?: ElementType<any> | undefined;
}
