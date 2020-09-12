import '@testing-library/react';
import '@testing-library/jest-dom';
import {shallow} from "enzyme";
import React from "react";
import GifGrid from "../../components/GifGrid/GifGrid";
import {useFetchGifs} from "../../hooks/useFetchGifs";

jest.mock('../../hooks/useFetchGifs');

describe('TEST GifGridItem', () => {
  const category = 'Goku';

  test('should show component correctly', () => {
    useFetchGifs.mockReturnValue({
      data:[],
      loading: true
    });
    const wrapper = shallow(<GifGrid category={category}/>);

    expect(wrapper).toMatchSnapshot();
  });

  test('should show items when load images -> with useFetchGifs', () => {
    const gifs = [{id: '1', title: 'titulo', url: 'https://co.com'}];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });
    const wrapper = shallow(<GifGrid category={category}/>);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

  });
});
