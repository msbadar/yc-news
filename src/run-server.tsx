import React from "react"
import App from "./App"
import ReactDomServer from "react-dom/server";

export default () => {
    return ReactDomServer.renderToString(<App />)
}