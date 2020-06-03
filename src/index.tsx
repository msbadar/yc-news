import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

const isProd = process.env.NODE_ENV === "production";

if (!isProd) {

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
    document.getElementById('root')
  );
}else{
  console.log(">>> hydrate")
  ReactDOM.hydrate(
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
    document.getElementById('root')
  );
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
