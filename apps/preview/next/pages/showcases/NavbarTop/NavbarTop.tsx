/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import { useState } from 'react';
import {
  BsButton,
  BsIconShoppingCart,
  BsIconFavorite,
  BsIconPerson,
  BsIconExpandMore,
  BsInput,
  BsIconSearch,
  BsIconMenu,
} from '@barnstormer/react';

export default function TopNav() {
  const [inputValue, setInputValue] = useState('');

  const actionItems = [
    {
      icon: <BsIconShoppingCart />,
      label: '',
      ariaLabel: 'Cart',
      role: 'button',
    },
    {
      icon: <BsIconFavorite />,
      label: '',
      ariaLabel: 'Wishlist',
      role: 'button',
    },
    {
      label: 'Log in',
      icon: <BsIconPerson />,
      ariaLabel: 'Log in',
      role: 'login',
    },
  ];

  const search = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Successfully found 10 results for ${inputValue}`);
  };

  return (
    <header className="flex justify-center w-full py-2 px-4 lg:py-5 lg:px-6 bg-white border-b border-neutral-200">
      <div className="flex flex-wrap lg:flex-nowrap items-center flex-row justify-start h-full max-w-[1536px] w-full">
        <a
          href="#"
          aria-label="SF Homepage"
          className="inline-block mr-4 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm shrink-0"
        >
          <picture>
            <source srcSet="http://localhost:3100/@assets/vsf_logo.svg" media="(min-width: 768px)" />
            <img
              src="http://localhost:3100/@assets/vsf_logo_sign.svg"
              alt="Bs Logo"
              className="w-8 h-8 md:h-6 md:w-[176px] lg:w-[12.5rem] lg:h-[1.75rem]"
            />
          </picture>
        </a>
        <BsButton
          aria-label="Open categories"
          className="lg:hidden order-first lg:order-1 mr-4"
          square
          variant="tertiary"
        >
          <BsIconMenu />
        </BsButton>
        <BsButton
          className="hidden lg:flex lg:mr-4"
          variant="tertiary"
          slotSuffix={<BsIconExpandMore className="hidden lg:block" />}
        >
          <span className="hidden lg:flex whitespace-nowrap">Browse products</span>
        </BsButton>
        <form
          role="search"
          className="flex flex-[100%] order-last lg:order-3 mt-2 lg:mt-0 pb-2 lg:pb-0"
          onSubmit={search}
        >
          <BsInput
            value={inputValue}
            type="search"
            className="[&::-webkit-search-cancel-button]:appearance-none"
            placeholder="Search"
            wrapperClassName="flex-1 h-10 pr-0"
            size="base"
            slotSuffix={
              <span className="flex items-center">
                <BsButton
                  variant="tertiary"
                  square
                  aria-label="search"
                  type="submit"
                  className="rounded-l-none hover:bg-transparent active:bg-transparent"
                >
                  <BsIconSearch />
                </BsButton>
              </span>
            }
            onChange={(event) => setInputValue(event.target.value)}
          />
        </form>
        <nav className="flex-1 flex justify-end lg:order-last lg:ml-4">
          <div className="flex flex-row flex-nowrap">
            {actionItems.map((actionItem) => (
              <BsButton
                key={actionItem.ariaLabel}
                className="mr-2 -ml-0.5 rounded-md text-primary-700 hover:bg-primary-100 active:bg-primary-200 hover:text-primary-600 active:text-primary-700"
                aria-label={actionItem.ariaLabel}
                variant="tertiary"
                square
                slotPrefix={actionItem.icon}
              >
                {actionItem.role === 'login' && (
                  <p className="hidden xl:inline-flex whitespace-nowrap">{actionItem.label}</p>
                )}
              </BsButton>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

// #endregion source
TopNav.getLayout = ShowcasePageLayout;
