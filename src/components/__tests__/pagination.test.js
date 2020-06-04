import React from 'react';
import { render } from '@testing-library/react';
import Component from "../pagination"

it('Should not show prev button for first page', () => {
    const component = <Component page={0} nbPages={10} />
    const { container } = render(component);
    const paginationContainer = container.getElementsByClassName('pagination')
    expect(paginationContainer[0].childNodes.length).toBe(1)
});


it('Should show pagination both prev and next button', () => {
    const component = <Component page={1} nbPages={10} />
    const { container } = render(component);
    const paginationContainer = container.getElementsByClassName('pagination')
    expect(paginationContainer[0].childNodes.length).toBe(2)
});


it('Should not pagination next button for last page', () => {
    const component = <Component page={10} nbPages={10} />
    const { container } = render(component);
    const paginationContainer = container.getElementsByClassName('pagination')
    expect(paginationContainer[0].childNodes.length).toBe(1)
});


