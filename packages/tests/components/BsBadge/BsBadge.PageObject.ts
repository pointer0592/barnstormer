import { BasePage } from '../../utils/BasePage';

export default class BsBadgeBaseObject extends BasePage {
  hasContent(content: string | number) {
    this.container.contains(content);
    return this;
  }

  hasNoContent() {
    this.container.should('be.empty');
    return this;
  }
}
