import React from "react";
import { useStateContext } from "../context/useStateContext";
import { useEffect } from "react";


const Configbar = () => {
  const {categories, chooseCategory, filter} = useStateContext()
  const sortType = ["Highest", "Lowest", "Ascending", "Descending", "Most rated",]

  return (
    <div className="configbar">

      <div className="category">
        <select  className="select-sort" onChange={filter}>
          <option value="">Sort items</option>
          {sortType.map((el, index) => <option key={index} value={el} > {el} </option>)}
        </select>
        <select id="select-category" onChange={chooseCategory}>
          <option value="">Select a category</option>
          {categories.map((el, index) => <option key={index} value={el} > {el} </option>)}
        </select>
      </div>
    </div>
  );
};

export default Configbar;
