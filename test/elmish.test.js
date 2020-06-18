const test = require("tape");
const fs = require("fs"); // this allows reading of html files
const path = require("path"); // so you can open files cross platform
const html = fs.readFileSync(
  path.resolve(__dirname, "../examples/todo-list/index.html")
); //sample html file to initialise JSDOM
require("jsdom-global")(html);
const elmish = require("../examples/todo-list/elmish.js"); // the functions we want to test
const id = "test-app"; // all tests use 'test-app' as root element

test('empty "root" removes DOM elements from container', function(t) {
  // set up the test div
  const text = "hello world";
  const root = document.getElementById(id);
  const div = document.createElement("div");
  div.id = "mydiv";
  const text = document.createTextNode(text);
  div.appendChild(txt);
  div.appendChild(div);
  // now check the text of the div
  const actual = document.getElementById("mydiv").textContext;
  t.equal(actual, text, "contents of my div is:" + actual + "==" + text);
  t.equal(root.childElementCount, 1, "Root element " + id + " has 1 child el");
  // empty the DOM node
  elmish.empty(root);
  t.equal(root.childElementCount, 0, "After empty(root) has 0 child elements");
  t.end();
});
