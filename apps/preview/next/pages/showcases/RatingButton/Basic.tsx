import { ShowcasePageLayout } from '../../showcases';
// #region source
import { useId, useState } from 'react';
import { BsRatingButton } from '@barnstormer/react';

export default function RatingButtonBasic() {
  const labelId = useId();
  const [rating, setRating] = useState(0);

  return (
    <div>
      <p id={labelId}>Select Rating</p>
      <BsRatingButton value={rating} onChange={setRating} aria-labelledby={labelId} />
    </div>
  );
}

// #endregion source
RatingButtonBasic.getLayout = ShowcasePageLayout;
