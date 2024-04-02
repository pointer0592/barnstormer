import classNames from 'classnames';
import { BsLoaderSize } from '@barnstormer/react';
import type { BsLoaderCircularProps } from '@barnstormer/react';

const sizeClasses = {
  [BsLoaderSize.xs]: 'h-4 w-4 ring-2',
  [BsLoaderSize.sm]: 'h-5 w-5 ring-2',
  [BsLoaderSize.base]: 'h-6 w-6 ring-2',
  [BsLoaderSize.lg]: 'h-8 w-8 ring-2',
  [BsLoaderSize.xl]: 'h-10 w-10 ring-2',
  [BsLoaderSize['2xl']]: 'h-14 w-14 ring-[3px]',
  [BsLoaderSize['3xl']]: 'h-24 w-24 ring-4',
  [BsLoaderSize['4xl']]: 'h-48 w-48 ring-8',
};

const strokeSizeClass = {
  [BsLoaderSize.xs]: 'stroke-[10px]',
  [BsLoaderSize.sm]: 'stroke-[8px]',
  [BsLoaderSize.base]: 'stroke-[6px]',
  [BsLoaderSize.lg]: 'stroke-[4px]',
  [BsLoaderSize.xl]: 'stroke-[3px]',
  [BsLoaderSize['2xl']]: 'stroke-[3px]',
  [BsLoaderSize['3xl']]: 'stroke-2',
  [BsLoaderSize['4xl']]: 'stroke-2',
};

export default function BsLoaderCircular({
  size = BsLoaderSize.base,
  ariaLabel = 'loading',
  className,
  ...attributes
}: BsLoaderCircularProps): JSX.Element {
  return (
    <svg
      className={classNames(
        'inline-block ring-inset ring-neutral-300 text-primary-700 rounded-full animate-spin-slow',
        sizeClasses[size],
        className,
      )}
      viewBox="25 25 50 50"
      aria-live="polite"
      aria-label={ariaLabel}
      data-testid="loader-circular"
      {...attributes}
    >
      <circle
        className={classNames(
          'fill-none stroke-2 stroke-current animate-stroke-loader-circular',
          strokeSizeClass[size],
        )}
        cx="50"
        cy="50"
        r="24"
      />
    </svg>
  );
}
