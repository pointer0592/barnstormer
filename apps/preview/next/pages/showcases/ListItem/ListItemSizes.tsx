import { ShowcasePageLayout } from '../../showcases';
// #region sources
import { BsListItem } from '@barnstormer/react';

export default function ListItemSizes() {
  return (
    <div className="flex flex-col max-w-sm gap-4">
      <BsListItem size="sm">
        <span className="break-words">Label</span>
      </BsListItem>
      <BsListItem>
        <span className="break-words">Label</span>
      </BsListItem>
      <BsListItem size="lg">
        <span className="break-words">Label</span>
      </BsListItem>
    </div>
  );
}

// #endregion source
ListItemSizes.getLayout = ShowcasePageLayout;
