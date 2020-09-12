import '@testing-library/react';
import '@testing-library/jest-dom';
import {shallow} from "enzyme";
import React from "react";
import GifExpertApp from "../../components/GifExpertApp/GifExpertApp";
import {useFetchGifs} from "../../hooks/useFetchGifs";
import {renderHook} from "@testing-library/react-hooks";


describe('TEST useFetchGifs', () => {
  const wrapper = shallow(<GifExpertApp />);
  test('should return initial state', async () => {
    // expect(wrapper).();
    //const category = 'Goku';
    // const {data:images, loading} = useFetchGifs(category)
    const { result, waitForNextUpdate }  = renderHook(() => useFetchGifs('Goku'));
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toEqual(true);
  });

  test('should return images array && loading false', async () => {
    // expect(wrapper).();
    //const category = 'Goku';
    // const {data:images, loading} = useFetchGifs(category)
    const { result, waitForNextUpdate }  = renderHook(() => useFetchGifs('Goku'));
    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });

});
