import React from 'react';
import { BsListItemSize } from '@barnstormer/vue';
import { mount, useComponent } from '../../utils/mount';
import BsListItemBaseObject from './BsListItem.PageObject';

const { vue: BsListItemVue, react: BsListItemReact } = useComponent('BsListItem');
const { vue: BsIconCheckCircleVue, react: BsIconCheckCircleReact } = useComponent('BsIconCheckCircle');
const { vue: BsIconCircleVue, react: BsIconCircleReact } = useComponent('BsIconCircle');

const defaultSlotContent = 'Label';

describe('BsListItem', () => {
  let disabled: boolean;
  let size: BsListItemSize;
  let selected: boolean;
  let slotPrefix: boolean;
  let slotSuffix: boolean;
  let childrenTag: string | React.ElementType;
  let onChangeSpy: Cypress.Agent<sinon.SinonSpy>;

  const page = () => new BsListItemBaseObject('list-item');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: BsListItemVue,
        global: {
          components: {
            BsIconCheckCircleVue,
            BsIconCircleVue,
          },
        },
        props: {
          disabled,
          size,
          selected,
          childrenTag,
          onClick: onChangeSpy,
        },
        slots: {
          default: defaultSlotContent,
          ...(slotPrefix && { prefix: '<BsIconCheckCircleVue/>' }),
          ...(slotSuffix && { suffix: '<BsIconCircleVue/>' }),
        },
      },
      react: (
        <BsListItemReact
          disabled={disabled}
          selected={selected}
          size={size}
          childrenTag={childrenTag}
          slotPrefix={slotPrefix && <BsIconCheckCircleReact />}
          slotSuffix={slotSuffix && <BsIconCircleReact />}
          onClick={onChangeSpy}
        >
          {defaultSlotContent}
        </BsListItemReact>
      ),
    });
  };

  beforeEach(() => {
    cy.viewport(300, 300);
  });

  afterEach(() => {
    size = BsListItemSize.base;
  });

  it('initial state', () => {
    initializeComponent();

    page().makeSnapshot();
  });

  describe('when prop disabled=true', () => {
    before(() => (disabled = true));
    after(() => (disabled = false));
    it(`should render as disabled`, () => {
      initializeComponent();

      page().isDisabled();
      page().makeSnapshot();
    });
  });

  describe('when prop size is set to ', () => {
    Object.values(BsListItemSize).forEach((componentSize) => {
      describe(`${componentSize}`, () => {
        it(`should render correct ${componentSize} size`, () => {
          size = componentSize;
          initializeComponent();

          page().makeSnapshot();
        });
      });
    });
  });

  describe('when default slot/children is filled in', () => {
    it(`should render with label`, () => {
      initializeComponent();

      page().hasContent('Label').makeSnapshot();
    });
  });

  describe('when only prefix', () => {
    before(() => (slotPrefix = true));
    after(() => (slotPrefix = false));
    it(`should render icon in prefix slot`, () => {
      initializeComponent();

      page().hasPrefix().makeSnapshot();
    });
  });

  describe('when only suffix', () => {
    before(() => (slotSuffix = true));
    after(() => (slotSuffix = false));
    it(`should render icon in suffix slot`, () => {
      initializeComponent();

      page().hasSuffix().makeSnapshot();
    });
  });

  describe('when childrenTag is set to div', () => {
    before(() => (childrenTag = 'div'));
    after(() => (childrenTag = 'span'));
    it(`should render child as div tag`, () => {
      initializeComponent();

      page().childrenHaveTag('DIV').makeSnapshot();
    });
  });

  describe('when component is clicked', () => {
    before(() => (onChangeSpy = cy.spy()));

    it('should invoke onChangeSpy', () => {
      initializeComponent();

      page().click();
      cy.then(() => {
        expect(onChangeSpy);
        page().makeSnapshot();
      });
    });
  });
});
