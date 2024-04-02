import type { PropsWithChildren } from 'react';
import type { PropsWithStyle } from '@barnstormer/react';
import { BsThumbnailSize } from '@barnstormer/shared';

export { BsThumbnailSize };
export interface BsThumbnailProps extends PropsWithChildren, PropsWithStyle {
  size?: `${BsThumbnailSize}`;
}
