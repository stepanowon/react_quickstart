/**
 * Custom Node script to generate index.ejs based on the index.html file.
 */

const path = require('path');
const fs = require('fs');
const htmlPath = path.resolve('build/index.html');
const ejsPath = path.resolve('build/index.ejs');

// PROGRESS start
console.log('Start generating an index.ejs based on the index.html...');

// READ index.html
let html = fs.readFileSync(htmlPath, 'utf8');
let ejs = html.replace('<div id="root">', '<div id="root"><%- html %>');
console.log('Reading the index.html file completed! Proceeding to writing...')

// WRITE index.ejs
fs.writeFileSync(ejsPath, ejs, 'utf8');
console.log('The index.ejs has been saved! Deleting the existing index.html...');

// DELETE index.html
fs.unlinkSync(htmlPath);
console.log("The Process completed!\r\n");