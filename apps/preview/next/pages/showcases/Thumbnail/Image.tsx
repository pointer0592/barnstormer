import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsThumbnail } from '@barnstormer/react';

export default function ThumbnailImage() {
  return (
    <BsThumbnail size="xl">
      <img src="http://localhost:3100/@assets/card.png" alt="Thumbnail avatar" />
    </BsThumbnail>
  );
}

// #endregion source
ThumbnailImage.getLayout = ShowcasePageLayout;
