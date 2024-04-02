import type { PropsWithChildren, ReactElement } from 'react';
import type { UseScrollableOptions, PropsWithStyle } from '@barnstormer/react';
import { BsScrollableButtonsPlacement } from '@barnstormer/react';

export interface BsScrollableProps extends UseScrollableOptions, PropsWithChildren, PropsWithStyle {
  wrapperClassName?: string;
  slotPreviousButton?: ReactElement;
  slotNextButton?: ReactElement;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
  buttonPrevAriaLabel?: string;
  buttonNextAriaLabel?: string;
  buttonsPlacement?: `${BsScrollableButtonsPlacement}`;
}
