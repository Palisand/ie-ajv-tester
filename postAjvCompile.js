#!/usr/bin/env node

const fs = require('fs');
const filename = 'src/' + process.argv[2];

fs.readFile(filename, 'utf-8', (err, data) => {
  if (err) throw err;
  fs.writeFile(filename, `/* eslint-disable */\n${
    data.split('\n').slice(0, -1).join('\n')
  }\nexport default {validate};\n`, (err) => {
    if (err) throw err;
  });
});
