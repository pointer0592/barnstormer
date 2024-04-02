import { BasePage } from '../../utils/BasePage';

export default class BsLoaderLinearSizesBaseObject extends BasePage {
  hasAriaLabel(ariaLabel) {
    this.container.should('have.attr', 'aria-label', ariaLabel);
    return this;
  }
}
