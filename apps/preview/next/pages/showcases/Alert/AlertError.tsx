import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsIconClose } from '@barnstormer/react';

export default function AlertError() {
  return (
    <div
      role="alert"
      className="flex items-start md:items-center max-w-[600px] shadow-md bg-negative-100 pr-2 pl-4 ring-1 ring-negative-300 typography-text-sm md:typography-text-base py-1 rounded-md"
    >
      <p className="py-2 mr-2">The password change was failed.</p>
      <button
        type="button"
        className="py-1.5 px-3 md:py-2 md:px-4 rounded-md text-negative-700 hover:bg-negative-200 active:bg-negative-300 hover:text-negative-800 active:text-negative-900 ml-auto font-medium focus-visible:outline focus-visible:outline-offset"
      >
        Retry
      </button>
      <button
        type="button"
        className="p-1.5 md:p-2 ml-2 rounded-md text-negative-700 hover:bg-negative-200 active:bg-negative-300 hover:text-negative-800 active:text-negative-900 focus-visible:outline focus-visible:outline-offset"
        aria-label="Close error alert"
      >
        <BsIconClose className="hidden md:block" />
        <BsIconClose size="sm" className="block md:hidden" />
      </button>
    </div>
  );
}
// #endregion source
AlertError.getLayout = ShowcasePageLayout;
