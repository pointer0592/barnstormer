import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsChip } from '@barnstormer/react';

export default function ChipSizes() {
  return (
    <div>
      <BsChip size="sm" className="mr-2">
        Small
      </BsChip>
      <BsChip size="base" className="mr-2">
        Base
      </BsChip>
      <BsChip>Default</BsChip>
    </div>
  );
}

// #endregion source
ChipSizes.getLayout = ShowcasePageLayout;
