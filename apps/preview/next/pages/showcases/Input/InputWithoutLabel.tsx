/* eslint-disable jsx-a11y/label-has-associated-control */

import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsInput } from '@barnstormer/react';

export default function InputWithLabel() {
  return (
    <div className="flex flex-col gap-y-5">
      <BsInput size="sm" aria-label="Label size sm" />
      <BsInput aria-label="Label size base" />
      <BsInput size="lg" aria-label="Label size lg" />
    </div>
  );
}

// #endregion source
InputWithLabel.getLayout = ShowcasePageLayout;
