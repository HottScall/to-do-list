/**
  initial_module takes 2 keys and no methods
  it is used both as the "initial model" for when the app mounts
  and as a reset button when all the items are deleted at once

*/

var initial_module = {
  todos: [],
  hash: '#/'
}

/**
  'update' transforms the model based on the action
  * @param {String} action - the desired action to perform on the model
  * @param {Object} model - the App's current model or state
  * @param {String} data - data we want to apply to the item i.e item title.
  * @return {Object} new_model - the transformed model
*/

function update(action, model, data){
  var new_model = JSON.parse(JSON.stringify(model)) // "clone the model"
  switch (action){ // add an action (String) which runs a switch
    case 'ADD':
      new_model.todos.push({
        id: model.todos.length + 1,
        title: data,
        done: false
      });
      break;
    case 'TOGGLE':
      new_model.todos.forEach(function (item){
        if(item.id === data){
          item.done = !item.done;
        }
      })
      break;
    default:      // if the action is unrecognised or undefinied....
    return model; // .... return model unmodified
  }
  return new_model;
}


if(typeof 'module' !== 'undefined' && module.exports){
  module.exports = {
    model: initial_module,
    update: update
  }
}
