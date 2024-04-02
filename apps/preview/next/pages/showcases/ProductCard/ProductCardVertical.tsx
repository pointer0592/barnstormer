import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsButton, BsRating, BsCounter, BsLink, BsIconShoppingCart, BsIconFavorite } from '@barnstormer/react';

export default function ProductCardVertical() {
  return (
    <div className="border border-neutral-200 rounded-md hover:shadow-lg max-w-[300px]">
      <div className="relative">
        <BsLink href="#" className="block">
          <img
            src="http://localhost:3100/@assets/sneakers.png"
            alt="Great product"
            className="object-cover h-auto rounded-md aspect-square"
            width="300"
            height="300"
          />
        </BsLink>
        <BsButton
          variant="tertiary"
          size="sm"
          square
          className="absolute bottom-0 right-0 mr-2 mb-2 bg-white ring-1 ring-inset ring-neutral-200 !rounded-full"
          aria-label="Add to wishlist"
        >
          <BsIconFavorite size="sm" />
        </BsButton>
      </div>
      <div className="p-4 border-t border-neutral-200">
        <BsLink href="#" variant="secondary" className="no-underline">
          Athletic mens walking sneakers
        </BsLink>
        <div className="flex items-center pt-1">
          <BsRating size="xs" value={5} max={5} />

          <BsLink href="#" variant="secondary" className="pl-1 no-underline">
            <BsCounter size="xs">{123}</BsCounter>
          </BsLink>
        </div>
        <p className="block py-2 font-normal typography-text-sm text-neutral-700">
          Lightweight • Non slip • Flexible outsole • Easy to wear on and off
        </p>
        <span className="block pb-2 font-bold typography-text-lg">$2345,99</span>
        <BsButton size="sm" slotPrefix={<BsIconShoppingCart size="sm" />}>
          Add to cart
        </BsButton>
      </div>
    </div>
  );
}

// #endregion source
ProductCardVertical.getLayout = ShowcasePageLayout;
