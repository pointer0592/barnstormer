import type { BsIconProps } from '@barnstormer/react';
import { BsIconBase, BsIconSize } from '@barnstormer/react';

export default function BsIconRemove({ size = BsIconSize.base, viewBox = '0 0 24 24', ...attributes }: BsIconProps) {
  return (
    <BsIconBase size={size} viewBox={viewBox} data-testid="remove" {...attributes}>
      <path d="M6 13a.97.97 0 0 1-.713-.288A.97.97 0 0 1 5 12a.97.97 0 0 1 .287-.713A.97.97 0 0 1 6 11h12q.424 0 .712.287.288.288.288.713 0 .424-.288.712A.97.97 0 0 1 18 13z" />
    </BsIconBase>
  );
}
