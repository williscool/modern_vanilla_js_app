
import Store from './vanilla_framework/services/store';
import View from './vanilla_framework/view';
import Controller from './vanilla_framework/controller';

/**
 *  here we start a controller that will orchestrate the view
 *  the controller should say do a thing and the view should update based on that
 *
 * This is launched after DOMContentLoaded so we know that we can mess with the dom
 *
 * a nice theme you will see throughout the app over the todoMVC version
 * is not needing to do a bunch of .bind calls because arrow functions
 *
 * @export App
 */

class App {
  constructor() {
    return this;
  }

  init() {
    // this is the  central place to find other objects in the system
    // this could be its own class object
    this.registry = {};

    const store = new Store();
    this.registry.store = store;

    const view = new View();

    const controller = new Controller(store, view);
    this.registry.controller = controller;
    // only really one view in this application
    this.registry.controller.initView();
  }
}

export default App;
