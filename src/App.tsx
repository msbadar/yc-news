import React from 'react';
import Home from './pages/home';
import { Provider } from "react-redux"
import createStore from './create-store';

const store = createStore();
export default () => <Provider store={store}> <Home /></Provider>
