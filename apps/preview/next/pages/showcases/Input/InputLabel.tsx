/* eslint-disable jsx-a11y/label-has-associated-control */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsInput } from '@barnstormer/react';

export default function InputWithLabel() {
  return (
    <div className="flex flex-col gap-y-5">
      <label>
        <span className="text-sm font-medium">Label</span>
        <BsInput size="sm" />
      </label>
      <label>
        <span className="text-sm font-medium">Label</span>
        <BsInput />
      </label>
      <label>
        <span className="text-sm font-medium">Label</span>
        <BsInput size="lg" />
      </label>
    </div>
  );
}

// #endregion source
InputWithLabel.getLayout = ShowcasePageLayout;
