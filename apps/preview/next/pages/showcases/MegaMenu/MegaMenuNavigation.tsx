/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import {
  BsIconShoppingCart,
  BsIconFavorite,
  BsIconPerson,
  BsIconClose,
  BsButton,
  BsDrawer,
  BsListItem,
  BsIconChevronRight,
  BsIconMenu,
  BsCounter,
  BsIconArrowBack,
  useDropdown,
  useTrapFocus,
  useDisclosure,
  BsInput,
  BsIconSearch,
} from '@barnstormer/react';
import { type FocusEvent, Fragment, useRef, useState, useMemo, createRef, RefObject } from 'react';

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

type Node = {
  key: string;
  value: {
    label: string;
    counter: number;
    link?: string;
    banner?: string;
    bannerTitle?: string;
  };
  children?: Node[];
  isLeaf: boolean;
};

const content: Node = {
  key: 'root',
  value: { label: '', counter: 0 },
  isLeaf: false,
  children: [
    {
      key: 'WOMEN',
      value: {
        label: 'Women',
        counter: 515,
        banner: 'http://localhost:3100/@assets/glasses.png',
        bannerTitle: 'The world in a new light',
      },
      isLeaf: false,
      children: [
        {
          key: 'ALL_WOMEN',
          value: { label: "All Women's", counter: 515, link: '#' },
          isLeaf: true,
        },
        {
          key: 'CATEGORIES',
          value: { label: 'Categories', counter: 178 },
          isLeaf: false,
          children: [
            {
              key: 'ALL_CATEGORIES',
              value: { label: 'All Categories', counter: 178, link: '#' },
              isLeaf: true,
            },
            {
              key: 'CLOTHING',
              value: { label: 'Clothing', counter: 30, link: '#' },
              isLeaf: true,
            },
            {
              key: 'SHOES',
              value: { label: 'Shoes', counter: 28, link: '#' },
              isLeaf: true,
            },
            {
              key: 'ACCESSORIES',
              value: { label: 'Accessories', counter: 56, link: '#' },
              isLeaf: true,
            },
            {
              key: 'WEARABLES',
              value: { label: 'Wearables', counter: 12, link: '#' },
              isLeaf: true,
            },
            {
              key: 'FOOD_DRINKS',
              value: { label: 'Food & Drinks', counter: 52, link: '#' },
              isLeaf: true,
            },
          ],
        },
        {
          key: 'ACTIVITIES',
          value: { label: 'Activities', counter: 239 },
          isLeaf: false,
          children: [
            {
              key: 'ALL_ACTIVITIES',
              value: { label: 'All Activities', counter: 239, link: '#' },
              isLeaf: true,
            },
            {
              key: 'FITNESS',
              value: { label: 'Fitness', counter: 83, link: '#' },
              isLeaf: true,
            },
            {
              key: 'PILATES',
              value: { label: 'Pilates', counter: 65, link: '#' },
              isLeaf: true,
            },
            {
              key: 'TRAINING',
              value: { label: 'Training', counter: 21, link: '#' },
              isLeaf: true,
            },
            {
              key: 'CARDIO_WORKOUT',
              value: { label: 'Cardio Workout', counter: 50, link: '#' },
              isLeaf: true,
            },
            {
              key: 'YOGA',
              value: { label: 'Yoga', counter: 20, link: '#' },
              isLeaf: true,
            },
          ],
        },
        {
          key: 'DEALS',
          value: { label: 'Deals', counter: 98 },
          isLeaf: false,
          children: [
            {
              key: 'ALL_DEALS',
              value: { label: 'All Deals', counter: 98, link: '#' },
              isLeaf: true,
            },
            {
              key: 'OUTLET',
              value: { label: 'Outlet', counter: 98, link: '#' },
              isLeaf: true,
            },
          ],
        },
      ],
    },
    {
      key: 'MEN',
      value: {
        label: 'Men',
        counter: 364,
        banner: 'http://localhost:3100/@assets/watch.png',
        bannerTitle: 'New in designer watches',
      },
      isLeaf: false,
      children: [
        {
          key: 'ALL_MEN',
          value: { label: "All Men's", counter: 364, link: '#' },
          isLeaf: true,
        },
        {
          key: 'CATEGORIES',
          value: { label: 'Categories', counter: 164 },
          isLeaf: false,
          children: [
            {
              key: 'ALL_CATEGORIES',
              value: { label: 'All Categories', counter: 164, link: '#' },
              isLeaf: true,
            },
            {
              key: 'CLOTHING',
              value: { label: 'Clothing', counter: 41, link: '#' },
              isLeaf: true,
            },
            {
              key: 'SHOES',
              value: { label: 'Shoes', counter: 20, link: '#' },
              isLeaf: true,
            },
            {
              key: 'ACCESSORIES',
              value: { label: 'Accessories', counter: 56, link: '#' },
              isLeaf: true,
            },
            {
              key: 'WEARABLES',
              value: { label: 'Wearables', counter: 32, link: '#' },
              isLeaf: true,
            },
            {
              key: 'FOOD_DRINKS',
              value: { label: 'Food & Drinks', counter: 15, link: '#' },
              isLeaf: true,
            },
          ],
        },
        {
          key: 'ACTIVITIES',
          value: { label: 'Activities', counter: 132 },
          isLeaf: false,
          children: [
            {
              key: 'ALL_ACTIVITIES',
              value: { label: 'All Activities', counter: 132, link: '#' },
              isLeaf: true,
            },
            {
              key: 'TRAINING',
              value: { label: 'Training', counter: 21, link: '#' },
              isLeaf: true,
            },
            {
              key: 'WORKOUT',
              value: { label: 'Workout', counter: 43, link: '#' },
              isLeaf: true,
            },
            {
              key: 'FOOTBALL',
              value: { label: 'Football', counter: 30, link: '#' },
              isLeaf: true,
            },
            {
              key: 'FITNESS',
              value: { label: 'Fitness', counter: 38, link: '#' },
              isLeaf: true,
            },
          ],
        },
        {
          key: 'DEALS',
          value: { label: 'Deals', counter: 68 },
          isLeaf: false,
          children: [
            {
              key: 'ALL_DEALS',
              value: { label: 'All Deals', counter: 68, link: '#' },
              isLeaf: true,
            },
            {
              key: 'OUTLET',
              value: { label: 'Outlet', counter: 68, link: '#' },
              isLeaf: true,
            },
          ],
        },
      ],
    },
    {
      key: 'KIDS',
      value: {
        label: 'Kids',
        counter: 263,
        banner: 'http://localhost:3100/@assets/toy.png',
        bannerTitle: 'Unleash your imagination',
      },
      isLeaf: false,
      children: [
        {
          key: 'ALL_KIDS',
          value: { label: 'All Kids', counter: 263, link: '#' },
          isLeaf: true,
        },
        {
          key: 'CATEGORIES',
          value: { label: 'Categories', counter: 192 },
          isLeaf: false,
          children: [
            {
              key: 'ALL_CATEGORIES',
              value: { label: 'All Categories', counter: 192, link: '#' },
              isLeaf: true,
            },
            {
              key: 'CLOTHING',
              value: { label: 'Clothing', counter: 29, link: '#' },
              isLeaf: true,
            },
            {
              key: 'SHOES',
              value: { label: 'Shoes', counter: 60, link: '#' },
              isLeaf: true,
            },
            {
              key: 'ACCESSORIES',
              value: { label: 'Accessories', counter: 48, link: '#' },
              isLeaf: true,
            },
            {
              key: 'WEARABLES',
              value: { label: 'Wearables', counter: 22, link: '#' },
              isLeaf: true,
            },
            {
              key: 'FOOD_DRINKS',
              value: { label: 'Food & Drinks', counter: 33, link: '#' },
              isLeaf: true,
            },
          ],
        },
        {
          key: 'ACTIVITIES',
          value: { label: 'Activities', counter: 40 },
          isLeaf: false,
          children: [
            {
              key: 'ALL_ACTIVITIES',
              value: { label: 'All Activities', counter: 40, link: '#' },
              isLeaf: true,
            },
            {
              key: 'FOOTBALL',
              value: { label: 'Football', counter: 21, link: '#' },
              isLeaf: true,
            },
            {
              key: 'BASKETBALL',
              value: { label: 'Basketball', counter: 19, link: '#' },
              isLeaf: true,
            },
          ],
        },
        {
          key: 'DEALS',
          value: { label: 'Deals', counter: 31 },
          isLeaf: false,
          children: [
            {
              key: 'ALL_DEALS',
              value: { label: 'All Deals', counter: 31, link: '#' },
              isLeaf: true,
            },
            {
              key: 'OUTLET',
              value: { label: 'Outlet', counter: 31, link: '#' },
              isLeaf: true,
            },
          ],
        },
      ],
    },
  ],
};

const findNode = (keys: string[], node: Node): Node => {
  if (keys.length > 1) {
    const [currentKey, ...restKeys] = keys;
    return findNode(restKeys, node.children?.find((child) => child.key === currentKey) || node);
  }
  return node.children?.find((child) => child.key === keys[0]) || node;
};

export default function MegaMenuNavigation() {
  const drawerRef = useRef(null);
  const megaMenuRef = useRef(null);
  const [activeNode, setActiveNode] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  const refsByKey = useMemo(() => {
    const buttonRefs: Record<string, RefObject<HTMLButtonElement>> = {};
    content.children?.forEach((item) => {
      buttonRefs[item.key] = createRef();
    });
    return buttonRefs;
  }, [content.children]);

  const { close, open, isOpen } = useDisclosure();
  const { refs, style } = useDropdown({
    isOpen,
    onClose: (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        refsByKey[activeNode[0]]?.current?.focus();
      }
      close();
    },
    placement: 'bottom-start',
    middleware: [],
    onCloseDeps: [activeNode],
  });

  const trapFocusOptions = {
    activeState: isOpen,
    arrowKeysUpDown: true,
    initialFocus: 'container',
  } as const;
  useTrapFocus(megaMenuRef, trapFocusOptions);
  useTrapFocus(drawerRef, trapFocusOptions);

  const activeMenu = findNode(activeNode, content);
  const bannerNode = findNode(activeNode.slice(0, 1), content);

  const handleOpenMenu = (menuType: string[]) => () => {
    setActiveNode(menuType);
    open();
  };

  const handleBack = () => {
    setActiveNode((menu) => menu.slice(0, menu.length - 1));
  };

  const handleNext = (key: string) => () => {
    setActiveNode((menu) => [...menu, key]);
  };

  const handleBlurWithin = (event: FocusEvent) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      close();
    }
  };

  const search = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Successfully found 10 results for ${inputValue}`);
  };

  return (
    <div className="w-full h-full">
      <header className="relative" ref={refs.setReference}>
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center px-4 md:px-10 py-2 md:py-5 w-full border-0 bg-primary-700 border-neutral-200 h-full md:z-10">
          <div className="flex items-center">
            <BsButton
              onClick={handleOpenMenu([])}
              variant="tertiary"
              square
              aria-label="Close menu"
              className="block md:hidden mr-5 bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
            >
              <BsIconMenu className="text-white" />
            </BsButton>
            <a
              href="#"
              aria-label="SF Homepage"
              className="flex shrink-0 w-8 h-8 lg:w-[12.5rem] lg:h-[1.75rem] items-center text-white focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
            >
              <picture>
                <source srcSet="http://localhost:3100/@assets/vsf_logo_white.svg" media="(min-width: 1024px)" />
                <img src="http://localhost:3100/@assets/vsf_logo_sign_white.svg" alt="Bs Logo" />
              </picture>
            </a>
          </div>
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
          <nav className="flex flex-nowrap justify-end items-center md:ml-10 gap-x-1">
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
                  <p className="hidden lg:inline-flex whitespace-nowrap mr-2">{actionItem.label}</p>
                )}
              </BsButton>
            ))}
          </nav>
          <form role="search" className="flex md:hidden flex-[100%] my-2" onSubmit={search}>
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
        </div>
        {/* Desktop dropdown */}
        <nav ref={refs.setFloating}>
          <ul
            className="hidden md:flex px-6 py-2 bg-white border-b border-b-neutral-200 border-b-solid"
            onBlur={handleBlurWithin}
          >
            {content.children?.map((menuNode) => (
              <li key={menuNode.key}>
                <BsButton
                  variant="tertiary"
                  onMouseEnter={handleOpenMenu([menuNode.key])}
                  onClick={handleOpenMenu([menuNode.key])}
                  ref={refsByKey[menuNode.key]}
                  className="group mr-2 !text-neutral-900 hover:!bg-neutral-200 hover:!text-neutral-700 active:!bg-neutral-300 active:!text-neutral-900"
                >
                  <span>{menuNode.value.label}</span>
                  <BsIconChevronRight className="rotate-90 text-neutral-500 group-hover:text-neutral-700 group-active:text-neutral-900" />
                </BsButton>

                {isOpen && activeNode.length === 1 && activeNode[0] === menuNode.key && (
                  <div
                    key={activeMenu.key}
                    style={style}
                    ref={megaMenuRef}
                    className="hidden md:grid gap-x-6 grid-cols-4 bg-white shadow-lg p-6 left-0 right-0 outline-none"
                    tabIndex={0}
                    onMouseLeave={close}
                  >
                    {activeMenu.children?.map((node) =>
                      node.isLeaf ? (
                        <Fragment key={node.key}>
                          <BsListItem as="a" size="sm" href={node.value.link} className="typography-text-sm mb-2">
                            {node.value.label}
                          </BsListItem>
                          <div className="col-start-2 col-end-5" />
                        </Fragment>
                      ) : (
                        <div key={node.key}>
                          <p className="typography-text-base font-medium text-neutral-900 whitespace-nowrap px-4 py-1.5 border-b border-b-neutral-200 border-b-solid">
                            {node.value.label}
                          </p>
                          <ul className="mt-2">
                            {node.children?.map(
                              (child) =>
                                child.isLeaf && (
                                  <li key={child.key}>
                                    <BsListItem
                                      as="a"
                                      size="sm"
                                      href={child.value.link}
                                      className="typography-text-sm py-1.5"
                                    >
                                      {child.value.label}
                                    </BsListItem>
                                  </li>
                                ),
                            )}
                          </ul>
                        </div>
                      ),
                    )}
                    <div className="flex flex-col items-center justify-center overflow-hidden rounded-md bg-neutral-100 border-neutral-300 grow">
                      <img
                        src={bannerNode.value.banner}
                        alt={bannerNode.value.bannerTitle}
                        className="object-contain"
                      />
                      <p className="px-4 mt-4 mb-4 font-medium text-center typography-text-base">
                        {bannerNode.value.bannerTitle}
                      </p>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
        {/* Mobile drawer */}
        {isOpen && (
          <>
            <div className="md:hidden fixed inset-0 bg-neutral-500 bg-opacity-50" />
            <BsDrawer
              ref={drawerRef}
              open={isOpen}
              onClose={close}
              placement="left"
              className="md:hidden right-[50px] max-w-[376px] bg-white overflow-y-auto"
            >
              <nav>
                <div className="flex items-center justify-between p-4 border-b border-b-neutral-200 border-b-solid">
                  <p className="typography-text-base font-medium">Browse products</p>
                  <BsButton onClick={close} variant="tertiary" square aria-label="Close menu" className="ml-2">
                    <BsIconClose className="text-neutral-500" />
                  </BsButton>
                </div>
                <ul className="mt-2 mb-6">
                  {activeMenu.key !== 'root' && (
                    <li>
                      <BsListItem
                        size="lg"
                        as="button"
                        type="button"
                        onClick={handleBack}
                        className="border-b border-b-neutral-200 border-b-solid"
                      >
                        <div className="flex items-center">
                          <BsIconArrowBack className="text-neutral-500" />
                          <p className="ml-5 font-medium">{activeMenu.value.label}</p>
                        </div>
                      </BsListItem>
                    </li>
                  )}
                  {activeMenu.children?.map((node) =>
                    node.isLeaf ? (
                      <li key={node.key}>
                        <BsListItem size="lg" as="a" href={node.value.link} className="first-of-type:mt-2">
                          <div className="flex items-center">
                            <p className="text-left">{node.value.label}</p>
                            <BsCounter className="ml-2">{node.value.counter}</BsCounter>
                          </div>
                        </BsListItem>
                      </li>
                    ) : (
                      <li key={node.key}>
                        <BsListItem size="lg" as="button" type="button" onClick={handleNext(node.key)}>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <p className="text-left">{node.value.label}</p>{' '}
                              <BsCounter className="ml-2">{node.value.counter}</BsCounter>
                            </div>
                            <BsIconChevronRight className="text-neutral-500" />
                          </div>
                        </BsListItem>
                      </li>
                    ),
                  )}
                </ul>
                {bannerNode.value.banner && (
                  <div className="flex items-center overflow-hidden bg-neutral-100 border-neutral-300 grow">
                    <img
                      src={bannerNode.value.banner}
                      alt={bannerNode.value.bannerTitle}
                      className="object-contain w-[50%] basis-6/12"
                    />
                    <p className="basis-6/12 p-6 font-medium typography-text-base">{bannerNode.value.bannerTitle}</p>
                  </div>
                )}
              </nav>
            </BsDrawer>
          </>
        )}
      </header>
    </div>
  );
}

// #endregion source
MegaMenuNavigation.getLayout = ShowcasePageLayout;
