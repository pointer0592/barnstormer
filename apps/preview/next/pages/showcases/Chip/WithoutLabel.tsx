import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsChip, BsThumbnail } from '@barnstormer/react';

export default function SquareChips() {
  return (
    <>
      <BsChip size="sm" className="mr-2" square>
        <BsThumbnail className="bg-red-500" size="sm" aria-label="Red thumbnail chip" />
      </BsChip>
      <BsChip square>
        <BsThumbnail className="bg-blue-500" size="base" aria-label="Blue thumbnail chip" />
      </BsChip>
    </>
  );
}

// #endregion source
SquareChips.getLayout = ShowcasePageLayout;
