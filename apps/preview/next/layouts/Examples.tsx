import Link from 'next/link';
import { useRouter } from 'next/router';
import { type ReactElement, useEffect, useState } from 'react';
import useSWR from 'swr';
import {
  BsButton,
  BsButtonVariant,
  BsButtonSize,
  BsListItem,
  BsIconChevronLeft,
  BsIconChevronRight,
} from '@barnstormer/react';
import classNames from 'classnames';

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function ExampleLayout({ children }: { children: ReactElement }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isNotIframe, setIsNotIframe] = useState(false);

  const router = useRouter();
  const { data: components } = useSWR<string[]>(`${router.basePath}/api/getExamples`, fetcher);

  useEffect(() => {
    if (window.self === window.top) {
      setIsNotIframe(true);
    }
  }, []);

  return (
    <div className="e-page-examples">
      {isNotIframe ? (
        <div className={`sidebar ${isOpen ? '' : 'sidebar-collapsed'}`}>
          <header className="sidebar-heading">
            <h2>Barnstormer UI</h2>
            <h3>React components</h3>
          </header>
          <BsButton
            className="sidebar-toggle"
            variant={BsButtonVariant.tertiary}
            size={BsButtonSize.sm}
            onClick={() => setIsOpen(!isOpen)}
            slotPrefix={isOpen ? <BsIconChevronLeft /> : <BsIconChevronRight />}
            aria-label={isOpen ? 'Hide sidebar' : 'Open sidebar'}
            square
          />
          <ul className="sidebar-list">
            {components?.map((component) => (
              <li key={component} data-sidebar-component={component}>
                <Link href={`/examples/${component}`} legacyBehavior>
                  <BsListItem
                    className={classNames({ 'font-medium': router.pathname === `/examples/${component}` })}
                    selected={router.pathname === `/examples/${component}`}
                    as="a"
                  >
                    {component}
                  </BsListItem>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {children}
    </div>
  );
}
