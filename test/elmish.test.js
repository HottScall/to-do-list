const test = require("tape");
const fs = require("fs"); // this allows reading of html files
const path = require("path"); // so you can open files cross platform
const html = fs.readFileSync(
  path.resolve(__dirname, "../examples/todo-list/index.html")
); //sample html file to initialise JSDOM
require("jsdom-global")(html);
const elmish = require("../examples/todo-list/elmish.js"); // the functions we want to test
const id = "test-app"; // all tests use 'test-app' as root element
