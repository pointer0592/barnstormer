import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsRating } from '@barnstormer/react';

export default function RatingSizes() {
  return (
    <div className="flex flex-col">
      <BsRating value={4} size="xs" />
      <BsRating value={4} size="sm" />
      <BsRating value={4} size="base" />
      <BsRating value={4} />
      <BsRating value={4} size="lg" />
      <BsRating value={4} size="xl" />
    </div>
  );
}

// #endregion source
RatingSizes.getLayout = ShowcasePageLayout;
