import classNames from 'classnames';
import { BsThumbnailProps, BsThumbnailSize } from '@barnstormer/react';

const sizeClasses = {
  [BsThumbnailSize.sm]: 'w-5 h-5',
  [BsThumbnailSize.base]: 'w-6 h-6',
  [BsThumbnailSize.lg]: 'w-10 h-10',
  [BsThumbnailSize.xl]: 'w-14 h-14',
};

export default function BsThumbnail({
  size = BsThumbnailSize.base,
  children,
  className,
  ...attributes
}: BsThumbnailProps): JSX.Element {
  return (
    <div
      className={classNames('rounded-full overflow-hidden bg-clip-content p-0.5', sizeClasses[size], className)}
      data-testid="thumbnail"
      {...attributes}
    >
      {children}
    </div>
  );
}
