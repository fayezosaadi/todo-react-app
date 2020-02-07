import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import TodoItems from "../../components/TodoItems";
import App from "../../App";

const mockItem1 = { text: 'First Task', id: 1, isCompleted: false };
const mockItem2 = { text: 'Second Task', id: 2, isCompleted: false };

describe('<TodoItems />',  () => {

  it('should render', () => {
    render(<TodoItems items={[mockItem1]}/>)
  });

  it('should render and match the snapshot', () => {
    const component = renderer.create(<TodoItems items={[mockItem1]}/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render all items', () => {
    const { getByText } = render(<TodoItems items={[mockItem1, mockItem2]} />);
    const text1 = getByText('First Task');
    const text2 = getByText('Second Task');
    expect(text1).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
  });

  it('should hide item when isCompleted and hide are true', () => {
    render(<TodoItems hide={true} items={[{...mockItem2, isCompleted: true }]}/>);
    expect(screen.queryByText('Second Task')).toBeNull()
  });

  it('should delete an item', () => {
    const { getByText } = render(<App itemsInitialState={[ mockItem1 ]}/>);
    expect(screen.queryByText('First Task')).toBeTruthy();
    fireEvent.click(getByText(/x/i));
    expect(screen.queryByText('First Task')).toBeNull()
  });

});
