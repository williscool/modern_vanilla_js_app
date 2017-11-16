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
  }
}

export default Controller;
