const test = require("tape");
const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(
  path.resolve(__dirname, "../examples/todo-list/index.html")
);
require("jsdom-global")(html);
const elmish = require("../examples/todo-list/elmish.js");
const id = "test-app";
