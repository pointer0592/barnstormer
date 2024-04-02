import { ShowcasePageLayout } from '../../showcases';
// #region source
import { useId, useState } from 'react';
import { BsIconFavorite, BsIconFavoriteFilled, BsRatingButton } from '@barnstormer/react';

export default function RatingButtonCustomIcon() {
  const labelId = useId();
  const [rating, setRating] = useState(0);

  return (
    <div>
      <p id={labelId}>Select Rating</p>
      <BsRatingButton value={rating} onChange={setRating} aria-labelledby={labelId}>
        {({ isFilled, iconSize }) =>
          isFilled ? (
            <BsIconFavoriteFilled
              role="none"
              size={iconSize}
              className="text-red-700 cursor-pointer peer-disabled:cursor-default peer-disabled:text-neutral-500 peer-focus-visible:outline"
            />
          ) : (
            <BsIconFavorite
              role="none"
              size={iconSize}
              className="text-neutral-500 cursor-pointer peer-disabled:cursor-default peer-disabled:text-neutral-400 peer-focus-visible:outline"
            />
          )
        }
      </BsRatingButton>
    </div>
  );
}

// #endregion source
RatingButtonCustomIcon.getLayout = ShowcasePageLayout;
