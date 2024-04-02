import classNames from 'classnames';
import { useDropdown } from '@barnstormer/react';
import type { BsDropdownProps } from '@barnstormer/react';

export default function BsDropdown(props: BsDropdownProps) {
  const { children, trigger, open: isOpen = false, className, style: containerStyle, ...dropdownOptions } = props;
  const { refs, style: dropdownStyle } = useDropdown({ isOpen, ...dropdownOptions });

  return (
    <div
      ref={refs.setReference}
      className={classNames('w-max', className)}
      style={containerStyle}
      data-testid="dropdown"
    >
      {trigger}
      {isOpen && (
        <div ref={refs.setFloating} style={dropdownStyle} aria-hidden={!isOpen} data-testid="dropdown-content">
          {children}
        </div>
      )}
    </div>
  );
}
