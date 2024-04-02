/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import {
  BsIconShoppingCart,
  BsIconFavorite,
  BsIconPerson,
  BsIconExpandMore,
  BsIconClose,
  BsButton,
  BsDrawer,
  BsListItem,
  useDisclosure,
  useTrapFocus,
  BsInput,
  BsIconSearch,
  BsIconMenu,
} from '@barnstormer/react';
import { useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import { CSSTransition } from 'react-transition-group';

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
    icon: <BsIconPerson />,
    label: 'Log in',
    ariaLabel: 'Log in',
    role: 'login',
  },
];

const bannerDetails = {
  image: 'http://localhost:3100/@assets/watch.png',
  title: 'New in designer watches',
};

const categoriesContent = [
  {
    heading: 'Women',
    items: [
      {
        title: "All Women's",
        link: '#',
      },
      {
        title: 'Clothing',
        link: '#',
      },
      {
        title: 'Shoes',
        link: '#',
      },
      {
        title: 'Accessories',
        link: '#',
      },
      {
        title: 'Wearables',
        link: '#',
      },
      {
        title: 'Food & Drinks',
        link: '#',
      },
    ],
  },
  {
    heading: 'Men',
    items: [
      {
        title: 'All Men’s',
        link: '#',
      },
      {
        title: 'Clothing',
        link: '#',
      },
      {
        title: 'Shoes',
        link: '#',
      },
      {
        title: 'Accessories',
        link: '#',
      },
      {
        title: 'Wearables',
        link: '#',
      },
      {
        title: 'Food & Drinks',
        link: '#',
      },
    ],
  },
  {
    heading: 'Kids',
    items: [
      {
        title: 'All Kids',
        link: '#',
      },
      {
        title: 'Clothing',
        link: '#',
      },
      {
        title: 'Shoes',
        link: '#',
      },
      {
        title: 'Accessories',
        link: '#',
      },
      {
        title: 'Wearables',
        link: '#',
      },
      {
        title: 'Food & Drinks',
        link: '#',
      },
    ],
  },
];

export default function BaseMegaMenu() {
  const { close, toggle, isOpen } = useDisclosure();
  const drawerRef = useRef(null);
  const menuRef = useRef(null);
  const [inputValue, setInputValue] = useState('');

  useTrapFocus(drawerRef, {
    activeState: isOpen,
    arrowKeysUpDown: true,
    initialFocus: 'container',
  });
  useClickAway(menuRef, () => {
    close();
  });

  const search = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Successfully found 10 results for ${inputValue}`);
  };

  return (
    <div className="w-full h-full">
      {isOpen && <div className="fixed inset-0 bg-neutral-500 bg-opacity-50 transition-opacity" />}
      <header
        ref={menuRef}
        className="flex flex-wrap md:flex-nowrap justify-center w-full py-2 md:py-5 border-0 bg-primary-700 border-neutral-200 md:relative md:z-10"
      >
        <div className="flex items-center justify-start h-full max-w-[1536px] w-full px-4 md:px-10">
          <BsButton
            className="block md:hidden text-white bg-transparent font-body hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
            aria-haspopup="true"
            aria-expanded={isOpen}
            variant="tertiary"
            onClick={toggle}
            square
          >
            <BsIconMenu className=" text-white" />
          </BsButton>
          <a
            href="#"
            aria-label="SF Homepage"
            className="flex shrink-0 ml-4 md:ml-0 mr-2 md:mr-10 text-white focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
          >
            <picture>
              <source srcSet="http://localhost:3100/@assets/vsf_logo_white.svg" media="(min-width: 1024px)" />
              <img
                src="http://localhost:3100/@assets/vsf_logo_sign_white.svg"
                alt="Bs Logo"
                className="w-8 h-8 lg:w-[12.5rem] lg:h-[1.75rem]"
              />
            </picture>
          </a>
          <BsButton
            className="hidden md:flex text-white bg-transparent font-body hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
            aria-haspopup="true"
            aria-expanded={isOpen}
            slotSuffix={<BsIconExpandMore className="hidden md:inline-flex" />}
            variant="tertiary"
            onClick={toggle}
            square
          >
            <span className="hidden md:inline-flex whitespace-nowrap px-2">Browse products</span>
          </BsButton>
          <nav>
            <ul>
              <li role="none">
                <CSSTransition
                  in={isOpen}
                  timeout={500}
                  unmountOnExit
                  classNames={{
                    enter: '-translate-x-full md:opacity-0 md:translate-x-0',
                    enterActive: 'translate-x-0 md:opacity-100 transition duration-500 ease-in-out',
                    exitActive: '-translate-x-full md:opacity-0 md:translate-x-0 transition duration-500 ease-in-out',
                  }}
                >
                  <BsDrawer
                    ref={drawerRef}
                    open
                    disableClickAway
                    placement="top"
                    className="grid grid-cols-1 md:gap-x-6 md:grid-cols-4 bg-white shadow-lg p-0 max-h-screen overflow-y-auto md:!absolute md:!top-20 max-w-[376px] md:max-w-full md:p-6 mr-[50px] md:mr-0"
                  >
                    <div className="sticky top-0 flex items-center justify-between px-4 py-2 bg-primary-700 md:hidden">
                      <div className="flex items-center font-medium text-white typography-text-lg">Browse products</div>
                      <BsButton
                        square
                        variant="tertiary"
                        aria-label="Close navigation menu"
                        onClick={close}
                        className="text-white ml-2"
                      >
                        <BsIconClose />
                      </BsButton>
                    </div>
                    {categoriesContent.map(({ heading, items }) => (
                      <div key={heading} className="[&:nth-child(2)]:pt-0 pt-6 md:pt-0">
                        <h2
                          role="presentation"
                          className="typography-text-base font-medium text-neutral-900 whitespace-nowrap p-4 md:py-1.5"
                        >
                          {heading}
                        </h2>
                        <hr className="mb-3.5" />
                        <ul>
                          {items.map((item) => (
                            <li key={item.title}>
                              <BsListItem
                                as="a"
                                size="sm"
                                role="none"
                                href={item.link}
                                className="typography-text-base md:typography-text-sm py-4 md:py-1.5"
                              >
                                {item.title}
                              </BsListItem>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div className="flex flex-col items-center justify-center overflow-hidden md:rounded-md bg-neutral-100 border-neutral-300 grow">
                      <img src={bannerDetails.image} alt={bannerDetails.title} className="object-contain" />
                      <p className="px-4 mt-4 mb-4 font-medium text-center typography-text-base">
                        {bannerDetails.title}
                      </p>
                    </div>
                    <BsButton
                      square
                      size="sm"
                      variant="tertiary"
                      aria-label="Close navigation menu"
                      onClick={close}
                      className="hidden md:block md:absolute md:right-0 hover:bg-white active:bg-white"
                    >
                      <BsIconClose className="text-neutral-500" />
                    </BsButton>
                  </BsDrawer>
                </CSSTransition>
              </li>
            </ul>
          </nav>
          <form role="search" className="hidden md:flex flex-[100%] ml-10" onSubmit={search}>
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
          <nav className="flex-1 flex flex-nowrap justify-end items-center md:ml-10 gap-x-1" aria-label="SF Navigation">
            {actionItems.map((actionItem) => (
              <BsButton
                className="text-white bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
                key={actionItem.ariaLabel}
                aria-label={actionItem.ariaLabel}
                variant="tertiary"
                slotPrefix={actionItem.icon}
                square
              >
                {actionItem.role === 'login' && (
                  <p className="hidden lg:inline-flex whitespace-nowrap pr-2">{actionItem.label}</p>
                )}
              </BsButton>
            ))}
          </nav>
        </div>
        <form role="search" className="flex md:hidden flex-[100%] my-2 mx-4" onSubmit={search}>
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
      </header>
    </div>
  );
}

// #endregion source
BaseMegaMenu.getLayout = ShowcasePageLayout;
