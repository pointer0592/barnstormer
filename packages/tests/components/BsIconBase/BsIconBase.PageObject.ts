import { BasePage } from '../../utils/BasePage';

export default class BsIconBasePageObject extends BasePage {
  hasXmlNamespace(namespace: string) {
    this.container.should('have.attr', 'xmlns', namespace);
    return this;
  }

  containsPathHTML(pathHTML: string) {
    this.container.should('have.html', pathHTML);
    return this;
  }
}
