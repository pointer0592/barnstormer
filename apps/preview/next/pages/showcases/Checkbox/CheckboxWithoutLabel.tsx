import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsCheckbox } from '@barnstormer/react';

export default function CheckboxDemo() {
  return (
    <div className="space-x-4">
      <BsCheckbox value="value" />
    </div>
  );
}

// #endregion source
CheckboxDemo.getLayout = ShowcasePageLayout;
