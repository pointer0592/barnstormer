import { ShowcasePageLayout } from '../../showcases';
// #region source
import { useState, useId } from 'react';
import { BsModal, BsButton, BsIconClose, useDisclosure, BsRatingButton } from '@barnstormer/react';

export default function ProductRating() {
  const { isOpen, open, close } = useDisclosure({ initialValue: true });
  const [rating, setRating] = useState(0);
  const modalTitleId = useId();
  const modalDescId = useId();

  return (
    <>
      <BsButton className="absolute right-1/2 top-1/2 translate-x-[50%]" onClick={open}>
        Open rating modal again
      </BsButton>
      <BsModal
        open={isOpen}
        onClose={close}
        className="min-w-[376px] md:w-[480px]"
        as="section"
        role="alertdialog"
        aria-labelledby={modalTitleId}
        aria-describedby={modalDescId}
      >
        <header>
          <BsButton
            square
            variant="tertiary"
            className="!text-neutral-500 absolute right-2 top-2"
            aria-label="Close product rating modal"
            onClick={close}
          >
            <BsIconClose />
          </BsButton>
          <h3 id={modalTitleId} className="font-bold typography-headline-4 md:typography-headline-3 mb-8">
            Rate your purchase
          </h3>
        </header>
        <img
          src="http://localhost:3100/@assets/smartwatch.png"
          alt="Smartwatch"
          width="100"
          height="100"
          className="mx-auto border border-neutral-200 rounded-md"
        />
        <p id={modalDescId} className="mt-2 text-center">
          Smartwatch Fitness Tracker
        </p>
        <form className="mt-6">
          <BsRatingButton
            value={rating}
            size="lg"
            aria-label="Select rating"
            className="justify-center mb-8"
            onChange={setRating}
          />
          <BsButton type="submit" className="w-full">
            Rate Product
          </BsButton>
        </form>
      </BsModal>
    </>
  );
}

// #endregion source
ProductRating.getLayout = ShowcasePageLayout;
