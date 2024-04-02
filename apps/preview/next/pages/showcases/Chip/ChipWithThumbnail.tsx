import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsChip, BsThumbnail } from '@barnstormer/react';

export default function ChipWithThumbnail() {
  return (
    <>
      <BsChip size="sm" className="mr-2" slotPrefix={<BsThumbnail className="bg-red-500" size="sm" />}>
        Red
      </BsChip>
      <BsChip slotPrefix={<BsThumbnail className="bg-secondary-400" size="base" />}>Blue</BsChip>
    </>
  );
}

// #endregion source

ChipWithThumbnail.getLayout = ShowcasePageLayout;
