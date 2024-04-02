import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsListItem, BsCounter, BsIconChevronRight, BsIconTune } from '@barnstormer/react';

export default function ListItemSlots() {
  return (
    <BsListItem className="max-w-sm" slotPrefix={<BsIconTune />} slotSuffix={<BsIconChevronRight />}>
      <div className="break-words">
        Label
        <BsCounter className="ml-2">123</BsCounter>
      </div>
      <span className="text-xs break-words text-neutral-500">Secondary text</span>
    </BsListItem>
  );
}

// #endregion source
ListItemSlots.getLayout = ShowcasePageLayout;
