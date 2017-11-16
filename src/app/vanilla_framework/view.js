
import Template from './template';
import { qs } from './helpers';
import {
  GRID_SELECTOR,
} from '../../config';

/**
 * The View has template and uses it to interact with the DOM.
 *
 * to encapulate that here and not have that all over our application
 * @class View
 */
class View {
  constructor() {
    this.$container = qs(GRID_SELECTOR);
  }

  showItems(items) {
    // use insertAdjacentHTML to add the photos into the dom
    this.$container.insertAdjacentHTML('beforeend', Template.itemListHTML(items));
  }
}

export default View;
