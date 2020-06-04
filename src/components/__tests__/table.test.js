import React from 'react';
import { render, fireEvent, screen, waitFor, } from '@testing-library/react';
import Component from "../table"
import mock from "../../__mock__/feed";


const data = mock.hits;

it('Should render the table component', () => {
    const component = <Component data={data} />
    const { getByText } = render(component);
    expect(getByText(data[0].title)).toBeInTheDocument()
});

