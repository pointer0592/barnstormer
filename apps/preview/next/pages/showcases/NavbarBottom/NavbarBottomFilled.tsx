import { ShowcasePageLayout } from '../../showcases';
// #region source
import classNames from 'classnames';
import {
  BsButton,
  BsIconHome,
  BsIconMenu,
  BsIconShoppingCart,
  BsIconFavorite,
  BsIconPerson,
} from '@barnstormer/react';
import { useState } from 'react';

export default function BottomNavFilled() {
  const items = [
    {
      label: 'Home',
      icon: <BsIconHome />,
    },
    {
      label: 'Products',
      icon: <BsIconMenu />,
    },
    {
      label: 'Cart',
      icon: <BsIconShoppingCart />,
    },
    {
      label: 'Watchlist',
      icon: <BsIconFavorite />,
    },
    {
      label: 'Account',
      icon: <BsIconPerson />,
    },
  ];

  const [selectedItem, setselectedItem] = useState('');
  function onClickHandler(itemLabel: string) {
    setselectedItem(itemLabel);
  }

  return (
    <nav className="max-w-[500px] bottom-0 w-full left-0 fixed flex flex-row items-stretch">
      {items.map((item) => (
        <BsButton
          key={item.label}
          variant="tertiary"
          slotPrefix={item.icon}
          className={classNames(
            'py-1 flex flex-col h-full w-full rounded-none bg-primary-700 text-white hover:text-white hover:bg-primary-800 active:text-white active:bg-primary-900',
            { 'text-white bg-primary-900': selectedItem === item.label },
          )}
          onClick={() => onClickHandler(item.label)}
        >
          {item.label}
        </BsButton>
      ))}
    </nav>
  );
}

// #endregion source
BottomNavFilled.getLayout = ShowcasePageLayout;
