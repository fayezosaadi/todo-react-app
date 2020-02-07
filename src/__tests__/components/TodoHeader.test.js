import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme'

import TodoHeader from "../components/TodoHeader";
import toJason from 'enzyme-to-json'

configure({ adapter: new Adapter() });

describe('<TodoHeader />', () => {
  it('should render', () => {
    shallow(<TodoHeader />)
  });

  it('should render and match the snapshot', () => {
    const wrapper = shallow(<TodoHeader />);

    expect(toJason(wrapper)).toMatchSnapshot()
  })
});
