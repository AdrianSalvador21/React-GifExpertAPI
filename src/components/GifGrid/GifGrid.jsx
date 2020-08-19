import React, {useState, useEffect} from 'react';
import GifGridItem from "../GifGridItem/GifGridItem";
import {getGifs} from "../../helpers/getGifs";
import {useFetchGifs} from "../../hooks/useFetchGifs";

const GifGrid = ({category}) => {
  const {data:images, loading} = useFetchGifs(category);

  // const [images, setImages] = useState([]);
  /* useEffect(() => {
    getGifs(category).then((imgs) => {
      setImages(imgs);
    });
  }, [category]); */
  return (
    <>
      <h3 className='animate__animated animate__fadeIn'>{category}</h3>
      {loading && <p>Cargando</p>}
      <div className="card-grid">
          {
            images.map((img) => {
              return (
                <GifGridItem key={img.id}
                             img={img}
                             {...img}
                />
              )
            })
          }
      </div>
    </>
  );
};

export default GifGrid;
