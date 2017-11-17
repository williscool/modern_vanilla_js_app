import { $on } from './utils';
/**
 * The controller orchestrates the state of the application between the
 *
 * store datalayed
 *
 * and
 *
 * the view writting stuff out to the dom layer
 *
 * this file could be the base controller from which others extend if this were a large app
 * since it is one single page though we will simply have all controller level logic here
 *
 * @class Controller
 */
class Controller {
  constructor(store, view) {
    this.store = store;
    this.view = view;
  }

  initView() {
    this.view.showItems(this.store.getAllItems());

    $on(window, 'load', () => {
      const timeoutID = window.setTimeout(() => {
        this.store.addItemsFromApi(() => {
          // doing the reverse will make it a bit disorienting but will make it obvious we added stuff from the api
          this.view.showItems(this.store.getAllItems().reverse());
          window.clearTimeout(timeoutID);
        });
      }, 1500);
    });
  }
}

export default Controller;
