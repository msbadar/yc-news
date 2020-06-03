import React from "react";
import express from "express";
import path from "path"
import fs from "fs";
import { renderToString } from "react-dom/server";
import Home from '../src/pages/home';
import createStore from "../src/create-store";
import { Provider } from "react-redux"
import fetchFeed from "../src/actions/fetch-feed";
import 'isomorphic-fetch'

const clientBuildFolder = path.resolve(__dirname, '../../build')

const renderServer = (store: any) => {
    return new Promise((resolve, reject) => {
        const state = store.getState()
        const component = <Provider store={store}>
            <Home />
        </Provider>
        fs.readFile(path.join(clientBuildFolder, 'index.html'), 'utf8', (err, data) => {
            if (err) {
                return reject(err.message)
            }
            return resolve(data.replace(
                '<div id="root"></div>',
                `<div id="root">${renderToString(component)}</div > 
                <script>window.__REDUX_STATE__ = ${JSON.stringify(state)}</script>
                `
            ))
        })
    })
}

const app = express()

const PORT = process.env.PORT || 8006;

app.get('/', async (req, res) => {
    const store = createStore()
    const page = req.query.page;
    await fetchFeed(page?.toString())(store.dispatch)
    const content = await renderServer(store);
    res.send(content)
})

app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`)
})

app.use(express.static(clientBuildFolder))
