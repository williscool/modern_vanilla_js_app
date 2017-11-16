
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
export default function () {
  const store = new Store();
  const view = new View();
  const controller = new Controller(store, view);

  // only really one view in this application
  controller.initView();
}
