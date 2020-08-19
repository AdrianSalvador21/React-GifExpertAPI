import React, {useState} from 'react';
import AddCategory from "../AddCategory/AddCategory";
import GifGrid from "../GifGrid/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Goku']);

  return (
    <div>
      <h2>GifExpertApp</h2>

      <AddCategory setCategories={setCategories}/>
      <hr />
      <ol>
        {
          categories.map((category, idx) =>
            (
              <GifGrid category={category}
                       key={category}
              />
            )
          )
        }
      </ol>
    </div>
  );
};

export default GifExpertApp;
