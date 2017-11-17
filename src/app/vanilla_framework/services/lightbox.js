import { qs, $on } from '../utils';
import {
  LIGHTBOX_CONTAINER_SELECTOR,
} from '../../../config';

/**
 * This service encapsulates using the lightbox
 *
 *
 * TODO: factor out this component's html into a template
 *
 * @class LightBox
 */
class LightBox {
  constructor() {
    this.$lb = qs(LIGHTBOX_CONTAINER_SELECTOR);
    this.$lbImg = qs('.lbwojs-img', this.$lb);

    this.currentItemIndex = 0;

    // the arrows themselves could be sub components with a direction
    this.$lbLeftArrow = qs('.arrow.left', this.$lb);
    this.$lbRightArrow = qs('.arrow.right', this.$lb);

    this.store = window.app.registry.store;

    // binding so clicking any part of the lightbox will make it go away
    $on(this.$lb, 'click', (e) => {
      // if what is clicked IS NOT the arrows or their children. then hide the lightbox
      if (!this.arrowsOrChildren(e.target)) {
        this.disable();
      }
    });

    // left arrow binding
    $on(this.$lbLeftArrow, 'click', () => {
      this.previousItem();
    });

    // right arrow binding
    $on(this.$lbRightArrow, 'click', () => {
      this.nextItem();
    });

    // init lightbox
    this.setLightboxItemToIndex(this.currentItemIndex);
  }

  /**
   * Check if what we clicked on was the arrow or inside the arrow
   *
   * TODO: would defintely refactor the innards of checking if its a domnode or its children into the library
   *
   * @param {Element} target input element
   * @returns {boolean} is the input the arrow element or one of its childern?
   * @memberof LightBox
   */
  arrowsOrChildren(target) {
    const targetOneOfTheArrows = target === this.$lbLeftArrow || target === this.$lbRightArrow;

    // eslint-disable-next-line max-len
    const targetAnArrowsChild = [...this.$lbLeftArrow.children].includes(target) || [...this.$lbRightArrow.children].includes(target);
    return targetOneOfTheArrows || targetAnArrowsChild;
  }

  /**
   * Show the lightbox
   *
   * @memberof LightBox
   */
  enable() {
    this.$lb.classList.add('enabled');
  }

  /**
   * Hide the lightbox
   *
   * reset arrows
   *
   * @memberof LightBox
   */
  disable() {
    this.$lb.classList.remove('enabled');
    this.$lbLeftArrow.classList.remove('hide');
    this.$lbRightArrow.classList.remove('hide');
  }

  /**
   * Show the next item in lightbox
   *
   * @memberof LightBox
   */
  nextItem() {
    this.setLightboxItemToIndex(this.currentItemIndex += 1);
  }

  /**
   * Show the previous item in the lightbox
   *
   * @memberof LightBox
   */
  previousItem() {
    this.setLightboxItemToIndex(this.currentItemIndex -= 1);
  }

  /**
   * Set the image that will display in the lightbox
   *
   * @param {string} imgCssUrl valid css for a background image
   * @memberof LightBox
   */
  setLightboxBgImageCss(imgCssUrl) {
    // gotta make sure you set a valid style here or it will just silently fail
    // YAY messing with styles in javascript on web!
    this.$lbImg.style.backgroundImage = imgCssUrl;
  }

  /**
   * Set the image that will display in the lightbox
   *
   * @param {string} inputIndex index of item in store to show in lightbox
   * @memberof LightBox
   */
  setLightboxItemToIndex(inputIndex) {
    const index = parseInt(inputIndex, 10);
    this.currentItemIndex = index;

    const item = this.store.getAllItems()[index];
    const lastIndex = this.store.getAllItems().length - 1;

    if (item) {
      this.setLightboxBgImageCss(item.backgroundImage());

      if (index === 0) {
        // hide left button only show right
        this.$lbLeftArrow.classList.add('hide');
        this.$lbRightArrow.classList.remove('hide');
      } else if (index === lastIndex) {
        // hide right show left
        this.$lbLeftArrow.classList.remove('hide');
        this.$lbRightArrow.classList.add('hide');
      } else {
        // show both arrows
        this.$lbLeftArrow.classList.remove('hide');
        this.$lbRightArrow.classList.remove('hide');
      }
    } else {
      // invalid index you could for instance hide the lightbox here
    }
  }
}

export default LightBox;
