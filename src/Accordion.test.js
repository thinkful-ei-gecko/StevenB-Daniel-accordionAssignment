import sections from './state-drills/sections'
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json'
import Accordion from './state-drills/Accordion.js';
import renderer from 'react-test-renderer';
import React from 'react';
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({adapter: new Adapter() });







describe ('<Accordion />', () => {
  it('renders as empty', () => {
    const wrapper = shallow(<Accordion />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders no section active by default', () => {
    const wrapper = shallow(<Accordion sections={sections} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('opens a clicked section', () => {
    const wrapper = shallow(<Accordion sections={sections} />)
    wrapper.find('button').at(1).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('only opens the last section', () => {
    const wrapper =shallow(<Accordion sections={sections}/>)
    wrapper.find('button').at(1).simulate('click')
    wrapper.find('button').at(2).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
