import type { PropsWithStyle } from '@barnstormer/react';

export interface BsSwitchProps extends PropsWithStyle, React.InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}
