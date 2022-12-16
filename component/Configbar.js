import React from "react";
import { useStateContext } from "../context/useStateContext";
import { useEffect } from "react";


const Configbar = () => {
  const {categories, chooseCategory} = useStateContext()


  return (
    <div className="configbar">
      <div className="category">
        <select id="select-category" onChange={chooseCategory}>
          <option value="">Select a category</option>
          {categories.map((el, index) => <option key={index} value={el} > {el} </option>)}
        </select>
      </div>
    </div>
  );
};

export default Configbar;
