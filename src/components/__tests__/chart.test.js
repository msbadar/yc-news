import React from 'react';
import { render } from '@testing-library/react';
import mock from "../../__mock__/feed.js";
import Chart from "../chart"

it('renders chart with a value', () => {
    const Component = <Chart data={mock.hits} height={350} width={350} />
    const { getByText  } = render(Component);
    const lineElement = getByText(/150/i);
    expect(lineElement).toBeInTheDocument();
});

