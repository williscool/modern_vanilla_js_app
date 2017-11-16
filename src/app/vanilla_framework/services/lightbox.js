import { qs, $on } from '../utils';
import {
  LIGHTBOX_CONTAINER_SELECTOR,
} from '../../../config';

/**
 * This service encapsulates using the lightbox
 *
 * @class LightBox
 */
class LightBox {
  constructor() {
    this.$lb = qs(LIGHTBOX_CONTAINER_SELECTOR);
    this.$lbImg = qs('.lbwojs-img', this.$lb);

    // binding so clicking any part of the lightbox will make it go away
    $on(this.$lb, 'click', () => {
      this.disable();
    });
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
   * @memberof LightBox
   */
  disable() {
    this.$lb.classList.remove('enabled');
  }

  /**
   * Set the image that will display in the lighbox
   *
   * @param {string} imgCssUrl valid css for a background image
   * @memberof LightBox
   */
  setLightboxBgImageCss(imgCssUrl) {
    // gotta make sure you set a valid style here or it will just silently fail
    // YAY javascript on web!
    this.$lbImg.style.backgroundImage = imgCssUrl;
  }
}

export default LightBox;
