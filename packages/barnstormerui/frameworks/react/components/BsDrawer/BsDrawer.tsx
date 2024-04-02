import classNames from 'classnames';
import { useRef } from 'react';
import { useClickAway } from 'react-use';
import { BsDrawerPlacement, polymorphicForwardRef, mergeRefs } from '@barnstormer/react';
import type { BsDrawerProps } from '@barnstormer/react';

const defaultDrawerTag = 'aside';

const placementClasses = (placementValue: BsDrawerProps['placement']) => ({
  'left-0': placementValue !== BsDrawerPlacement.right,
  'right-0': placementValue !== BsDrawerPlacement.left,
  'top-0': placementValue !== BsDrawerPlacement.bottom,
  'bottom-0': placementValue !== BsDrawerPlacement.top,
});

const BsDrawer = polymorphicForwardRef<typeof defaultDrawerTag, BsDrawerProps>(
  (
    {
      as,
      open,
      placement = BsDrawerPlacement.left,
      disableClickAway,
      disableEsc,
      onClose,
      className,
      children,
      ...attributes
    },
    ref,
  ) => {
    const Tag = as || defaultDrawerTag;
    const drawerRef = useRef(null);
    useClickAway(drawerRef, () => {
      if (disableClickAway) return;
      onClose?.();
    });

    const onKeyDown = (event: KeyboardEvent) => {
      if (disableEsc) return;
      if (event.key === 'Escape') {
        onClose?.();
      }
    };

    return open ? (
      <Tag
        ref={mergeRefs([drawerRef, ref])}
        className={classNames('fixed', placementClasses(placement), className)}
        tabIndex="-1"
        data-testid="drawer"
        {...attributes}
        onKeyDown={onKeyDown}
      >
        {children}
      </Tag>
    ) : null;
  },
);

export default BsDrawer;
