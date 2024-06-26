import type { ReactNode, PropsWithChildren, DetailsHTMLAttributes } from 'react';

export interface BsAccordionItemProps
  extends Omit<DetailsHTMLAttributes<HTMLDetailsElement>, 'onToggle'>,
    PropsWithChildren {
  onToggle?: (isOpen: boolean) => void;
  summary?: ReactNode;
  summaryClassName?: string;
}
