import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsLink } from '@barnstormer/react';

export default function LinkVariants() {
  return (
    <div className="space-x-4">
      <BsLink variant="primary" href="#">
        Primary
      </BsLink>
      <BsLink variant="secondary" href="#">
        Secondary
      </BsLink>
    </div>
  );
}

// #endregion source
LinkVariants.getLayout = ShowcasePageLayout;
