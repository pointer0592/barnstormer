import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsLink } from '@barnstormer/react';

export default function CustomLink() {
  return (
    <div className="space-x-4">
      <BsLink href="#" className="text-sm">
        Small
      </BsLink>
      <BsLink href="#" variant="secondary" className="text-negative-700">
        To delete page
      </BsLink>
    </div>
  );
}

// #endregion source
CustomLink.getLayout = ShowcasePageLayout;
