
import Template from './template';
import Lightbox from './services/lightbox';
import { qs, $delegate, $observeAdditions } from './utils';
import {
  ITEM_SELECTOR,
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
    this.lbService = new Lightbox();

    this.attachImagestoGallery();
    this.attachLightboxToGalleryImages();
  }

  /**
   * add the images to the gallery as they come into the dom
   *
   * @memberof View
   */
  attachImagestoGallery() {
    $observeAdditions(this.$container, ITEM_SELECTOR, (el) => {
      const cssBgImgUrl = el.getAttribute('data-image-css-url');
      el.style.backgroundImage = cssBgImgUrl; // eslint-disable-line no-param-reassign
    });
  }

  /**
   * open the lightbox with the images
   *
   * @memberof View
   */
  attachLightboxToGalleryImages() {
    $delegate(this.$container, ITEM_SELECTOR, 'click', (target) => {
      const el = target;
      const itemIndex = el.getAttribute('data-item-id');

      this.lbService.setLightboxItemToIndex(itemIndex);
      this.lbService.enable();
    });
  }

  showItems(items) {
    // used to insertAdjacentHTML to add the photos into the dom
    // this.$container.insertAdjacentHTML('beforeend', Template.itemListHTML(items));

    // now uses innerhtml since they will get updated by api
    this.$container.innerHTML = Template.itemListHTML(items);
  }
}

export default View;
