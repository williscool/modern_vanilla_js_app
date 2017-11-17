import itemTemplate from '../templates/item.html';
/**
 * A simple class/ object to turn objects in the system into html for our view.
 *
 * In a larger app this would be a base template for shared stuff. but since this is a small app
 *
 * We can just have all of the templating here.
 *
 * Shout out to
 *
 * https://stackoverflow.com/questions/27993124/generating-html-tags-through-vanilla-javascript
 *
 * @class Template
 */
class Template {
  /**
   * Parse the template add the data.
   *
   * @static
   * @param {any} str input string
   * @param {any} data data to put in string
   * @returns {string} interpolated template string
   * @memberof Template
   */
  static parseTemplate(str, data) {
    return str.replace(/\${(.+?)}/gi, (match, parensMatch) => {
      if (data[parensMatch] !== undefined) {
        return data[parensMatch];
      }

      return match;
    });
  }

  /**
   * Takes in an item and returns the html for it
   *
   * @memberof Template
   * @param {Object} item the item to get html for
   * @param {number} index the index order in which this item appears
   * @returns {string} html
   */
  static itemHTML(item, index) {
    return Template.parseTemplate(itemTemplate, {
      index,
      'item.cssClasses': item.cssClasses(),
      'item.desc': item.desc,
      'item.backgroundImage': item.backgroundImage(),
    });
  }

  /**
   * Takes a list of items and returns the html them together
   *
   * @memberof Template
   * @param {Object} items the item to get html for
   * @param {number} [indexOffset=0] number of images already in gallery
   * @returns {string} html
   */
  static itemListHTML(items, indexOffset = 0) {
    // this is slightly complicated by the fact that on the first iteration accumulator is nothing.
    // so we just set it to an empty string
    return items.map((item, index) => Template.itemHTML(item, index + indexOffset)).join('');
  }
}

export default Template;
