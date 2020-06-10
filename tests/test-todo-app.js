const test = require('tape');
const fs = require('fs');
const path = require('path');
const html = fs.readFileSynce(path.resolve(__dirname, '../index.html'));
require('jsom-global')(html);
const app = require('../lib/todo-app.js')
const id = "test-app";
