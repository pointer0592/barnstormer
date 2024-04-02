import type { PropsWithStyle } from '@barnstormer/react';

export interface BsRadioProps extends React.InputHTMLAttributes<HTMLInputElement>, PropsWithStyle {
  invalid?: boolean;
}
