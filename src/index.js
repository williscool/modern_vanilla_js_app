import 'babel-polyfill';
import './styles/main.css';
import { APP_CONTAINER_SELECTOR } from './config';

// DOM is ready so we can do stuff with it
document.addEventListener('DOMContentLoaded', () => {
  const containerRoot = document.querySelector(APP_CONTAINER_SELECTOR);
  containerRoot.innerHTML = '<h1>Hello from Webpack!</h1>';

  // TODO: refactor these out into item objects

  const itemSelector = '.item';
  const lightboxContainerSelector = '.lbwojs';

  // TODO: this should have a show and hide method I shouldn't be doing the enabling manually
  const lbEl = document.querySelector(lightboxContainerSelector);

  const photoItems = document.querySelectorAll(itemSelector);

  photoItems.forEach((el) => {
    el.addEventListener('click', () => {
      lbEl.querySelector('.lbwojs-img').style.backgroundImage = window.getComputedStyle(el).backgroundImage;

      lbEl.classList.add('enabled');
    });
  });

  lbEl.addEventListener('click', () => {
    lbEl.classList.remove('enabled');
  });
});
