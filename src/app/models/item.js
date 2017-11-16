import {
  ITEM_CLASS,
} from '../../config';

/**
 * Class to represent an item in our gallary
 *
 * Will always be photos in this case
 *
 * @class Item
 */
class Item {
  constructor({ imageUrl, desc, sizeClass } = {}) {
    this.imageUrl = imageUrl;
    this.desc = desc;
    this.sizeClass = sizeClass;
  }

  /**
   * Css classes
   *
   * @returns {String} css class names for the item
   * @memberof Item
   */
  cssClasses() {
    return [ITEM_CLASS, this.sizeClass].join(' ');
  }

  /**
   * Background image css property for the item
   *
   * @returns {String} css classes
   * @memberof Item
   */
  backgroundImage() {
    return `url(${this.imageUrl})`;
  }
}

export default Item;
