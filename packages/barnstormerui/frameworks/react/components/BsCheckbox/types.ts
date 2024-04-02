import type { InputHTMLAttributes } from 'react';
import type { PropsWithStyle } from '@barnstormer/react';

export interface BsCheckboxProps extends PropsWithStyle, InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}
