import React from 'react';
import { BsLinkVariant } from '@barnstormer/vue';
import { mount, useComponent } from '../../utils/mount';
import BsLinkBaseObject from './BsLink.PageObject';

const { vue: BsLinkVue, react: BsLinkReact } = useComponent('BsLink');

describe('BsLink', () => {
  const slotDefaultContent = 'link content';
  const page = () => new BsLinkBaseObject('link');

  type InitializeComponentParams = {
    variant?: BsLinkVariant;
    href?: string;
    className?: string;
    tag?: string;
    slotDefault?: boolean;
  };

  const initializeComponent = ({
    variant = BsLinkVariant.primary,
    href = '',
    className,
    tag,
    slotDefault = true,
  }: InitializeComponentParams = {}) => {
    return mount({
      vue: {
        component: BsLinkVue,
        props: {
          href,
          tag,
          class: className,
          variant,
        },
        slots: {
          ...(slotDefault && { default: () => slotDefaultContent }),
        },
      },
      react: (
        <BsLinkReact as={tag} href={href} className={className} variant={variant}>
          {slotDefault ? slotDefaultContent : undefined}
        </BsLinkReact>
      ),
    });
  };

  it('initial state', () => {
    initializeComponent({});

    page().contains(slotDefaultContent).makeSnapshot();
  });

  describe('when prop variant is set to ', () => {
    Object.values(BsLinkVariant).forEach((componentVariant) => {
      describe(`${componentVariant}`, () => {
        it(`should render correct ${componentVariant} variant`, () => {
          initializeComponent({ variant: componentVariant });

          page().makeSnapshot();
        });
      });
    });
  });

  describe('when href prop has a value', () => {
    it('should has href with prop value', () => {
      const href = '/home';
      initializeComponent({ href });

      page().hasHref(href);
    });
  });

  describe('when no default slot', () => {
    it('should be without content', () => {
      initializeComponent({ slotDefault: false });

      page().haveNoContent();
    });
  });

  describe('when prop tag', () => {
    it('should render as <a> by default', () => {
      initializeComponent();

      page().hasTag('A');
    });

    it('should render as <div> tag', () => {
      initializeComponent({ tag: 'div' });

      page().hasTag('DIV');
    });
  });

  describe('when class prop has a value', () => {
    it('should attach class to component root element', () => {
      const className = 'custom-class';
      initializeComponent({ className });

      page().hasClass(className);
    });
  });
});
