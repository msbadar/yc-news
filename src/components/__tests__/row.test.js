import React from 'react';
import { render, fireEvent, screen, waitFor, } from '@testing-library/react';
import Component from "../row"
import mock from "../../__mock__/feed";


const data = mock.hits[0];

it('Should render the component', () => {
    const component = <Component news={data} />
    const { getByText } = render(component);
    expect(getByText(data.title)).toBeInTheDocument()
});


it('Should trigger handleVote with id', () => {
    const handleVote = jest.fn()
    const component = <Component news={data} handleVote={handleVote} />
    const { getByText } = render(component);
    const button = getByText(/▲/i)
    fireEvent.click(button)
    expect(handleVote).toHaveBeenCalledWith(data.objectID);
});

it('Should trigger handleHide with id', () => {
    const handleHide = jest.fn()
    const component = <Component news={data} handleHide={handleHide} />
    const { getByText } = render(component);
    const button = getByText(/hide/i)
    fireEvent.click(button)
    expect(handleHide).toHaveBeenCalledWith(data.objectID);
});

