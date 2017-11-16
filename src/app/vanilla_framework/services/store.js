import { images } from '../../mocks';
import Item from '../../models/item';

/**
 * The store is basically a service that you can get data from and use them around the rest of the application
 *
 * @class Store
 */
class Store {
  constructor({ name = 'items', callback } = {}) {
    this.name = name;
    this.items = images; // items will be set by the api call in the futrue

    // this will be more useful when we are getting the items from the api
    // we will not invoke it until the items populated from the api
    if (callback) callback();
  }

  /**
   * This method gets our gallery items and turns them into easy to use objects that will be used in the rest of the application.
   *
   * This would be refactored in a way to allow for arbitrary app types in a larger app
   *
   * TODO: this will be an api call later
   *
   * @returns {array} itemlist
   * @memberof Store
   */
  getAllItems() {
    // io === item object
    return this.items.map(io => new Item({ imageUrl: io.imgSrc, desc: io.desc, sizeClass: io.sizeClass }));
  }
}

export default Store;
