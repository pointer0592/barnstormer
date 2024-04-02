import React from 'react';
import { BsBadgeVariant, BsBadgePlacement } from '@barnstormer/react';
import { mount, Wrapper, useComponent } from '../../utils/mount';

const { vue: BsBadgeVue, react: BsBadgeReact } = useComponent('BsBadge');
import BsBadgeBaseObject from './BsBadge.PageObject';

describe('BsBadge', () => {
  const page = () => new BsBadgeBaseObject('badge');

  type InitializeComponentParams = {
    content?: string | number;
    variant?: BsBadgeVariant;
    max?: number;
    placement?: BsBadgePlacement;
  };

  const initializeComponent = ({
    content,
    variant = BsBadgeVariant.standard,
    max = 99,
    placement = BsBadgePlacement['top-left'],
  }: InitializeComponentParams = {}) => {
    return mount({
      vue: {
        component: BsBadgeVue,
        props: {
          content,
          variant,
          max,
          placement,
        },
      },
      react: <Wrapper component={BsBadgeReact} content={content} variant={variant} max={max} placement={placement} />,
    });
  };

  it('initial state', () => {
    initializeComponent();
    page().makeSnapshot();
  });

  describe('when prop variant is set to ', () => {
    Object.values(BsBadgeVariant).forEach((componentVariant) => {
      describe(`${componentVariant}`, () => {
        it(`should render correct ${componentVariant} variant`, () => {
          initializeComponent({ variant: componentVariant });

          page().makeSnapshot();
        });
      });
    });
  });

  describe('when prop placement is set to ', () => {
    Object.values(BsBadgePlacement).forEach((componentPlacement) => {
      describe(`${componentPlacement}`, () => {
        it(`should render correct ${componentPlacement} variant`, () => {
          initializeComponent({ placement: componentPlacement });

          page().makeSnapshot();
        });
      });
    });
  });

  describe('when prop max is set to', () => {
    const maxValue = Math.floor(Math.random() * (99 - 20) + 22);
    it(`should render content within ${maxValue}`, () => {
      initializeComponent({ max: maxValue, content: 10 });

      page().hasContent(10).makeSnapshot();
    });
  });

  describe('when prop content is bigger than max value', () => {
    const maxValue = Math.floor(Math.random() * 20);
    it(`should render max value: ${maxValue}`, () => {
      initializeComponent({ max: maxValue, content: 40 });

      page().hasContent(maxValue).makeSnapshot();
    });
  });

  describe('when prop content is set to string', () => {
    it(`should render the passed string content `, () => {
      initializeComponent({ content: 'test' });

      page().hasContent('test').makeSnapshot();
    });
  });

  describe('when prop content is set to number', () => {
    it(`should render the passed number content `, () => {
      initializeComponent({ content: 10 });

      page().hasContent(10).makeSnapshot();
    });
  });

  describe('when prop variant is set to dot', () => {
    it(`should not render any content`, () => {
      initializeComponent({ variant: BsBadgeVariant.dot, content: 10 });

      page().hasNoContent().makeSnapshot();
    });
  });
});
