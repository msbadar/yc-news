import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

it('Renders App.js', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hacker News/i);
  expect(linkElement).toBeInTheDocument();
});

