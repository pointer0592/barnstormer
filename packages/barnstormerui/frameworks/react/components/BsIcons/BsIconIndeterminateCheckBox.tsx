import type { BsIconProps } from '@barnstormer/react';
import { BsIconBase, BsIconSize } from '@barnstormer/react';

export default function BsIconIndeterminateCheckBox({
  size = BsIconSize.base,
  viewBox = '0 0 24 24',
  ...attributes
}: BsIconProps) {
  return (
    <BsIconBase size={size} viewBox={viewBox} data-testid="indeterminate-check-box" {...attributes}>
      <path
        fillRule="evenodd"
        d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm14 7a1 1 0 0 1-1 1H8a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1"
        clipRule="evenodd"
      />
    </BsIconBase>
  );
}
