import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsButton } from '@barnstormer/react';

export default function ButtonVariants() {
  return (
    <div className="flex flex-col items-center space-y-4 xs:block xs:space-x-4">
      <BsButton variant="primary">Hello</BsButton>

      <BsButton variant="secondary">Hello</BsButton>

      <BsButton variant="tertiary">Hello</BsButton>
    </div>
  );
}

// #endregion source
ButtonVariants.getLayout = ShowcasePageLayout;
