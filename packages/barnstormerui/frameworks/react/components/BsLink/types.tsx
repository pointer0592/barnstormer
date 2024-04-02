import type { PropsWithChildren } from 'react';
import type { PropsWithStyle } from '@barnstormer/react';
import { BsLinkVariant } from '@barnstormer/shared';

export { BsLinkVariant };
export interface BsLinkProps extends PropsWithChildren, PropsWithStyle {
  variant?: `${BsLinkVariant}`;
}
