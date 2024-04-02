import type { TextareaHTMLAttributes } from 'react';
import type { PropsWithStyle } from '@barnstormer/react';
import { BsTextareaSize } from '@barnstormer/shared';

export { BsTextareaSize };
export interface BsTextareaProps extends PropsWithStyle, Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  size?: `${BsTextareaSize}`;
  invalid?: boolean;
}
