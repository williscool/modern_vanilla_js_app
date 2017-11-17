/**
 * querySelector wrapper
 *
 * @param {string} selector Selector to query
 * @param {Element} [scope] Optional scope element for the selector
 *
 * @returns {Element} either the element or undefined if not found
 */
export function qs(selector, scope) {
  return (scope || document).querySelector(selector);
}

/**
 * addEventListener wrapper
 *
 * @param {Element|Window} target Target Element
 * @param {string} type Event name to bind to
 * @param {Function} callback Event callback
 * @param {boolean} [capture] Capture the event
 */
export function $on(target, type, callback, capture) {
  target.addEventListener(type, callback, !!capture);
}

/**
 * Attach a handler to an event for all elements matching a selector.
 *
 * @param {Element} target Element which the event must bubble to
 * @param {string} selector Selector to match
 * @param {string} type Event type i.e. "click"
 * @param {Function} handler Function called when the event bubbles to target
 *                           from an element matching selector
 * @param {boolean} [capture] Capture the event
 */
export function $delegate(target, selector, type, handler, capture) {
  const dispatchEvent = (event) => {
    const targetElement = event.target;
    const potentialElements = target.querySelectorAll(selector);
    let i = potentialElements.length;

    while (i--) { // eslint-disable-line no-plusplus
      if (potentialElements[i] === targetElement) {
        handler(targetElement, event);
        break;
      }
    }
  };

  $on(target, type, dispatchEvent, !!capture);
}

/**
 * Watch for addtions of matching node types
 *
 * TODO:
 * answer this for 2017 now that matches is widely supported you can use that
 * https://stackoverflow.com/questions/9778962/handler-for-dynamically-created-dom-nodes-as-they-are-inserted
 *
 * https://caniuse.com/#search=matches
 *
 * @export
 * @param {Element} target root element to observe from
 * @param {any} selector dom selector for node
 * @param {any} callback callback to run on add back
 */
export function $observeAdditions(target, selector, callback) {
  const observer = new MutationObserver(((mutations) => {
    mutations.forEach((mutation) => {
      const nodes = [...mutation.addedNodes];
      nodes.filter(node => node instanceof HTMLElement && node.matches(selector)).forEach((node) => {
        callback(node);
      });
    });
  }));

  observer.observe(target, {
    childList: true,
    subtree: true,
    attributes: false,
    characterData: false,
  });
}
