/* eslint-disable jsx-a11y/label-has-associated-control */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsInput, BsIconPerson, BsIconLockOpen } from '@barnstormer/react';

export default function InputWithPrefix() {
  return (
    <label>
      <span className="text-sm font-medium">Label</span>
      <BsInput slotPrefix={<BsIconPerson />} slotSuffix={<BsIconLockOpen />} />
    </label>
  );
}

// #endregion source
InputWithPrefix.getLayout = ShowcasePageLayout;
