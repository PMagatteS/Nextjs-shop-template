import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Image from "next/image";
import { useStateContext } from "../context/useStateContext";
import { useState } from "react";


const Card = ({item, index}) => {
  // const {addCartItem, getSubtotal} = useStateContext()
  // it is easier to keep the state and funtions in this component
  const [quantity, setQuantity] = useState(1)
  const increase = () => {
    setQuantity(qty =>qty+1) 
  }
  const decrease = () => {
    if(quantity===1){
      return
    }
    setQuantity(qty =>qty-1) 
  }

   return (
    <div className="card">
      <div className="card-img">

      <img src={item.image} alt="" />
      {/* need to learn about domain configuration for images */}
        {/* <Image src={item.image} fill={true} alt={item.title} ></Image> */}
      </div>
      <p className="title">{item.title}</p>
      <div className="product-price">
        <p className="price">{item.price}</p>
        <p className="quantity">
          <span className="minus">
            <AiOutlineMinus onClick={decrease}/>
          </span>
          <span className="product-quantity">{quantity}</span>
          <span className="plus">
            {/* <AiOutlinePlus onClick={()=> changeCardQuantity('increase')}/> */}
            <AiOutlinePlus onClick={increase}/>
          </span>
        </p>
      </div>
      <button className="add-to-cart" onClick={null}>
        add to cart
      </button>
    </div>
  );
};

export default Card;
