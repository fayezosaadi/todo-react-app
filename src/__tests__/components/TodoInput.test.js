import React from "react";
import { fireEvent, render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import TodoInput from "../../components/TodoInput";
import App from "../../App";

const localStorage = require("local-storage");

describe('<TodoInput />', () => {
  it('should render', () => {
    render(<TodoInput />)
  });

  it('should render and match the snapshot', () => {
    const component = renderer.create(<TodoInput />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should update the state', () => {
    const { getByPlaceholderText } = render(<App />);
    expect(getByPlaceholderText(/Type to add new tasks/i).textContent).toBe("");
    fireEvent.change(getByPlaceholderText("Type to add new tasks"), { target: { value: 'First Todo' } } )
    expect(getByPlaceholderText(/Type to add new tasks/i).value).toBe("First Todo");
  });

  it("should submit and update state value", () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const input = getByPlaceholderText(/Type to add new tasks/i);
    fireEvent.change(input, { target: { value: 'First Todo' } } );
    fireEvent.submit(input);
    const text = getByText(/First Todo/i);
    expect(text).toBeInTheDocument();
    const [item] = JSON.parse(localStorage.get("items"));
    expect(item.text).toBe("First Todo");
  })

});
