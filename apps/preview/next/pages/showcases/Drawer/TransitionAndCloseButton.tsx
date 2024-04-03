/* eslint-disable jsx-a11y/label-has-associated-control */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import {
  BsDrawer,
  BsButton,
  BsRadio,
  BsIconFavorite,
  BsIconClose,
  useTrapFocus,
  BsDrawerPlacement,
} from '@barnstormer/react';
import { useState, useRef } from 'react';
import { Transition } from 'react-transition-group';
import classNames from 'classnames';

const options = [
  { label: 'Slide from left', value: 'left' },
  { label: 'Slide from right', value: 'right' },
];

export default function DrawerWithTransition() {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<`${BsDrawerPlacement}`>('left');
  const nodeRef = useRef(null);
  const drawerRef = useRef(null);

  useTrapFocus(drawerRef, { activeState: open });

  return (
    <>
      <fieldset>
        {options.map(({ label, value }) => (
          <label className="flex items-center my-4 cursor-pointer" key={value}>
            <BsRadio
              name="placement"
              value={value}
              checked={placement === value}
              onChange={(event) => {
                setPlacement(event.target.value as BsDrawerPlacement);
              }}
            />
            <span className="ml-2">{label}</span>
          </label>
        ))}
      </fieldset>
      <BsButton onClick={() => setOpen(true)}>Open Drawer</BsButton>

      <Transition ref={nodeRef} in={open} timeout={300}>
        {(state) => (
          <BsDrawer
            ref={drawerRef}
            open
            placement={placement}
            onClose={() => setOpen(false)}
            className={classNames(
              'bg-neutral-50 border border-gray-300 max-w-[370px] duration-500 transition ease-in-out',
              {
                'translate-x-0': state === 'entered' && placement === 'left',
                '-translate-x-full': (state === 'entering' || state === 'exited') && placement === 'left',
                '-translate-x-0': state === 'entered' && placement === 'right',
                'translate-x-full': (state === 'entering' || state === 'exited') && placement === 'right',
              },
            )}
          >
            <header className="flex items-center justify-between px-10 py-6 bg-primary-700">
              <div className="flex items-center text-white">
                <BsIconFavorite className="mr-2" /> Your favorite items
              </div>
              <BsButton
                square
                variant="tertiary"
                onClick={() => {
                  setOpen(!open);
                }}
                className="text-white"
              >
                <BsIconClose />
              </BsButton>
            </header>
            <div className="p-5 px-10">
              <p className="mb-2">
                Focus is trapped inside this Drawer and <strong>tab</strong> button cycle through{' '}
                <a href="https://docs.barnstormer.com/" className="underline text-primary-700">
                  Focusable Element
                </a>{' '}
                and another{' '}
                <a href="https://docs.barnstormer.com/" className="underline text-primary-700">
                  Focusable Element
                </a>
              </p>
              <strong>You can close Drawer by clicking outside or focus and use ESC button</strong>
            </div>
          </BsDrawer>
        )}
      </Transition>
    </>
  );
}

// #endregion source
DrawerWithTransition.getLayout = ShowcasePageLayout;
