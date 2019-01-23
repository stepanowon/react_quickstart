const path = require('path');
const fs = require('fs');
const htmlPath = path.resolve('build/index.html');
const ejsPath = path.resolve('build/index.ejs');

// index.html 파일을 읽어서...EJS 표현식을 추가한다.
let html = fs.readFileSync(htmlPath, 'utf8');
let ejs = html.replace('<div id="root">', '<div id="root"><%- html %>');

// EJS 표현식을 포함한 문자열을 다시 build/index.ejs 파일에 기록한다.
fs.writeFileSync(ejsPath, ejs, 'utf8');

// index.html은 삭제한다.
fs.unlinkSync(htmlPath);
console.log("index.html을 index.ejs로 변환 완료!!\r\n");