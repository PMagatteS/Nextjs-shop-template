import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { useStateContext } from "../context/useStateContext";
import Image from "next/image";

const CartItem = ({item, index}) => {
 const {removeCartItem, updateCartItem} = useStateContext()
  return (
    <div className="cart-items">
      <div className="cart-image">
        <Image src={item.image} fill={true}  style={{ objectFit: "contain" }} alt={item.title}></Image>
      </div>
 
        <p className="title cart-title">{item.title}</p>
        <p className="cart-quantity">
          <span >
            <AiOutlineMinus className="minus" onClick={() =>updateCartItem(item, "decrease")}/>
          </span>
          <span className="product-quantity">{item.quantity}</span>
          <span  >
            <AiOutlinePlus className="plus" onClick={() =>updateCartItem(item, "increase")}/>
          </span>
        </p>
    
      <div className="total">Total: ${(item.price*item.quantity).toFixed(2)}</div>
      <div className="delete">
        <AiOutlineCloseCircle
          className="delete-icon"
          onClick={() => removeCartItem(item, index)}
        ></AiOutlineCloseCircle>
      </div>
    </div>
  );
};

export default CartItem;
