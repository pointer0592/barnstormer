import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsTooltip } from '@barnstormer/react';

export default function BasicTooltip() {
  return (
    <BsTooltip label="This is a tooltip!">
      <span>Hover me!</span>
    </BsTooltip>
  );
}

// #endregion source
BasicTooltip.getLayout = ShowcasePageLayout;
