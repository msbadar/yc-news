import React from 'react';
import { render } from '@testing-library/react';
import Home from '../home';
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import mock from "../../__mock__/feed.js";

const mockReducerData = {
    news: {
        results: mock.hits,
        page: mock.page,
        nbPages: mock.nbPages
    },
}

it('renders home page', () => {
    const store = createStore(() => mockReducerData, {}, applyMiddleware(thunk))
    const Component = <Provider store={store}><Home /></Provider>
    render(Component);
});

