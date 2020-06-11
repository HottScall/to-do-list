/**
  initial_module takes 2 keys and no methods
  it is used both as the "initial model" for when the app mounts
  and as a reset button when all the items are deleted at once

*/

var initial_module = {
  todos: [],
  hash: '#/'
}


if(typeof 'module' !== 'undefined' && module.exports){
  module.exports = {
    model: initial_module
  }
}
