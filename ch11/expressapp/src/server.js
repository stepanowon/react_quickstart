import express from 'express';
import App from '../client/App';
import ReactDOMServer, { renderToString } from 'react-dom/server'
import React from 'react';

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {

    let html = renderToString(<App title="React SSR Test!!" />)

    res.render('index', {
        title : 'React.js',
        htmldata : html
    })
})

app.listen(8080, () => {
    console.log(`${port}에서 서버 실행중!!!`);
})