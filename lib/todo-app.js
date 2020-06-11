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
  switch (action){
    default:
    return model;
  }
}


if(typeof 'module' !== 'undefined' && module.exports){
  module.exports = {
    model: initial_module,
    update: update
  }
}
