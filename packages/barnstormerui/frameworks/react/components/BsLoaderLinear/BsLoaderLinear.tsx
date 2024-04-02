import classNames from 'classnames';
import { BsLoaderLinearSize, BsLoaderSize } from '@barnstormer/react';
import type { BsLoaderLinearProps } from '@barnstormer/react';

const sizeClasses = {
  [BsLoaderLinearSize.minimal]: 'h-1',
  [BsLoaderSize.xs]: 'h-4',
  [BsLoaderSize.sm]: 'h-5',
  [BsLoaderSize.base]: 'h-6',
  [BsLoaderSize.lg]: 'h-7',
  [BsLoaderSize.xl]: 'h-10',
  [BsLoaderSize['2xl']]: 'h-14',
  [BsLoaderSize['3xl']]: 'h-24',
  [BsLoaderSize['4xl']]: 'h-48',
};

export default function BsLoaderLinear({
  size = BsLoaderSize.base,
  ariaLabel = 'loading',
  className,
  ...attributes
}: BsLoaderLinearProps): JSX.Element {
  return (
    <span
      className={classNames(
        'relative inline-block overflow-hidden bg-neutral-300 text-primary-700 after:absolute after:w-2.5 after:h-full after:animate-line after:bg-current after:block',
        sizeClasses[size],
        className,
      )}
      aria-live="polite"
      aria-label={ariaLabel}
      data-testid="loader-linear"
      {...attributes}
    />
  );
}
