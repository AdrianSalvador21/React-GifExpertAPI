import '@testing-library/react';
import '@testing-library/jest-dom';
import {shallow} from "enzyme";
import React from "react";
import GifExpertApp from "../../components/GifExpertApp/GifExpertApp";

jest.mock('../../hooks/useFetchGifs');

describe('TEST GifExpertApp', () => {
  const wrapper = shallow(<GifExpertApp />);
  test('should show component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should show list of categories', () => {
    const categories = ['Goku', 'Vegetta'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);

  });


});
