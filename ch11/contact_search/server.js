import fs from 'fs';
import path from 'path'
import express from 'express'
import React from 'react'
import ReactDOMServer, { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './src/components/App'
import routes from './src/routes'

import ContactStore from './src/store/ContactStore';
import { Provider } from 'react-redux';

const app = express()
const viewPath = process.env.DEVELOPMENT ? 'view' : 'build'

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, viewPath))
app.use(express.static(path.join(__dirname, 'build')))

app.get('*', (req, res) => {
    console.log(html)
    let context = {};

    const html = renderToString(
        <Provider store={ContactStore}>
            <StaticRouter location={req.url} context={context} >
                <App/>
            </StaticRouter>
        </Provider>
    )

    if(context.url) {
        res.writeHead(301, {Location: context.url})
        res.end()
    }
    return res.render('index', { html:html })
})


const port = process.env.PORT || 3000
app.listen(port, err => {
	if (err) return console.error(err)
	console.log(`Server listening at http://localhost:${port}`)
})