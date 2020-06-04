import React from 'react';
import { render } from '@testing-library/react';
import Header from "../header"

it('should render header text', () => {
    const Component = <Header  />
    const { getByText  } = render(Component);
    const headerElement = getByText(/Hacker news/i);
    expect(headerElement).toBeInTheDocument();
});


it('should render row text', () => {
    const Component = <Header  />
    const { getByText  } = render(Component);
    const rowElement = getByText(/Comments/i);
    expect(rowElement).toBeInTheDocument();
});

