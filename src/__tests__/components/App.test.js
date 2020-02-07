import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import App from "../../App";

describe('<App />',  () => {
  it('should render', () => {
    render(<App/>)
  });

  it('should render and match the snapshot', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
