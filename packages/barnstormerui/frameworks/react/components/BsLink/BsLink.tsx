import classNames from 'classnames';
import { BsLinkVariant, polymorphicForwardRef } from '@barnstormer/react';
import type { BsLinkProps } from '@barnstormer/react';

const defaultLinkTag = 'a';

const BsLink = polymorphicForwardRef<typeof defaultLinkTag, BsLinkProps>((props, ref) => {
  const variantClasses = {
    [BsLinkVariant.primary]: 'text-primary-700 underline hover:text-primary-800 active:text-primary-900',
    [BsLinkVariant.secondary]: 'underline hover:text-primary-800 active:text-primary-900',
  };

  const { as, className, children, variant = BsLinkVariant.primary, ...attributes } = props;
  const Tag = as || defaultLinkTag;

  return (
    <Tag
      ref={ref}
      className={classNames(
        'focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm',
        variantClasses[variant],
        className,
      )}
      data-testid="link"
      {...attributes}
    >
      {children}
    </Tag>
  );
});

export default BsLink;
