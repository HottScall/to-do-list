/**
 * `empty` deletes all the DOM elements from within a specific "root" element.
 * it is used to erase the DOM before re-rendering the app.
 * This is the *fastest* way according to: stackoverflow.com/a/3955238/1148249
 * @param  {Object} node the exact ("parent") DOM node you want to empty
 * @example
 * // returns true (once the 'app' node is emptied)
 * empty(document.getElementById('app'));
 */
function empty(node) {
  while (node.lastChild) {
    node.removeChild(node.lastChild);
  }
}

/* module.exports is needed to run the functions using Node.js for testing! */
/* istanbul ignore next */
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    empty: empty // export the `empty` function so we can test it.
  };
} else {
  init(document);
}
