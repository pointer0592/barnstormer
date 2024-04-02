import { ShowcasePageLayout } from '../../showcases';
// #region source
import {
  BsRating,
  BsButton,
  BsLink,
  BsCounter,
  BsIconShoppingCart,
  BsIconCompareArrows,
  BsIconFavorite,
  BsIconSell,
  BsIconPackage,
  BsIconRemove,
  BsIconAdd,
  BsIconWarehouse,
  BsIconSafetyCheck,
  BsIconShoppingCartCheckout,
} from '@barnstormer/react';
import { useCounter } from 'react-use';
import { useId, ChangeEvent } from 'react';
import { clamp } from '@barnstormer/shared';

export default function ProductDetails() {
  const inputId = useId();
  const min = 1;
  const max = 999;
  const [value, { inc, dec, set }] = useCounter(min);
  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    const { value: currentValue } = event.target;
    const nextValue = parseFloat(currentValue);
    set(Number(clamp(nextValue, min, max)));
  }
  return (
    <section className="md:max-w-[640px]">
      <div className="inline-flex items-center justify-center text-sm font-medium text-white bg-secondary-600 py-1.5 px-3 mb-4">
        <BsIconSell size="sm" className="mr-1.5" />
        Sale
      </div>
      <h1 className="mb-1 font-bold typography-headline-4">
        Mini Foldable Drone with HD Camera FPV Wifi RC Quadcopter
      </h1>
      <strong className="block font-bold typography-headline-3">$2,345.99</strong>
      <div className="inline-flex items-center mt-4 mb-2">
        <BsRating size="xs" value={3} max={5} />
        <BsCounter className="ml-1" size="xs">
          123
        </BsCounter>
        <BsLink href="#" variant="secondary" className="ml-2 text-xs text-neutral-500">
          123 reviews
        </BsLink>
      </div>
      <ul className="mb-4 font-normal typography-text-sm">
        <li>HD Pictures & Videos and FPV Function</li>
        <li>Intelligent Voice Control</li>
        <li>Multiple Fun Flights</li>
        <li>Easy to Use</li>
        <li>Foldable Design & Double Flight Time</li>
      </ul>
      <div className="py-4 mb-4 border-gray-200 border-y">
        <div className="bg-primary-100 text-primary-700 flex justify-center gap-1.5 py-1.5 typography-text-sm items-center mb-4 rounded-md">
          <BsIconShoppingCartCheckout />1 in cart
        </div>
        <div className="items-start xs:flex">
          <div className="flex flex-col items-stretch xs:items-center xs:inline-flex">
            <div className="flex border border-neutral-300 rounded-md">
              <BsButton
                variant="tertiary"
                square
                className="rounded-r-none p-3"
                disabled={value <= min}
                aria-controls={inputId}
                aria-label="Decrease value"
                onClick={() => dec()}
              >
                <BsIconRemove />
              </BsButton>
              <input
                id={inputId}
                type="number"
                role="spinbutton"
                className="grow appearance-none mx-2 w-8 text-center bg-transparent font-medium [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:display-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:display-none [&::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none disabled:placeholder-disabled-900 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
                min={min}
                max={max}
                value={value}
                onChange={handleOnChange}
              />
              <BsButton
                variant="tertiary"
                square
                className="rounded-l-none p-3"
                disabled={value >= max}
                aria-controls={inputId}
                aria-label="Increase value"
                onClick={() => inc()}
              >
                <BsIconAdd />
              </BsButton>
            </div>
            <p className="self-center mt-1 mb-4 text-xs text-neutral-500 xs:mb-0">
              <strong className="text-neutral-900">{max}</strong> in stock
            </p>
          </div>
          <BsButton size="lg" className="w-full xs:ml-4" slotPrefix={<BsIconShoppingCart size="sm" />}>
            Add to cart
          </BsButton>
        </div>
        <div className="flex justify-center mt-4 gap-x-4">
          <BsButton size="sm" variant="tertiary" slotPrefix={<BsIconCompareArrows size="sm" />}>
            Compare
          </BsButton>
          <BsButton size="sm" variant="tertiary" slotPrefix={<BsIconFavorite size="sm" />}>
            Add to list
          </BsButton>
        </div>
      </div>
      <div className="flex first:mt-4">
        <BsIconPackage size="sm" className="flex-shrink-0 mr-1 text-neutral-500" />
        <p className="text-sm">
          Free shipping, arrives by Thu, Apr 7. Want it faster?
          <BsLink href="#" variant="secondary" className="mx-1">
            Add an address
          </BsLink>
          to see options
        </p>
      </div>
      <div className="flex mt-4">
        <BsIconWarehouse size="sm" className="flex-shrink-0 mr-1 text-neutral-500" />
        <p className="text-sm">
          Pickup not available at your shop.
          <BsLink href="#" variant="secondary" className="ml-1">
            Check availability nearby
          </BsLink>
        </p>
      </div>
      <div className="flex mt-4">
        <BsIconSafetyCheck size="sm" className="flex-shrink-0 mr-1 text-neutral-500" />
        <p className="text-sm">
          Free 30-days returns.
          <BsLink href="#" variant="secondary" className="ml-1">
            Details
          </BsLink>
        </p>
      </div>
    </section>
  );
}

// #endregion source
ProductDetails.getLayout = ShowcasePageLayout;
