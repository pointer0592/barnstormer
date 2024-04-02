import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsListItem } from '@barnstormer/react';

export default function ListItemTruncated() {
  return (
    <BsListItem className="max-w-sm">
      <div className="break-words">Label</div>
      <span className="text-xs text-neutral-500 break-words truncate">
        This text is definitely too long to be displayed in one line in this component
      </span>
    </BsListItem>
  );
}

// #endregion source
ListItemTruncated.getLayout = ShowcasePageLayout;
