import type { PropsWithChildren, SVGProps } from 'react';
import { BsIconSize } from '@barnstormer/shared';
import type { PropsWithStyle } from '@barnstormer/react';

export interface BsIconBaseProps extends SVGProps<SVGSVGElement>, PropsWithStyle, PropsWithChildren {
  size?: `${BsIconSize}`;
}

export { BsIconSize };
