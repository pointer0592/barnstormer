import classNames from 'classnames';
import { BsListItemSize, polymorphicForwardRef } from '@barnstormer/react';
import type { BsListItemProps } from '@barnstormer/react';

const sizeClasses = {
  [BsListItemSize.sm]: 'text-sm px-4 py-1',
  [BsListItemSize.base]: 'px-4 py-2',
  [BsListItemSize.lg]: 'p-4',
};

const defaultListItemTag = 'li';
const defaultChildrenTag = 'span';

const BsListItem = polymorphicForwardRef<typeof defaultListItemTag, BsListItemProps>((props, ref) => {
  const {
    size = BsListItemSize.base,
    disabled,
    selected,
    className,
    slotPrefix,
    slotSuffix,
    as,
    childrenTag,
    children,
    ...attributes
  } = props;

  const Tag = as || defaultListItemTag;
  const ChildrenTag = childrenTag || defaultChildrenTag;

  return (
    <Tag
      ref={ref}
      className={classNames(
        'inline-flex items-center gap-2 w-full hover:bg-neutral-100 active:bg-neutral-200 cursor-pointer focus-visible:outline focus-visible:outline-offset focus-visible:relative focus-visible:z-10',
        {
          'cursor-not-allowed pointer-events-none text-disabled-900': disabled,
          'font-medium': selected,
        },
        sizeClasses[size],
        className,
      )}
      disabled={disabled}
      data-testid="list-item"
      {...attributes}
    >
      {slotPrefix && (
        <ChildrenTag className={disabled ? 'text-disabled-500' : 'text-neutral-500'}>{slotPrefix}</ChildrenTag>
      )}
      <ChildrenTag className="flex flex-col w-full min-w-0">{children}</ChildrenTag>
      {slotSuffix && (
        <ChildrenTag className={disabled ? 'text-disabled-500' : 'text-neutral-500'}>{slotSuffix}</ChildrenTag>
      )}
    </Tag>
  );
});

export default BsListItem;
