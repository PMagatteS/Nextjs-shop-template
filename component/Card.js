import { AiOutlineMinus, AiOutlinePlus, AiOutlineInfoCircle } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { useStateContext } from "../context/useStateContext";
import { useState } from "react";


const Card = ({item, index}) => {
  const {addCartItem, getSubtotal} = useStateContext()
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
      <Link href={"/item/"+item.id}>
      <div className="card-img">
      <AiOutlineInfoCircle className="info-button"></AiOutlineInfoCircle>
        <Image src={item.image} fill={true} alt={item.title} ></Image>
      </div>
      </Link>
      <p className="title">{item.title}</p>
     
        <p className="price">${item.price}</p>
        <p className="quantity">
          <span >
            <AiOutlineMinus className="minus" onClick={decrease}/>
          </span>
          <span className="product-quantity">{quantity}</span>
          <span >

            <AiOutlinePlus className="plus" onClick={increase}/>
          </span>
        </p>
     
      <button className="add-to-cart" onClick={(e) => addCartItem(e,item, quantity, setQuantity)}>
        add to cart
      </button>
    </div>
  );
};

export default Card;
