import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsModal, BsButton, BsIconClose, useDisclosure } from '@barnstormer/react';

export default function ModalDemo() {
  const { isOpen, open, close } = useDisclosure({ initialValue: false });

  return (
    <>
      <BsButton onClick={open}>To Checkout</BsButton>

      <BsModal
        open={isOpen}
        onClose={close}
        className="max-w-[90%] md:max-w-lg"
        as="section"
        role="alertdialog"
        aria-labelledby="promoModalTitle"
        aria-describedby="promoModalDesc"
      >
        <header>
          <BsButton square variant="tertiary" className="absolute right-2 top-2" onClick={close}>
            <BsIconClose />
          </BsButton>
          <h3 id="promoModalTitle" className="font-bold typography-headline-4 md:typography-headline-3">
            You might miss out on great deals
          </h3>
        </header>
        <p id="promoModalDesc" className="mt-2">
          There are special offers for some of the items on your wishlist. Do you want to see these deals before
          proceeding to checkout page?
        </p>
        <footer className="flex justify-end gap-4 mt-4">
          <BsButton variant="secondary" onClick={close}>
            Skip
          </BsButton>
          <BsButton onClick={close}>Yes!</BsButton>
        </footer>
      </BsModal>
    </>
  );
}

// #endregion source
ModalDemo.getLayout = ShowcasePageLayout;
