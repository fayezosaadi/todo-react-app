import React from "react";
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import TodoHeader from "../../components/TodoHeader";

describe('<TodoHeader />',  () => {
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState')
  useStateSpy.mockImplementation((init) => [init, setState]);

  it('should render', () => {
    render(<TodoHeader />)
  });

  it('should render and match the snapshot', () => {
    const component = renderer.create(<TodoHeader />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should match the title', () => {
    const { getByText } = render(<TodoHeader />);
    const text = getByText('Todo List (1)');

    expect(text).toBeInTheDocument();
  });
});
