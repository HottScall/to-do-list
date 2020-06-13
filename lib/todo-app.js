/**
  initial_module takes 2 keys and no methods
  it is used both as the "initial model" for when the app mounts
  and as a reset button when all the items are deleted at once

*/

var initial_module = {
  todos: [],
  hash: "#/"
};

/**
  'update' transforms the model based on the action
  * @param {String} action - the desired action to perform on the model
  * @param {Object} model - the App's current model or state
  * @param {String} data - data we want to apply to the item i.e item title.
  * @return {Object} new_model - the transformed model
*/

function update(action, model, data) {
  var new_model = JSON.parse(JSON.stringify(model)); // "clone the model"
  switch (
    action // add an action (String) which runs a switch
  ) {
    case "ADD":
      new_model.todos.push({
        id: model.todos.length + 1,
        title: data,
        done: false
      });
      break;
    case "TOGGLE":
      new_model.todos.forEach(function(item) {
        if (item.id === data) {
          // this should only match one item
          item.done = !item.done; // invert state of done e,g false >> true
        }
      });
      break;
    default:
      // if the action is unrecognised or undefinied....
      return model; // .... return model unmodified
  }
  return new_model;
}

/* if require is available it means we are in Node.js Land i.e Testing */
/* istanbul ignore next */

if (typeof require != "undefined" && this.window !== this) {
  var {
    a,
    button,
    div,
    empty,
    footer,
    input,
    h1,
    header,
    label,
    li,
    mount,
    route,
    section,
    span,
    strong,
    text,
    ul
  } = require("./elmish.js");
}

/**
 * `render_item` creates an DOM "tree" with a single To Do List item
 * using the Elmish DOM functions (li, div, input, label and button)
 * returns an '<li>' HTML element with a nested <div> which inturn has the:
 * <input type=checkbox> which lets users toggle the status of the item
 * <label> which displays the to do list item in a <text> node
 * <button class="destory"> lets people delete a to do item
 * @param {Object} item the to item object
 * @param {Object} <li> DOM Tree which is nested in the <ul>
 * @example
 *  // returns <li> DOM Element with <div>, <input>, <label>, & <button> nested
 * var DOM = render_item({id: 1, title: "Build to do list app", done: false})
 */

function render_item(item) {
  return li(
    [
      "data-id=" + item.id,
      "id=" + item.id,
      item.done ? "class = completed" : ""
    ],
    [
      div(
        ["class=view"],
        [
          input(
            ["class=toggle", "type=checkbox", item.done ? "checked=true" : ""],
            []
          ),
          label([], [text(item.title)]),
          button(["class=destroy"])
        ]
      )
    ]
  );
}

if (typeof "module" !== "undefined" && module.exports) {
  module.exports = {
    model: initial_module,
    update: update,
    render_item: render_item
  };
}
