const test = require('tape');
const fs = require('fs');
const path = require('path');       // so we can open files cross-platform
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'));
require('jsdom-global')(html);      // https://github.com/rstacruz/jsdom-global
const app = require('../lib/todo-app.js'); // functions to test
const id = 'test-app';              // all tests use 'test-app' as root element

test('todo `model` (Object) has desired keys', function (t) {
  const keys = Object.keys(app.model);
  t.deepEqual(keys, ['todos', 'hash'], "`todos` and `hash` keys are present.");
  t.true(Array.isArray(app.model.todos), "model.todos is an Array")
  t.end();
});

test('todo `update` default should return model unmodified', function (t){
  const model = JSON.parse(JSON.stringify(app.model));
  const unmodified_model = app.update('UNKNOWN_UPDATE', model)
  t.deepEqual(model, unmodified_model, "model returned unmodified")
  t.end()
})

test('add a new todo via the model.todos array', function (t){
  const model = JSON.parse(JSON.stringify(app.model));
  t.equal(model.todos.length, 0, "initial model.todos.length is 0");
  const updated_model = app.update('ADD', model, "Add new todo")
  const expected = {id: 1, title: "Add new todo", done: false}
  t.equal(updated_model.todos.length, 1, "To do item added")
  t.deepEqual(updated_model.todos[0], expected, "To do list item added")
  t.end()
})

test('toggle will turn `done` from false to true', function(t){
  const model = JSON.parse(JSON.stringify(app.model));
  const model_with_todo = app.update('ADD', model, "toggle a to do list item");
  const item = model_with_todo.todos[0];
  const model_todo_done = app.update('TOGGLE', model_with_todo, item.id);
  const expected = {id: 1, title: "Add new todo", done: true}
  t.deepEqual(model_todo_done.todos[0], expected, "Todo list item toggled.");
  t.end()
})
