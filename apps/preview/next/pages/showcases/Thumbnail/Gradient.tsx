import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsThumbnail } from '@barnstormer/react';

export default function ThumbnailGradient() {
  return <BsThumbnail className="bg-gradient-to-tr from-[#4ADE80] to-[#A78BFA]" />;
}

// #endregion source
ThumbnailGradient.getLayout = ShowcasePageLayout;
