import type { BsIconProps } from '@barnstormer/react';
import { BsIconBase, BsIconSize } from '@barnstormer/react';

export default function BsIconVuejs({ size = BsIconSize.base, viewBox = '0 0 24 24', ...attributes }: BsIconProps) {
  return (
    <BsIconBase size={size} viewBox={viewBox} data-testid="vuejs" {...attributes}>
      <path d="M18.526 2.3H14.75L12 6.65 9.643 2.3H1l11 18.843L23 2.3zM3.736 3.871h2.641L12 13.605l5.618-9.734h2.642L12 18.024z" />
    </BsIconBase>
  );
}
