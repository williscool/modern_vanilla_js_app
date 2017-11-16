import {
  ITEM_SELECTOR,
  LIGHTBOX_CONTAINER_SELECTOR,
} from '../config';

/*
import Template from './vanilla_framework/template';
import View from './vanilla_framework/view';
import Store from './vanilla_framework/services/store';
*/

// import { $on, $delegate } from './app/helpers';

// TODO: refactor these out into item objects

// TODO: this should have a show and hide method I shouldn't be doing the enabling manually

// here I need to start a controller that will orchestrate the view

// the controller should say do a thing and the view should update based on that

// use insertAdjacentHTML to add the photo into the dom

// we can have .grid be the root that the app lives in

// then we can just

// add api data, do 1 or 2 unit tests for items, do an acceptance test and we are done

/*
const store = new Store();

const template = new Template();
const view = new View(template);
*/

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
