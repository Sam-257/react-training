import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import ButtonTest from "../Components/ButtonTest";

test('increment counter', () => { 
    render(<ButtonTest />);
    const counter = screen.getByTestId('counter');
    const incrementBtn = screen.getByTestId('increment');

    fireEvent.click(incrementBtn);

    expect(counter).toHaveTextContent('1');
 });