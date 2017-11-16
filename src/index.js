import 'babel-polyfill';
import './styles/main.css';

import App from './app';

/**
 * Welcome to the Vanilla Js Photos App
 *
 * This an MVC(ish) application
 *
 * M (will be the layer that works with api and potentially storage to get images)
 * V (our html page will be our view. Could just as easily be built from strings in a js object/class but I think that is what html is and is for)
 * C (our controller will manage the connection of data and state between our view and model)
 *
 * This particular application only really has one view (the index page)
 *
 * Also this file will just boot our application after the dom is loaded
 *
 * @author William Harris
 * @module Index
 */

// DOM is ready so we can do stuff with it
document.addEventListener('DOMContentLoaded', () => {
  // setting window.app is a pretty standard convienece thing people do
  // TODO: change this to new once its an object
  window.app = App();
});
