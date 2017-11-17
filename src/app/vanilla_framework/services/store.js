import { images } from '../../mocks';
import Item from '../../models/item';

const PHOTO_API_URL = 'https://api.unsplash.com/search/photos';

/**
 * The store is basically a service that you can get data from and use them around the rest of the application
 *
 * @class Store
 */
class Store {
  constructor({ name = 'items' } = {}) {
    this.name = name;
    this.items = [];

    this.addMockItems();
  }

  /**
   * This method just turns the the mock gallery items them into easy to use objects that will be used in the rest of the application.
   *
   * This would be refactored in a way to allow for arbitrary app types in a larger app
   *
   * @memberof Store
   */
  addMockItems() {
    // io === item object
    const newItems = images.map(io => new Item({ imageUrl: io.imgSrc, desc: io.desc, sizeClass: io.sizeClass }));
    this.items = this.items.concat(newItems);
  }
  /**
   * This method gets our gallery items
   *
   * This would be refactored in a way to allow for arbitrary app types in a larger app
   *
   * @returns {array} itemlist
   * @memberof Store
   */
  getAllItems() {
    // io === item object
    return this.items;
  }

  /**
   * This method gets more gallery items from the api on load
   *
   * Since the gallery view and the lighbox are designed to get all their items from the store
   *
   * Once the items are returned from the api and added to items things just work automagicall lol
   *
   * Again This would be refactored in a way to allow for arbitrary app types in a larger app
   *
   * @param {function} callback callback for when api items are added
   * @memberof Store
   */
  addItemsFromApi(callback) {
    const headers = new Headers();
    const url = new URL(PHOTO_API_URL);

    headers.append('Authorization', 'Client-ID b7f353f0e1406c19568e23283e786d628a3c176a450757a506aa64ae769ac8a4');

    url.searchParams.set('query', 'islands');
    url.searchParams.set('per_page', '15');

    fetch(url.toString(), {
      method: 'GET',
      mode: 'cors',
      redirect: 'follow',
      headers,
    }).then(respObj => respObj.json()).then((payload) => {
      const newItems = payload.results.map((p, index) => {
        const szClasses = ['', 'item--medium', 'item--medium', 'item--full'];
        return new Item({
          imageUrl: p.urls.regular, desc: p.user.location, sizeClass: szClasses[index % szClasses.length],
        });
      });
      this.items = this.items.concat(newItems);
      callback();
    });
  }
}

export default Store;
