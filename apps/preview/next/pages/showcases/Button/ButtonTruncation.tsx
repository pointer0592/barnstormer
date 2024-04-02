import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsButton } from '@barnstormer/react';

export default function ButtonTruncation() {
  return (
    <BsButton>
      <span className="truncate max-w-[200px]"> Too long description for button </span>
    </BsButton>
  );
}
// #endregion source
ButtonTruncation.getLayout = ShowcasePageLayout;
