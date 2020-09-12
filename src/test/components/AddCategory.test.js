import {shallow} from "enzyme";
import React from "react";
import AddCategory from "../../components/AddCategory/AddCategory";

describe('TEST -> AddCategory.js', () => {

  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories}/>);
  });

  test('should show component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('dont should post on submit', () => {
    const input = wrapper.find('input');
    const value = 'Hola mundo';
    input.simulate('change', { target: {value} });
  });

  test('dont should post info on submit', () => {
    const form = wrapper.find('form').simulate('submit', {preventDefault(){} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test('should call setCategories & clear text input', () => {
    const value = 'Hola mundo';
    const input = wrapper.find('input').simulate('change', {target: {value}});
    input.simulate('change', { target: {value} });
    const form = wrapper.find('form').simulate('submit', {preventDefault(){} });
    expect(setCategories).toHaveBeenCalled();
    // expect(setCategories).toHaveBeenCalledTimes(1);
    // expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(input.prop('value')).toBe('');
  });
});
