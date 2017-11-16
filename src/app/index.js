import {
  ITEM_SELECTOR,
  LIGHTBOX_CONTAINER_SELECTOR,
} from '../config';

import Store from './vanilla_framework/services/store';
import View from './vanilla_framework/view';
import Controller from './vanilla_framework/controller';

const lbEl = document.querySelector(LIGHTBOX_CONTAINER_SELECTOR);
const photoItems = document.querySelectorAll(ITEM_SELECTOR);

photoItems.forEach((el) => {
  el.addEventListener('click', () => {
    lbEl.querySelector('.lbwojs-img').style.backgroundImage = window.getComputedStyle(el).backgroundImage;

    lbEl.classList.add('enabled');
  });
});

lbEl.addEventListener('click', () => {
  lbEl.classList.remove('enabled');
});

// TODO: refactor the lightbox showing out into a service should have a show and hide method I shouldn't be doing the enabling manually

const store = new Store();
const view = new View();

/**
 *  here we start a controller that will orchestrate the view
 *  the controller should say do a thing and the view should update based on that
 *
 * This is launched after DOMContentLoaded so we know that we can mess with the dom
 *
 * @export App
 */
export default function () {
  const controller = new Controller(store, view);

  // only really one view in this application
  controller.initView();
}
