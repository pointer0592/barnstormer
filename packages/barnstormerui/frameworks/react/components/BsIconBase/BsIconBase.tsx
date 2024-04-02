import type { BsIconBaseProps } from '@barnstormer/react';
import { BsIconSize } from '@barnstormer/react';
import classNames from 'classnames';

const getSizeClasses = (size: BsIconBaseProps['size']) => {
  switch (size) {
    case BsIconSize.xs:
      return 'w-4 h-4';
    case BsIconSize.sm:
      return 'w-5 h-5';
    case BsIconSize.lg:
      return 'w-8 h-8';
    case BsIconSize.xl:
      return 'w-10 h-10';
    case BsIconSize['2xl']:
      return 'w-14 h-14';
    case BsIconSize['3xl']:
      return 'w-24 h-24';
    case BsIconSize['4xl']:
      return 'w-48 h-48';
    default:
      return 'w-6 h-6';
  }
};

export default function BsIconBase({
  size = BsIconSize.base,
  className,
  children = '',
  ...attributes
}: BsIconBaseProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classNames('inline-block fill-current', getSizeClasses(size), className)}
      {...attributes}
    >
      {children}
    </svg>
  );
}
