import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsRating } from '@barnstormer/react';

export default function RatingValues() {
  return (
    <div className="flex flex-col">
      <BsRating value={0} />
      <BsRating value={3.5} />
      <BsRating value={3.5} halfIncrement />
      <BsRating value={6} max={8} />
    </div>
  );
}

// #endregion source
RatingValues.getLayout = ShowcasePageLayout;
