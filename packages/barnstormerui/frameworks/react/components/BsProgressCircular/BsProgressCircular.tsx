import classNames from 'classnames';
import { BsProgressSize } from '@barnstormer/react';
import type { BsProgressCircularProps } from '@barnstormer/react';

const sizeClasses = {
  [BsProgressSize.xs]: 'h-4 w-4 ring-2',
  [BsProgressSize.sm]: 'h-5 w-5 ring-2',
  [BsProgressSize.base]: 'h-6 w-6 ring-2',
  [BsProgressSize.lg]: 'h-8 w-8 ring-2',
  [BsProgressSize.xl]: 'h-10 w-10 ring-2',
  [BsProgressSize['2xl']]: 'h-14 w-14 ring-[3px]',
  [BsProgressSize['3xl']]: 'h-24 w-24 ring-4',
  [BsProgressSize['4xl']]: 'h-48 w-48 ring-8',
};

const strokeSizeClass = {
  [BsProgressSize.xs]: 'stroke-[10px]',
  [BsProgressSize.sm]: 'stroke-[8px]',
  [BsProgressSize.base]: 'stroke-[6px]',
  [BsProgressSize.lg]: 'stroke-[4px]',
  [BsProgressSize.xl]: 'stroke-[3px]',
  [BsProgressSize['2xl']]: 'stroke-[3px]',
  [BsProgressSize['3xl']]: 'stroke-2',
  [BsProgressSize['4xl']]: 'stroke-2',
};

export default function BsProgressCircular({
  value = 0,
  size = BsProgressSize.base,
  ariaLabel = 'Progress element',
  children,
  className,
  ...attributes
}: BsProgressCircularProps): JSX.Element {
  const strokeDasharray = `${(value / 100) * 151}, 150`;
  return (
    <svg
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      aria-label={ariaLabel}
      className={classNames(
        'inline-block ring-inset ring-neutral-300 text-primary-700 rounded-full transition-[stroke-dasharray] ease-in-out duration-500 text-sm',
        sizeClasses[size],
        className,
      )}
      viewBox="25 25 50 50"
      strokeDasharray={strokeDasharray}
      data-testid="progress"
      {...attributes}
    >
      <circle
        className={classNames('origin-bottom-right -rotate-90 stroke-current fill-none', strokeSizeClass[size])}
        cx="50"
        cy="50"
        r="24"
      />
      {children}
    </svg>
  );
}
