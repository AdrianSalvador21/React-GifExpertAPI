import '@testing-library/react';
import {shallow} from "enzyme";
import React from "react";
import GifGridItem from "../../components/GifGridItem/GifGridItem";

describe('TEST GifGridItem', () => {
  const title = 'Un titulo';
  const url = 'http://localhost:4200';
  const wrapper = shallow(<GifGridItem title={title} url={url}/>);


  test('should show component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should have a p with title', () => {
    const p  = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });

  test('should have a image with url & alt', () => {
    const img  = wrapper.find('img');
    // console.log(img.html());
    //console.log(img.props());
    //console.log(img.prop('src'));
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);

  });

  test('should have animate_fadeIn class', () => {
    const div  = wrapper.find('div');
    const className = div.prop('className');
    expect(className.includes('animate__animated')).toBe(true);
  });
});
