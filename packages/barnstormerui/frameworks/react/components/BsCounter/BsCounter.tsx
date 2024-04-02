import classNames from 'classnames';
import type { BsCounterProps } from '@barnstormer/react';
import { BsCounterSize } from '@barnstormer/react';

export default function BsCounter({
  size = BsCounterSize.base,
  pill = false,
  children,
  className,
  ...attributes
}: BsCounterProps): JSX.Element {
  const sizeClasses: Record<BsCounterSize, string> = {
    [BsCounterSize['3xs']]: classNames('text-3xs', { 'px-1': pill }),
    [BsCounterSize['2xs']]: classNames('text-2xs', { 'px-1.5': pill }),
    [BsCounterSize.xs]: classNames('text-xs', { 'px-2': pill }),
    [BsCounterSize.sm]: classNames('text-sm', { 'px-2.5': pill }),
    [BsCounterSize.base]: classNames('text-base', { 'px-3': pill }),
    [BsCounterSize.lg]: classNames('text-lg', { 'px-3.5': pill }),
  };

  const classes = classNames([
    "inline-flex items-center before:content-['('] after:content-[')'] text-neutral-500",
    sizeClasses[size],
    {
      'rounded-full py-0.5 font-medium ring-1 ring-neutral-200 ring-inset before:content-none after:content-none': pill,
    },
    className,
  ]);

  return (
    <span className={classes} data-testid="counter" {...attributes}>
      {children}
    </span>
  );
}
