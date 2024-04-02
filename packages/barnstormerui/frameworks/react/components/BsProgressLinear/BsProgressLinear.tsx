import classNames from 'classnames';
import { BsProgressSize, BsProgressLinearSize } from '@barnstormer/react';
import type { BsProgressLinearProps } from '@barnstormer/react';

const sizeClasses = {
  [BsProgressLinearSize.minimal]: 'h-1',
  [BsProgressSize.xs]: 'h-4',
  [BsProgressSize.sm]: 'h-5',
  [BsProgressSize.base]: 'h-6',
  [BsProgressSize.lg]: 'h-7',
  [BsProgressSize.xl]: 'h-10',
  [BsProgressSize['2xl']]: 'h-14',
  [BsProgressSize['3xl']]: 'h-24',
  [BsProgressSize['4xl']]: 'h-48',
};

export default function BsProgressLinear({
  value = 0,
  size = BsProgressSize.base,
  ariaLabel = 'Progress element',
  className,
  ...attributes
}: BsProgressLinearProps): JSX.Element {
  return (
    <progress
      data-testid="progress-linear"
      max="100"
      className={classNames(
        'bg-neutral-300 text-primary-700 [&::-webkit-progress-bar]:bg-inherit [&::-webkit-progress-value]:bg-current [&::-webkit-progress-value]:transition-[width] [&::-webkit-progress-value]:ease-in-out [&::-webkit-progress-value]:duration-200 [&::-moz-progress-bar]:bg-current',
        sizeClasses[size],
        className,
      )}
      aria-label={ariaLabel}
      value={value}
      {...attributes}
    />
  );
}
